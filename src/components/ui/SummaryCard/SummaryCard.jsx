import './SummaryCard.css';

export default function SummaryCard({ category, title, subtitle, progress }) {
  return (
    <div className="summary-card">
      <div className="summary-card__content">
        <div className="summary-card__main">
          {category && (
            <p className="summary-card__category">{category}</p>
          )}
          <h2 className="summary-card__title">{title}</h2>
          {subtitle && (
            <p className="summary-card__subtitle">{subtitle}</p>
          )}
        </div>
        {progress != null && (
          <div className="summary-card__progress-wrap">
            <div className="summary-card__progress-circle">
              <span className="summary-card__progress-value">{progress}%</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
