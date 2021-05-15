import styled from 'styled-components';
import navTheme from '../../styles/navbar';

export const StyledNavContainer = styled.div`
  z-index: 1;
  display: inline-flex;
  height: ${navTheme.height}px;
  width: 100%;
  background-color: ${(props) => props.theme.body};
  line-height: ${navTheme.height}px;
  justify-content: center;
  overflow: hidden;
`;

export const StyledNavItem = styled.div`
  position: relative;
  cursor: pointer;
  color: ${(props) => props.theme.text};
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-property: background-color;
  font-weight: 400;
  &:hover {
    font-weight: 600;
    color: ${(props) => props.theme.primary};
    border-bottom: 1.5px solid ${(props) => props.theme.primary};
  }
`;

export const StyledNavText = styled.a`
  padding: 0px 16px;
`;
