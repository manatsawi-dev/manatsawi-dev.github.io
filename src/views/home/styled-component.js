import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  padding-top: 80px;
  width: 100%;
  padding-bottom: 80px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.gray20};
`;

export const StyledWrapBody = styled.div`
  display: block;
  max-width: 1200px;
`;

export const StyledWrapText = styled.div`
  ${(props) => props.inlineTop && `margin-top: -24px;`};
  ${(props) => props.primary && `color: ${props.theme.primary};`};
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  padding: 6rem 2.5rem;
`;

export const StyledColumn = styled.div`
  flex: 50%;
  @media (max-width: 800px) {
    flex: 100%;
  }
  ${(props) =>
    props.center &&
    `justify-content: center; 
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
  `}
`;

export const StyledProfile = styled.div`
  width: 310px;
  height: 310px;
  border-radius: 155px;
  border: 5px solid ${(props) => props.theme.success};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledRowSocial = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.gray10};
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
`;

export const StyledSocialItem = styled.a`
  height: 36px;
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 4px;
  margin: 0px 8px;
  cursor: pointer;
`;
