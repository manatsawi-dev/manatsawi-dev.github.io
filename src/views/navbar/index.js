import {StyledNavContainer, StyledNavText, StyledNavItem} from './styled-component';
import navMenuList from './nav-menu';

const Navbar = () => {
  return (
    <StyledNavContainer id="nav-container">
      {navMenuList.map((item, index) => {
        return (
          <StyledNavItem id={`nav-${index}`} key={index.toString()}>
            <StyledNavText> {item.name}</StyledNavText>
          </StyledNavItem>
        );
      })}
    </StyledNavContainer>
  );
};

export default Navbar;
