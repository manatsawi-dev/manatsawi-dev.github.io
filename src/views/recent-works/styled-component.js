import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: block;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 80px 0px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.gray20};
`;

export const StyledWorkContainer = styled.div`
  display: flex;
  flex-wrap: ${(props) => (props.revers ? 'wrap-revers' : 'wrap')};
  border-bottom: 1px solid ${(props) => props.theme.gray20};
  padding: 80px 0px;
  box-sizing: border-box;
  margin: 0px 3rem;
  justify-content: center;
`;

export const StyledWorkItem = styled.div`
  flex: 47.5%;
  display: ${(props) => (props.float === 'left' ? 'flex;' : 'block;')};
  position: relative;
  text-align: ${(props) => props.float};
  ${(props) =>
    props.textLeft &&
    `
  display: block;
  text-align: left;
  justify-content: flex-end;
  align-items: center;`}
`;

export const StyledWorkItemSpace = styled.div`
  width: 5%;
`;

export const StyledWorkImage = styled.img`
  width: 100%;
  max-width: 540px;
  min-width: 280px;
`;

export const StyledWorkDesc = styled.div`
  width: 100%;
  max-width: 540px;
  min-width: 280px;
  align-self: center;
`;
