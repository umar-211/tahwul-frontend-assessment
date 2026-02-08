import ProjectTimeline from '../../components/dashboard/ProjectTimeline';
import TimelineMetricCards from '../../components/dashboard/TimelineMetricCards';
import StatsCards from '../../components/dashboard/StatsCards';
import ProgressByPerspectives from '../../components/dashboard/ProgressByPerspectives';
import {
  ComplianceScoreCard,
  PerformanceBarCard,
  AuditReadinessCard,
} from '../../components/dashboard/ChartsSection';
import TopPerformingLeaders from '../../components/dashboard/TopPerformingLeaders';
import RecentActivitiesCard from '../../components/dashboard/RecentActivitiesCard';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <ProjectTimeline />
      <TimelineMetricCards />
      <StatsCards />
      <ProgressByPerspectives />

      <div className="dashboard__cards-top">
        <ComplianceScoreCard />
        <TopPerformingLeaders />
        <RecentActivitiesCard />
      </div>
      <div className="dashboard__charts-bottom">
        <PerformanceBarCard />
        <AuditReadinessCard />
      </div>
    </div>
  );
}
