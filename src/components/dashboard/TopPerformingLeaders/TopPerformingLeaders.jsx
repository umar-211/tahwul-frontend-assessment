import { topPerformingLeaders } from '../../../data/mockData';
import Avatar from '../../ui/Avatar';
import Card from '../../ui/Card';
import './TopPerformingLeaders.css';

export default function TopPerformingLeaders() {
  return (
    <Card className="top-leaders">
      <h3 className="top-leaders__title">Top Performing Perspective Leaders</h3>
      <div className="top-leaders__list">
        {topPerformingLeaders.map((leader) => (
          <div key={leader.id} className="top-leaders__item">
            <Avatar name={leader.name} size="md" iconOnly />
            <div className="top-leaders__info">
              <p className="top-leaders__name">{leader.name}</p>
              <p className="top-leaders__perspective">{leader.perspective}</p>
            </div>
            <span className="top-leaders__score">{leader.score}%</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
