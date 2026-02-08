import Card from '../Card';
import './StatCard.css';

export default function StatCard({ label, value, subValue, icon, color = 'blue', valueColor = 'accent', layout = 'default' }) {
  const valueClass = valueColor === 'dark' ? 'stat-card__value--dark' : '';
  const isMetric = layout === 'metric';

  if (isMetric) {
    return (
      <Card className={`stat-card stat-card--metric stat-card--${color}`}>
        {icon && (
          <div className="stat-card__icon stat-card__icon--top-right">
            {icon}
          </div>
        )}
        <p className={`stat-card__value stat-card__value--lead ${valueClass}`}>{value}</p>
        <p className="stat-card__label">{label}</p>
        {subValue && <p className="stat-card__sub-value">{subValue}</p>}
      </Card>
    );
  }

  return (
    <Card className={`stat-card stat-card--${color}`}>
      {icon && (
        <div className="stat-card__icon">
          {icon}
        </div>
      )}
      <p className="stat-card__label">{label}</p>
      <p className={`stat-card__value ${valueClass}`}>{value}</p>
      {subValue && <p className="stat-card__sub-value">{subValue}</p>}
    </Card>
  );
}
