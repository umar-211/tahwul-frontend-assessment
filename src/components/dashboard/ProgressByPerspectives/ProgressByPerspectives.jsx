import { perspectivesProgress, statusLegend } from '../../../data/mockData';
import Card from '../../ui/Card';
import './ProgressByPerspectives.css';

const statusDotClass = {
  completed: 'progress-perspectives__circle progress-perspectives__circle--completed',
  'in-progress': 'progress-perspectives__circle progress-perspectives__circle--in-progress',
  'not-started': 'progress-perspectives__circle progress-perspectives__circle--not-started',
  'partially-uploaded': 'progress-perspectives__circle progress-perspectives__circle--partially-uploaded',
  'fully-uploaded': 'progress-perspectives__circle progress-perspectives__circle--fully-uploaded',
  delayed: 'progress-perspectives__circle progress-perspectives__circle--delayed',
};

export default function ProgressByPerspectives() {
  return (
    <div className="progress-perspectives">
      <div className='flex justify-between'> 
      <h2 className="progress-perspectives__title">Progress Status</h2>
      <div className="progress-perspectives__legend">
        {statusLegend.map((item) => (
          <div key={item.label} className="progress-perspectives__legend-item">
            <span className={`progress-perspectives__legend-dot progress-perspectives__legend-dot--${item.color}`} />
            <span className="progress-perspectives__legend-label">{item.label}</span>
          </div>
        ))}
      </div>
</div>
      <div className="progress-perspectives__columns">
        {perspectivesProgress.map((perspective) => (
          <div key={perspective.id} className="progress-perspectives__column">
            <Card className="progress-perspectives__domain-card">
              <h3 className="progress-perspectives__domain-title">{perspective.title}</h3>
              <p className="progress-perspectives__domain-value">{perspective.progress}%</p>
            </Card>
            <div className="progress-perspectives__sections">
              {perspective.sections?.map((section, sIdx) => (
                <Card key={sIdx} className="progress-perspectives__section-card">
                  <h4 className="progress-perspectives__section-title">{section.name}</h4>
                  <div className="progress-perspectives__circles">
                    {section.items.map((item, i) => (
                      <div
                        key={i}
                        className={statusDotClass[item.status] || 'progress-perspectives__circle progress-perspectives__circle--not-started'}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
