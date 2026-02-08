import './StatusTag.css';

const statusClasses = {
  completed: 'status-tag status-tag--completed',
  approved: 'status-tag status-tag--completed',
  'in-progress': 'status-tag status-tag--in-progress',
  'pending-review': 'status-tag status-tag--pending-review',
  'under-review': 'status-tag status-tag--under-review',
  pending: 'status-tag status-tag--pending',
  delayed: 'status-tag status-tag--delayed',
};

export default function StatusTag({ status, label }) {
  const className = statusClasses[status] || 'status-tag status-tag--pending';
  const displayLabel = label || status?.replace(/-/g, ' ');

  return <span className={className}>{displayLabel}</span>;
}
