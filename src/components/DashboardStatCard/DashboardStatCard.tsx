import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type DashboardStatCardProps = {
  icon: IconDefinition;
  value: string;
  label: string;
  color: string;
};

function DashboardStatCard({
  icon,
  value,
  label,
  color,
}: DashboardStatCardProps) {
  return (
    <div className="dashboard-stat-card">
      <div
        className="dashboard-stat-icon"
        style={{ color }}
      >
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