import styled from 'styled-components';
import navTheme from '../../styles/navbar';

export const StyledNavContainer = styled.div`
  z-index: 1;
  display: inline-flex;
  position: absolute;
  height: ${navTheme.height}px;
  width: 100%;
  background-color: ${(props) => props.theme.body};
  line-height: ${navTheme.height}px;
  justify-content: center;
`;

export const StyledNavItem = styled.div`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledNavText = styled.span`
  color: ${(props) => props.theme.text};
  padding: 0px 6px;
  font-weight: 400;
`;
