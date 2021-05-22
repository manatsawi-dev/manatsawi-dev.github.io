/* eslint-disable react/no-danger */
import {StyledContactContainer, StyledTextDesc, StyledTextDescLink} from './styled-component';
import Header from '../../components/header';
import Content from '../../res/content/index.json';
import {lightTheme} from '../../styles/themes';

const ContactView = () => {
  return (
    <StyledContactContainer id="sc-contact">
      <Header variant="h2" color={lightTheme.white}>
        {Content.contact.title}
      </Header>
      <StyledTextDesc>
        {Content.contact.preDesc}
        <StyledTextDescLink href={`mailto:${Content.contact.desc}`}>{Content.contact.desc}</StyledTextDescLink>
      </StyledTextDesc>
    </StyledContactContainer>
  );
};

ContactView.propTypes = {};

export default ContactView;
