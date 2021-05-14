import {StyledContainer, StyledWrapText, StyledRow, StyledColumn} from './styled-component';
import Header from '../../components/header';
import Text from '../../components/text';
import Content from '../../res/content/index.json';
import {lightTheme} from '../../styles/themes';

const HomeView = () => {
  return (
    <StyledContainer>
      <StyledRow>
        <StyledColumn>
          <StyledWrapText>
            <Header variant="h4" color={lightTheme.orange}>
              {Content.hi}
            </Header>
          </StyledWrapText>
          <StyledWrapText inlineTop>
            <Header variant="h1">{Content.title}</Header>
          </StyledWrapText>
          <StyledWrapText>
            <Header variant="h2" color={lightTheme.success}>
              {Content.position}
            </Header>
          </StyledWrapText>
          <Text>{Content.bio}</Text>
        </StyledColumn>
        <StyledColumn center>
          <p>TEST</p>
        </StyledColumn>
      </StyledRow>
    </StyledContainer>
  );
};
export default HomeView;
