import './Avatar.css';

function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export default function Avatar({ name, role, size = 'md', iconOnly = false, className = '' }) {
  const sizeClass = size === 'sm' ? 'avatar--sm' : size === 'lg' ? 'avatar--lg' : 'avatar--md';

  return (
    <div className={`avatar ${sizeClass} ${className}`.trim()}>
      <span className="avatar__initials">{getInitials(name || '?')}</span>
      {!iconOnly && (name || role) && (
        <div className="avatar__info">
          {name && <span className="avatar__name">{name}</span>}
          {role && <span className="avatar__role">{role}</span>}
        </div>
      )}
    </div>
  );
}
