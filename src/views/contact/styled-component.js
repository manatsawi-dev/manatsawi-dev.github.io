import styled from 'styled-components';

export const StyledLangStateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;
  padding: 80px 0px 85px 0px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.gray20};
  background-color: ${(props) => props.theme.primary};
`;

export const StyledTextDesc = styled.a`
  margin-top: -0.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.white};
`;
