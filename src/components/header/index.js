import PropTypes from 'prop-types';
import {StyledH1, StyledH2, StyledH3, StyledH4, StyledH5, StyledH6} from './styled-component';

const Header = (props) => {
  const {variant, children, style, color} = props;

  if (variant === 'h1') {
    return (
      <StyledH1 style={style} color={color}>
        {children}
      </StyledH1>
    );
  }
  if (variant === 'h2') {
    return (
      <StyledH2 style={style} color={color}>
        {children}
      </StyledH2>
    );
  }
  if (variant === 'h3') {
    return (
      <StyledH3 style={style} color={color}>
        {children}
      </StyledH3>
    );
  }
  if (variant === 'h4') {
    return (
      <StyledH4 style={style} color={color}>
        {children}
      </StyledH4>
    );
  }
  if (variant === 'h5') {
    return (
      <StyledH5 style={style} color={color}>
        {children}
      </StyledH5>
    );
  }
  return (
    <StyledH6 style={style} color={color}>
      {children}
    </StyledH6>
  );
};

Header.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  style: PropTypes.any,
};

Header.defaultProps = {
  variant: 'h6',
  style: {},
  color: '',
};

export default Header;
