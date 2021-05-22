import {useState, useRef} from 'react';
import {
  StyledNavContainer,
  StyledNavText,
  StyledNavItem,
  StyledNavItemSmall,
  StyledNavSmall,
  StyledNavIconWrap,
  StyledNavSmallWrap,
} from './styled-component';
import {useClickOutsideEffect} from '../../hooks/useClickOutSideEffect';
import {navDocumentIds} from './utils';
import Icon from '../../components/icon';
import navMenuList from './nav-menu';
import * as iconName from '../../components/icon/constants';

const Navbar = () => {
  const refNavOpen = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useClickOutsideEffect(refNavOpen, () => setIsOpen(false));

  const onEventLinkTo = (id) => {
    const documnetRef = document.getElementById(navDocumentIds[id]);
    if (!documnetRef) {
      return;
    }
    setIsOpen(false);
    window.scrollTo({top: documnetRef.offsetTop, behavior: 'smooth'});
  };

  return (
    <>
      <StyledNavContainer id="nav-container">
        {navMenuList.map((item, index) => {
          return (
            <StyledNavItem id={`nav-${index}`} key={index.toString()} onClick={() => onEventLinkTo(item.name)}>
              <StyledNavText> {item.name}</StyledNavText>
            </StyledNavItem>
          );
        })}
      </StyledNavContainer>
      <StyledNavSmall id="nav-container" ref={refNavOpen}>
        <StyledNavIconWrap onClick={() => setIsOpen(!isOpen)}>
          <Icon name={!isOpen ? iconName.MENU : iconName.ARROW_UP} />
        </StyledNavIconWrap>
        <StyledNavSmallWrap open={isOpen}>
          {navMenuList.map((item, index) => {
            return (
              <StyledNavItemSmall id={`nav-small-${index}`} key={index.toString()} onClick={() => onEventLinkTo(item.name)}>
                <StyledNavText> {item.name}</StyledNavText>
              </StyledNavItemSmall>
            );
          })}
        </StyledNavSmallWrap>
      </StyledNavSmall>
    </>
  );
};

export default Navbar;
