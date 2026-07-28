import { HomePageWrapper } from '@/pages/home/ui/HomePage.styles.ts';
import { DataEntry } from '@/features/data-entry';

const HomePage = () => {
  return (
    <HomePageWrapper>
      <DataEntry />
      <div>chart</div>
    </HomePageWrapper>
  );
};

export default HomePage;
