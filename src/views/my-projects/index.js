import ReactMarkdown from 'react-markdown';
import {StyledContainer, StyledWrap, StyledRepoItem} from './styled-component';
import Header from '../../components/header';
import Content from '../../res/content/index.json';

const MyProjectsView = () => {
  return (
    <StyledContainer>
      <Header center variant="h2">
        {Content.myProjects.title}
      </Header>
      <StyledWrap>
        <StyledRepoItem>
          <ReactMarkdown>
            [![Readme
            Card](https://github-readme-stats.vercel.app/api/pin/?username=manatsawi-dev&repo=json-server)](https://github.com/manatsawi-dev/json-server)
          </ReactMarkdown>
        </StyledRepoItem>
        <StyledRepoItem>
          <ReactMarkdown>
            [![Readme
            Card](https://github-readme-stats.vercel.app/api/pin/?username=manatsawi-dev&repo=iFintech)](https://github.com/manatsawi-dev/iFintech)
          </ReactMarkdown>
        </StyledRepoItem>
      </StyledWrap>
    </StyledContainer>
  );
};

MyProjectsView.propTypes = {};

export default MyProjectsView;
