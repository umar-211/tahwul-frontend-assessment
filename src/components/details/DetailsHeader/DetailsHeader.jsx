import SummaryCard from '../../ui/SummaryCard';
import { projectDetails } from '../../../data/mockData';

export default function DetailsHeader() {
  const { title, category, subtitle, progress } = projectDetails;
  return (
    <SummaryCard
      category={category}
      title={title}
      subtitle={subtitle}
      progress={progress}
    />
  );
}
