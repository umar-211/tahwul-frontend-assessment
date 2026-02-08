import { useState } from 'react';
import BackTitleBar from '../../components/ui/BackTitleBar';
import EvidenceSummaryCards from '../../components/details/EvidenceSummaryCards';
import SummaryCard from '../../components/ui/SummaryCard';
import Tabs from '../../components/ui/Tabs';
import { perspectiveMeeting } from '../../data/mockData';
import PerspectivesDetailsTab from '../../components/perspectives/PerspectivesDetailsTab';
import PerspectivesEvidenceTab from '../../components/perspectives/PerspectivesEvidenceTab';
import './Perspectives.css';

const perspectiveTabs = [
  { id: 'details', label: 'Details' },
  { id: 'evidence', label: 'Evidence' },
];

export default function Perspectives() {
  const [activeTab, setActiveTab] = useState('details');
  const { title, category, subtitle, progress } = perspectiveMeeting;

  return (
    <div className="perspectives-page">
      <BackTitleBar title={title} to="/" />
      <SummaryCard
        category={category}
        title={title}
        subtitle={subtitle}
        progress={progress}
      />
      <EvidenceSummaryCards evidenceSummary={perspectiveMeeting.evidenceSummary} />
      <Tabs tabs={perspectiveTabs} activeTab={activeTab} onChange={setActiveTab} className="perspectives__tabs" />
      {activeTab === 'details' && <PerspectivesDetailsTab />}
      {activeTab === 'evidence' && <PerspectivesEvidenceTab />}
    </div>
  );
}
