import { HomePageWrapper } from '@/pages/home/ui/HomePage.styles.ts';
import { DataEntry } from '@/features/data-entry';
import { Chart } from '@/features/chart';

const HomePage = () => {
  return (
    <HomePageWrapper>
      <DataEntry />
      <Chart />
    </HomePageWrapper>
  );
};

export default HomePage;
