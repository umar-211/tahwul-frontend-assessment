import { useState } from 'react';
import Card from '../../ui/Card';
import StatusTag from '../../ui/StatusTag';
import Avatar from '../../ui/Avatar';
import {
  perspectiveEvidenceDocuments,
  perspectiveEvidenceComments,
  perspectiveEvidenceActivities,
} from '../../../data/mockData';
import { SortUpIcon, SortDownIcon, SendIcon } from '../../../assets/icons';
import './PerspectivesEvidenceTab.css';

const statusLabel = {
  approved: 'Approved',
  'pending-review': 'Pending Review',
};

function SortIcon() {
  return (
    <span className="perspectives-evidence__sort-icon" aria-hidden>
      <SortUpIcon />
      <SortDownIcon />
    </span>
  );
}

export default function PerspectivesEvidenceTab() {
  const [commentText, setCommentText] = useState('');

  return (
    <div className="perspectives-evidence">
      <div className="perspectives-evidence__table-row">
        <Card className="perspectives-evidence__table-card">
          <div className="perspectives-evidence__table-wrap">
            <table className="perspectives-evidence__table">
              <thead>
                <tr>
                  <th>Document Number <SortIcon /></th>
                  <th>Document Name <SortIcon /></th>
                  <th>Document Lead <SortIcon /></th>
                  <th>Document Preparer <SortIcon /></th>
                  <th>Date <SortIcon /></th>
                  <th>Due Date <SortIcon /></th>
                  <th>Status <SortIcon /></th>
                </tr>
              </thead>
              <tbody>
                {perspectiveEvidenceDocuments.map((doc) => (
                  <tr key={doc.id}>
                    <td className="perspectives-evidence__table-cell">{doc.documentNumber}</td>
                    <td className="perspectives-evidence__table-title">{doc.documentName}</td>
                    <td className="perspectives-evidence__table-cell">{doc.documentLead}</td>
                    <td className="perspectives-evidence__table-cell">{doc.documentPreparer}</td>
                    <td className="perspectives-evidence__table-cell">{doc.date}</td>
                    <td className="perspectives-evidence__table-cell">{doc.dueDate}</td>
                    <td>
                      <StatusTag status={doc.status} label={statusLabel[doc.status] || doc.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      <div className="perspectives-evidence__bottom-row">
        <Card className="perspectives-evidence__comments-card">
          <h3 className="perspectives-evidence__card-title">Comments</h3>
          <ul className="perspectives-evidence__comments-list">
            {perspectiveEvidenceComments.map((c) => (
              <li key={c.id} className="perspectives-evidence__comment">
                <Avatar name={c.authorName} size="sm" iconOnly />
                <div className="perspectives-evidence__comment-body">
                  <div className="perspectives-evidence__comment-meta">
                    <span className="perspectives-evidence__comment-author">{c.authorName}</span>
                    <span className="perspectives-evidence__comment-date">{c.date}</span>
                  </div>
                  <p className="perspectives-evidence__comment-text">{c.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a comment..."
            className="perspectives-evidence__textarea"
            rows={3}
          />
          <button type="button" className="perspectives-evidence__post-btn">
            <SendIcon className="perspectives-evidence__post-icon" />
            Post Comment
          </button>
        </Card>

        <Card className="perspectives-evidence__activities-card">
          <h3 className="perspectives-evidence__card-title">Recent Activities</h3>
          <ul className="perspectives-evidence__activities-list">
            {perspectiveEvidenceActivities.map((activity) => (
              <li key={activity.id} className="perspectives-evidence__activity">
                <span className="perspectives-evidence__activity-bullet" />
                <div className="perspectives-evidence__activity-content">
                  <span className="perspectives-evidence__activity-text">{activity.text}</span>
                  <span className="perspectives-evidence__activity-time">{activity.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
