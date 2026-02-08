import OverviewTab from '../../details/OverviewTab';
import { perspectiveMeeting } from '../../../data/mockData';
import './PerspectivesDetailsTab.css';

export default function PerspectivesDetailsTab() {
  return (
    <div className="perspectives-details">
      <OverviewTab data={perspectiveMeeting} />
    </div>
  );
}
