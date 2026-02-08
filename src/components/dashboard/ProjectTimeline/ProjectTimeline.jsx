import { useState } from 'react';
import Card from '../../ui/Card';
import { projectTimelineMilestones } from '../../../data/mockData';
import { ChevronDownSelectIcon } from '../../../assets/icons';
import './ProjectTimeline.css';

const total = projectTimelineMilestones.length;
const completedCount = projectTimelineMilestones.filter((m) => m.status === 'completed').length;

// First dot offset so green line appears before the white dot; last before 100% so line extends past last dot
const firstDotOffsetPercent = 10;
const lastDotPercent = 88;
function milestoneLeftPercent(index) {
  if (index === 0) return firstDotOffsetPercent;
  if (index === total - 1) return lastDotPercent;
  return firstDotOffsetPercent + ((lastDotPercent - firstDotOffsetPercent) * index) / (total - 1);
}

// Green segment: ends between March 18 and May 8, closer to March 18 (per Figma)
const secondCompletedPosition =
  total > 1 && completedCount >= 2
    ? milestoneLeftPercent(1) + (milestoneLeftPercent(2) - milestoneLeftPercent(1)) * 0.35
    : 0;

export default function ProjectTimeline() {
  const [year, setYear] = useState('2026');

  return (
    <Card className="project-timeline-card">
      <div className="project-timeline__header">
        <h2 className="project-timeline__title">Project Timeline</h2>
        <div className="project-timeline__year-wrap">
          <select
            className="project-timeline__year-select"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            aria-label="Select year"
          >
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>
          <ChevronDownSelectIcon className="project-timeline__chevron" aria-hidden />
        </div>
      </div>

      <div className="project-timeline__scroll">
        <div className="project-timeline__track-wrap">
          <div className="project-timeline__track">
          <div
            className="project-timeline__track--completed"
            style={{ width: `${secondCompletedPosition}%` }}
          />
        </div>
        <div className="project-timeline__milestones">
          {projectTimelineMilestones.map((milestone, index) => {
            const isCompleted = milestone.status === 'completed';
            const isFirstCompleted = isCompleted && index === 0;
            const isSecondCompleted = isCompleted && index === 1;
            return (
              <div
                key={`${milestone.date}-${milestone.label}`}
                className="project-timeline__milestone"
                style={{ left: `${milestoneLeftPercent(index)}%` }}
              >
                <div
                  className={`project-timeline__dot ${
                    isFirstCompleted || isSecondCompleted
                      ? 'project-timeline__dot--completed-solid'
                      : 'project-timeline__dot--incomplete'
                  }`}
                />
                <div className="project-timeline__label">
                  <span className="project-timeline__label-date">{milestone.date}</span>
                  <span className="project-timeline__label-desc">{milestone.label}</span>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </Card>
  );
}
