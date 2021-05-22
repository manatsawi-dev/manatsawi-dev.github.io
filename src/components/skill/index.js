import React from 'react';
import {skillProps, skillDefaultProps} from './props';
import {StyledSkillContainer, StyledIconWrap, StyledTextInLine} from './styled-components';
import Icon from '../icon';

const Skill = (props) => {
  const {skillName, src, color} = props;
  return (
    <StyledSkillContainer>
      <StyledIconWrap>
        <Icon name={src} color={color} />
      </StyledIconWrap>
      <StyledTextInLine>{skillName}</StyledTextInLine>
    </StyledSkillContainer>
  );
};

Skill.propTypes = {
  ...skillProps,
};

Skill.defaultProps = {
  ...skillDefaultProps,
};

export default Skill;
