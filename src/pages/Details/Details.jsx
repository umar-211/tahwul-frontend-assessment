import { useState } from 'react';
import BackTitleBar from '../../components/ui/BackTitleBar';
import DetailsHeader from '../../components/details/DetailsHeader';
import EvidenceSummaryCards from '../../components/details/EvidenceSummaryCards';
import OverviewTab from '../../components/details/OverviewTab';
import EvidenceTab from '../../components/details/EvidenceTab';
import Tabs from '../../components/ui/Tabs';
import { projectDetails } from '../../data/mockData';
import './Details.css';

const detailTabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'evidence', label: 'Evidence' },
];

export default function Details() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="details-page">
      <BackTitleBar title={projectDetails.title} to="/" />
      <DetailsHeader />
      <EvidenceSummaryCards />

      <Tabs tabs={detailTabs} activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === 'overview' ? <OverviewTab /> : <EvidenceTab />}
    </div>
  );
}
