import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type DashboardStatCardProps = {
  icon: IconDefinition;
  value: string;
  label: string;
};

function DashboardStatCard({
  icon,
  value,
  label,
}: DashboardStatCardProps) {
  return (
    <div className="dashboard-stat-card">
      <div className="dashboard-stat-icon">
        <FontAwesomeIcon icon={icon} />
      </div>

      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
}

export default DashboardStatCard;