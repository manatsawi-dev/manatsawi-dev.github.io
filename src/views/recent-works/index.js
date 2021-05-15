import {StyledContainer} from './styled-component';
import Header from '../../components/header';
import Content from '../../res/content/index.json';

const RecentWorksView = () => {
  return (
    <StyledContainer>
      <Header variant="h2">{Content.recentWorks.title}</Header>
    </StyledContainer>
  );
};

RecentWorksView.propTypes = {};

export default RecentWorksView;
