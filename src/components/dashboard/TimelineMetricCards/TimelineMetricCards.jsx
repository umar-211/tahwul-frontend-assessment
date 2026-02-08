import { createElement } from 'react';
import { timelineMetrics } from '../../../data/mockData';
import { iconMap } from '../../../assets/icons';
import StatCard from '../../ui/StatCard';
import './TimelineMetricCards.css';

export default function TimelineMetricCards() {
  return (
    <div className="timeline-metric-cards">
      {timelineMetrics.map((metric) => {
        const IconComponent = iconMap[metric.icon] ?? iconMap.folder;
        return (
          <StatCard
            key={metric.label}
            label={metric.label}
            value={metric.value}
            icon={createElement(IconComponent)}
            color="red"
            valueColor="dark"
            layout="metric"
          />
        );
      })}
    </div>
  );
}
