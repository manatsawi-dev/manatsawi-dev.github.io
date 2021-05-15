import styled from 'styled-components';
import {lightTheme} from '../../styles/themes';

export const StyledSkillContainer = styled.div`
  height: 60px;
  margin: 0.5rem;
  border-radius: 4px;
  border: 1px solid ${lightTheme.gray20};
  display: flex;
  align-items: center;
  padding: 0px 1.5rem;
`;

export const StyledIconWrap = styled.div`
  margin: 0px 1rem 0px 0px;
`;

export const StyledTextInLine = styled.span`
  color: ${lightTheme.orange};
  font-weight: 600;
`;
