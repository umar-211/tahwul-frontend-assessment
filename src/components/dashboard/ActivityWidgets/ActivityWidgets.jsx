import { teamMembers, recentActivities } from '../../../data/mockData';
import Avatar from '../../ui/Avatar';
import Card from '../../ui/Card';
import './ActivityWidgets.css';

export default function ActivityWidgets() {
  return (
    <div className="activity-widgets">
      <Card className="activity-widgets__card">
        <h3 className="activity-widgets__title">Recent Activities</h3>
        <ul className="activity-widgets__activities">
          {recentActivities.slice(0, 5).map((activity) => (
            <li key={activity.id} className="activity-widgets__activity">
              <span className="activity-widgets__activity-dot" />
              <div>
                <p className="activity-widgets__activity-text">{activity.text}</p>
                <p className="activity-widgets__activity-time">{activity.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </Card>
      <Card className="activity-widgets__card">
        <h3 className="activity-widgets__title">Your Team Members</h3>
        <div className="activity-widgets__list">
          {teamMembers.slice(0, 5).map((member) => (
            <div key={member.id} className="activity-widgets__member">
              <Avatar name={member.name} role={member.role} size="md" />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
