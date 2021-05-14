import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding-top: 56px;
  width: 100%;
  height: 700px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledWrapBody = styled.div``;

export const StyledWrapText = styled.div`
  ${(props) => props.inlineTop && `margin-top: -24px;`};
  ${(props) => props.primary && `color: ${props.theme.primary};`};
`;

export const StyledRow = styled.div`
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;
export const StyledColumn = styled.div`
  float: left;
  width: 50%;
`;
