import { projectDetails } from '../../../data/mockData';
import { Files01Icon, FileSearchIcon, FileExportIcon, FileValidationIcon } from '../../../assets/icons';
import Card from '../../ui/Card';
import './EvidenceSummaryCards.css';

const cards = [
  { key: 'total', label: 'Total Evidence', Icon: Files01Icon },
  { key: 'underReview', label: 'Under Review Evidence', Icon: FileSearchIcon },
  { key: 'inProgress', label: 'In-Progress Evidence', Icon: FileExportIcon },
  { key: 'completed', label: 'Completed Evidence', Icon: FileValidationIcon },
];

export default function EvidenceSummaryCards({ evidenceSummary: evidenceSummaryProp }) {
  const evidenceSummary = evidenceSummaryProp ?? projectDetails.evidenceSummary;

  return (
    <div className="evidence-cards">
      {cards.map(({ key, label, Icon }) => (
        <Card key={key} className="evidence-cards__card">
          <div className="evidence-cards__row">
            <Icon className="evidence-cards__icon" />
            <span className="evidence-cards__value">{evidenceSummary[key]}</span>
          </div>
          <p className="evidence-cards__label">{label}</p>
        </Card>
      ))}
    </div>
  );
}
