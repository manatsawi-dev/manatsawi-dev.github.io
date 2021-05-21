import styled from 'styled-components';
import {lightTheme} from '../../styles/themes';
import navTheme from '../../styles/navbar';

export const StyledNavContainer = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  display: inline-flex;
  height: ${navTheme.height}px;
  width: 100%;
  background-color: ${(props) => props.theme.body};
  line-height: ${navTheme.height}px;
  justify-content: center;
  animation-name: largeNav;
  @media (max-width: 525px) {
    display: none;
  }
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

export const StyledNavSmall = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  height: ${navTheme.height}px;
  background-color: ${(props) => props.theme.body};
  justify-content: flex-end;
  align-items: center;
  padding: 0rem 1rem;
  @media (min-width: 526px) {
    display: none;
  }
`;

export const StyledNavIconWrap = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${lightTheme.gray20};
  cursor: pointer;
`;

export const StyledNavSmallWrap = styled.div`
  z-index: 9;
  display: flex;
  flex-flow: column nowrap;
  position: fixed;
  top: 56px;
  right: 0;
  left: 0;
  height: ${(props) => (props.open ? '250px' : '0px')};
  transition: all 0.3s ease;
  padding: ${(props) => (props.open ? '1rem 0' : '0')};
  overflow: hidden;
  justify-content: space-between;
  background-color: white;
`;

export const StyledNavItemSmall = styled.div`
  cursor: pointer;
  color: ${(props) => props.theme.text};
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-property: background-color;
  font-weight: 400;
  margin: 0.5rem 0;
  &:hover {
    font-weight: bold;
    color: ${(props) => props.theme.primary};
  }
`;
