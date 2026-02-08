import Card from '../../ui/Card';
import { perspectiveTimelineProjects, perspectiveRecentActivities } from '../../../data/mockData';
import { ChatIcon } from '../../../assets/icons';
import './PerspectivesTimelineTab.css';

const statusClass = {
  'in-progress': 'perspectives-timeline__status--in-progress',
  complete: 'perspectives-timeline__status--complete',
  overdue: 'perspectives-timeline__status--overdue',
};

export default function PerspectivesTimelineTab() {
  return (
    <div className="perspectives-timeline">
      <Card className="perspectives-timeline__table-card">
        <div className="perspectives-timeline__table-wrap">
          <table className="perspectives-timeline__table">
            <thead>
              <tr>
                <th>Overall Status</th>
                <th>Project Name</th>
                <th>Assign To</th>
                <th>Current Status</th>
                <th>Due Date</th>
                <th>Expected Value</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {perspectiveTimelineProjects.map((row) => (
                <tr key={row.id}>
                  <td>{row.overallStatus}</td>
                  <td>
                    <span className="perspectives-timeline__priority">{row.priority}</span>
                    {row.projectName}
                  </td>
                  <td>{row.assignTo}</td>
                  <td>
                    <span className={`perspectives-timeline__status ${statusClass[row.currentStatus] || ''}`}>
                      {row.currentStatus === 'in-progress' ? 'In Progress' : row.currentStatus === 'complete' ? 'Complete' : 'Overdue'}
                    </span>
                  </td>
                  <td>{row.dueDate}</td>
                  <td>{row.expectedValue}</td>
                  <td>
                    <button type="button" className="perspectives-timeline__action">Action</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <div className="perspectives-timeline__bottom">
        <Card className="perspectives-timeline__chat-card">
          <div className="perspectives-timeline__chat">
            <ChatIcon className="perspectives-timeline__chat-icon" />
            <span>Team Chat</span>
          </div>
        </Card>
        <Card className="perspectives-timeline__activities-card">
          <h4 className="perspectives-timeline__activities-title">Recent Activities</h4>
          <ol className="perspectives-timeline__activities-list">
            {perspectiveRecentActivities.map((a, i) => (
              <li key={a.id}>
                {i + 1}. {a.text}
              </li>
            ))}
          </ol>
        </Card>
      </div>
    </div>
  );
}
