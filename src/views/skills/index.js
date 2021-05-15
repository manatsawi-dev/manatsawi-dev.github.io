import {StyledContainer, StyledSkillWrap} from './styled-component';
import Header from '../../components/header';
import Content from '../../res/content/index.json';
import Skill from '../../components/skill';
import skillList from './skill-list';

const SkillsView = () => {
  return (
    <StyledContainer>
      <Header variant="h2">{Content.skills.title}</Header>
      <StyledSkillWrap>
        {skillList.map((item, index) => (
          <Skill id={`sk-${item.id}`} key={index.toString()} skillName={item.name} src={item.iconSrc} color={item.color} />
        ))}
      </StyledSkillWrap>
    </StyledContainer>
  );
};

SkillsView.propTypes = {};

export default SkillsView;
