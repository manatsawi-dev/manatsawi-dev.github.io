import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 80px 0px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.gray20};
`;
