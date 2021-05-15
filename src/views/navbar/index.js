import {StyledNavContainer, StyledNavText, StyledNavItem, StyledNavSmall, StyledNavIconWrap} from './styled-component';
import Icon from '../../components/icon';
import navMenuList from './nav-menu';
import * as iconName from '../../components/icon/constants';

const Navbar = () => {
  return (
    <>
      <StyledNavContainer id="nav-container">
        {navMenuList.map((item, index) => {
          return (
            <StyledNavItem id={`nav-${index}`} key={index.toString()}>
              <StyledNavText> {item.name}</StyledNavText>
            </StyledNavItem>
          );
        })}
      </StyledNavContainer>
      <StyledNavSmall id="nav-container">
        <StyledNavIconWrap>
          <Icon name={iconName.MENU} />
        </StyledNavIconWrap>
      </StyledNavSmall>
    </>
  );
};

export default Navbar;
