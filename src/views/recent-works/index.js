import {StyledContainer} from './styled-component';
import Header from '../../components/header';
import WorkList from './list-builder';
import Content from '../../res/content/index.json';

const RecentWorksView = () => {
  return (
    <StyledContainer>
      <Header center variant="h2">
        {Content.recentWorks.title}
      </Header>
      <WorkList />
    </StyledContainer>
  );
};

RecentWorksView.propTypes = {};

export default RecentWorksView;
