import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;
  padding: 80px 0px 85px 0px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.gray20};
`;

export const StyledSkillWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
