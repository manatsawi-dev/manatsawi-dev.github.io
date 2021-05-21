import {StyledContainer, StyledWrap, StyledRepoItem, StyledRepoImg} from './styled-component';
import Header from '../../components/header';
import Content from '../../res/content/index.json';
import repoList from './repo-list';

const MyProjectsView = () => {
  return (
    <StyledContainer id="sc-my-repo">
      <Header center variant="h2">
        {Content.myProjects.title}
      </Header>
      <StyledWrap>
        {repoList.map((item, index) => (
          <StyledRepoItem key={index.toString()} href={item.gitUrl}>
            <StyledRepoImg src={item.apiUrl} />
          </StyledRepoItem>
        ))}
      </StyledWrap>
    </StyledContainer>
  );
};

MyProjectsView.propTypes = {};

export default MyProjectsView;
