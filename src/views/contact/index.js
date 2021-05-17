/* eslint-disable react/no-danger */
import {StyledLangStateContainer, StyledTextDesc} from './styled-component';
import Header from '../../components/header';
import Content from '../../res/content/index.json';
import {lightTheme} from '../../styles/themes';

const ContactView = () => {
  return (
    <StyledLangStateContainer>
      <Header variant="h2" color={lightTheme.white}>
        {Content.contact.title}
      </Header>
      <StyledTextDesc>
        {Content.contact.preDesc}
        <StyledTextDesc href={`mailto:${Content.contact.desc}`}>{Content.contact.desc}</StyledTextDesc>
      </StyledTextDesc>
    </StyledLangStateContainer>
  );
};

ContactView.propTypes = {};

export default ContactView;
