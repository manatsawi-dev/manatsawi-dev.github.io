import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 80px 3rem;
  border-bottom: 1px solid ${(props) => props.theme.gray20};
`;

export const StyledWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;
`;

export const StyledRepoItem = styled.div`
  padding: 0.25rem 1rem;
`;
