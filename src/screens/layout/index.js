import PropTypes from 'prop-types';
import {StyledContainer} from './styled-component';

const Layout = (props) => {
  const {children} = props;
  return <StyledContainer id="main-layout">{children}</StyledContainer>;
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
