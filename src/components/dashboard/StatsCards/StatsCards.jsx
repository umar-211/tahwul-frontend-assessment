import { dashboardStats } from '../../../data/mockData';
import { FolderIcon } from '../../../assets/icons';
import StatCard from '../../ui/StatCard';
import './StatsCards.css';

export default function StatsCards() {
  return (
    <div className="stats-cards">
      {dashboardStats.map((stat) => (
        <StatCard
          key={stat.label}
          label={stat.label}
          value={stat.value}
          subValue={stat.subValue}
          icon={<FolderIcon />}
          color={stat.color}
        />
      ))}
    </div>
  );
}
