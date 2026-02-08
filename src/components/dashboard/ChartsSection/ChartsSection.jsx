import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import {
  performanceChartData,
  auditReadiness,
  overallComplianceScore,
} from '../../../data/mockData';
import Card from '../../ui/Card';
import './ChartsSection.css';

const complianceData = [
  { name: 'Complete', value: overallComplianceScore.percentage, color: '#ef4444' },
  { name: 'Remaining', value: 100 - overallComplianceScore.percentage, color: '#e5e7eb' },
];

const auditData = [
  { name: 'Complete', value: auditReadiness.percentage, color: '#22c55e' },
  { name: 'Remaining', value: 100 - auditReadiness.percentage, color: '#e5e7eb' },
];

export function ComplianceScoreCard() {
  return (
    <Card className="charts-section__card charts-section__card--gauge">
      <h3 className="charts-section__title">Overall Compliance Score</h3>
      <div className="charts-section__gauge-wrap">
        <ResponsiveContainer width="100%" height={140}>
          <PieChart>
            <Pie
              data={complianceData}
              cx="50%"
              cy="100%"
              startAngle={180}
              endAngle={0}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={0}
              dataKey="value"
              stroke="none"
            >
              {complianceData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="charts-section__gauge-label">{overallComplianceScore.percentage}%</div>
      </div>
      <p className="charts-section__gauge-sublabel">{overallComplianceScore.label}</p>
    </Card>
  );
}

export function PerformanceBarCard() {
  return (
    <Card className="charts-section__card charts-section__card--bar">
      <h3 className="charts-section__title">12-Month Performance</h3>
      <div className="charts-section__bar-chart-wrap">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            data={performanceChartData}
            margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="month" tick={{ fontSize: 11 }} />
            <YAxis domain={[0, 100]} tick={{ fontSize: 10 }} ticks={[0, 20, 40, 60, 80, 100]} />
            <Tooltip />
            <defs>
              <linearGradient id="barGradient" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#1e40af" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
            <Bar dataKey="value" fill="url(#barGradient)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export function AuditReadinessCard() {
  return (
    <Card className="charts-section__card charts-section__card--gauge">
      <h3 className="charts-section__title">Audit Readiness</h3>
      <div className="charts-section__gauge-wrap">
        <ResponsiveContainer width="100%" height={140}>
          <PieChart>
            <Pie
              data={auditData}
              cx="50%"
              cy="100%"
              startAngle={180}
              endAngle={0}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={0}
              dataKey="value"
              stroke="none"
            >
              {auditData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="charts-section__gauge-label">{auditReadiness.percentage}%</div>
      </div>
      <p className="charts-section__gauge-sublabel">Readiness Level</p>
      <div className="charts-section__audit-stats">
        <p className="charts-section__stat">
          <span className="charts-section__stat-value">{auditReadiness.overdueItems}</span> Overdue Stds
        </p>
        <p className="charts-section__stat">
          <span className="charts-section__stat-value">{auditReadiness.missingEvidence}</span> Missing Evidence
        </p>
      </div>
    </Card>
  );
}

export default function ChartsSection() {
  return (
    <div className="charts-section">
      <ComplianceScoreCard />
      <PerformanceBarCard />
      <AuditReadinessCard />
    </div>
  );
}
