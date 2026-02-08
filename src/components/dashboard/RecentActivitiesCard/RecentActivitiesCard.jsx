import { recentActivities } from '../../../data/mockData';
import Card from '../../ui/Card';
import './RecentActivitiesCard.css';

export default function RecentActivitiesCard() {
  const items = recentActivities.slice(0, 3);

  return (
    <Card className="recent-activities-card">
      <h3 className="recent-activities-card__title">Recent Activities</h3>
      <ul className="recent-activities-card__list">
        {items.map((activity) => (
          <li key={activity.id} className="recent-activities-card__item">
            <span className="recent-activities-card__dot" />
            <span className="recent-activities-card__text">{activity.text}</span>
            <span className="recent-activities-card__time">{activity.time}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
