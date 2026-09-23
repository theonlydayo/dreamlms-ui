import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import "./InstructorStatCard.css";

type InstructorStatCardProps = {
  title: string;
  value: string | number;
  icon: IconDefinition;
};

function InstructorStatCard({
  title,
  value,
  icon,
}: InstructorStatCardProps) {
  return (
    <div className="instructor-stat-card">
      <div className="instructor-stat-icon">
        <FontAwesomeIcon icon={icon} />
      </div>

      <div>
        <span>{title}</span>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

export default InstructorStatCard;