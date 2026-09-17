type Activity = {
  title: string;
  description: string;
  time: string;
};

const activities: Activity[] = [
  {
    title: "Completed a lesson",
    description: "React Fundamentals",
    time: "Today",
  },
  {
    title: "Started a course",
    description: "UI/UX Design Fundamentals",
    time: "Yesterday",
  },
  {
    title: "Completed a quiz",
    description: "JavaScript Basics",
    time: "2 days ago",
  },
];

function DashboardActivity() {
  return (
    <div className="dashboard-activity">
      {activities.map((activity) => (
        <div className="dashboard-activity-item" key={activity.title}>
          <div className="dashboard-activity-icon">✓</div>

          <div>
            <h4>{activity.title}</h4>
            <p>{activity.description}</p>
          </div>

          <small>{activity.time}</small>
        </div>
      ))}
    </div>
  );
}

export default DashboardActivity;