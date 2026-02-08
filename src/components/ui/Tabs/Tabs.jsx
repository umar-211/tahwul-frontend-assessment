import './Tabs.css';

export default function Tabs({ tabs, activeTab, onChange, className = '' }) {
  return (
    <div className={`tabs ${className}`.trim()}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange?.(tab.id)}
          className={`tabs__tab ${activeTab === tab.id ? 'tabs__tab--active' : ''}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
