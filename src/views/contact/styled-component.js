import styled from 'styled-components';

export const StyledContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;
  padding: 80px 2rem 85px 2rem;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.gray20};
  background-color: ${(props) => props.theme.primary};
`;

export const StyledTextDesc = styled.span`
  margin-top: -0.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.white};
`;

export const StyledTextDescLink = styled.a`
  margin-top: -0.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.white};
`;
