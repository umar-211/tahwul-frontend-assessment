import { projectDetails } from '../../../data/mockData';
import LeadersSection from '../LeadersSection';
import './OverviewTab.css';

function OverviewRow({ label, children }) {
  return (
    <div className="overview-tab__row">
      <div className="overview-tab__label">{label}</div>
      <div className="overview-tab__content-card">
        {children}
      </div>
    </div>
  );
}

export default function OverviewTab({ data }) {
  const source = data ?? projectDetails;
  const {
    objective,
    implementationRequirements,
    evidenceDocumentsText,
    relatedRegulations,
    scope,
    leaders,
  } = source;

  return (
    <div className="overview-tab">
      <OverviewRow label="Objective">
        <p className="overview-tab__text">{objective}</p>
      </OverviewRow>
      <OverviewRow label="Implementation Requirements">
        <p className="overview-tab__text overview-tab__text--pre">{implementationRequirements}</p>
      </OverviewRow>
      <OverviewRow label="Evidence Documents">
        <p className="overview-tab__text">{evidenceDocumentsText}</p>
      </OverviewRow>
      <OverviewRow label="Related Regulations">
        <p className="overview-tab__text">{relatedRegulations}</p>
      </OverviewRow>
      <OverviewRow label="Scope">
        <p className="overview-tab__text">{scope}</p>
      </OverviewRow>
      {leaders?.length > 0 && <LeadersSection leaders={leaders} />}
    </div>
  );
}
