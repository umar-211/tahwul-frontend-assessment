import { useState } from 'react';
import StatusTag from '../../ui/StatusTag';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import { evidenceDocuments, recentActivities } from '../../../data/mockData';
import './EvidenceTab.css';

const formatStatus = (status) => {
  const map = {
    completed: 'Completed',
    'in-progress': 'In Progress',
    'under-review': 'Under Review',
    pending: 'Pending',
    delayed: 'Delayed',
  };
  return map[status] || status;
};

export default function EvidenceTab() {
  const [summary, setSummary] = useState('');

  return (
    <div className="evidence-tab">
      <div className="evidence-tab__main">
        <Card className="evidence-tab__table-card">
          <div className="evidence-tab__table-wrap">
            <table className="evidence-tab__table">
              <thead>
                <tr>
                  <th>Document Title</th>
                  <th>Document Owner</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {evidenceDocuments.map((doc) => (
                  <tr key={doc.id}>
                    <td className="evidence-tab__table-title">{doc.title}</td>
                    <td className="evidence-tab__table-cell">{doc.owner}</td>
                    <td className="evidence-tab__table-cell">{doc.date}</td>
                    <td>
                      <StatusTag status={doc.status} label={formatStatus(doc.status)} />
                    </td>
                    <td className="evidence-tab__table-cell">{doc.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="evidence-tab__table-footer">
            <Button variant="primary" size="md">+ New Document</Button>
          </div>
        </Card>
      </div>

      <div className="evidence-tab__aside">
        <Card className="evidence-tab__card">
          <h3 className="evidence-tab__card-title">Summary</h3>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Add project summary..."
            className="evidence-tab__textarea"
          />
          <div className="evidence-tab__card-actions">
            <Button variant="primary" size="md">Save Summary</Button>
          </div>
        </Card>

        <Card className="evidence-tab__card">
          <h3 className="evidence-tab__card-title">Recent Activity</h3>
          <ul className="evidence-tab__activities">
            {recentActivities.slice(0, 4).map((activity) => (
              <li key={activity.id} className="evidence-tab__activity">
                <span className="evidence-tab__activity-dot" />
                <div>
                  <p className="evidence-tab__activity-text">{activity.text}</p>
                  <p className="evidence-tab__activity-time">{activity.time}</p>
                </div>
              </li>
            ))}
          </ul>
          <a href="#" className="evidence-tab__link">
            View all activity
          </a>
        </Card>
      </div>
    </div>
  );
}
