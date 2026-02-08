import Avatar from '../../ui/Avatar';
import Card from '../../ui/Card';
import './LeadersSection.css';

export default function LeadersSection({ leaders }) {
  return (
    <section className="leaders-section">
      <h3 className="leaders-section__title">Leaders</h3>
      <div className="leaders-section__list">
        {leaders.map((leader) => (
          <Card key={leader.id} className="leaders-section__card">
            <Avatar name={leader.name} size="md" iconOnly />
            <div>
              <p className="leaders-section__name">{leader.name}</p>
              <p className="leaders-section__role">{leader.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
