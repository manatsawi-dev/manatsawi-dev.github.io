import React from 'react';
import PropTypes from 'prop-types';
import {StyledText, StyledTextInLine} from './styled-component';

const Text = (props) => {
  const {children, style, color, variant} = props;
  if (variant === 'span') {
    return (
      <StyledTextInLine color={color} style={style}>
        {children}
      </StyledTextInLine>
    );
  }
  return (
    <StyledText color={color} style={style}>
      {children}
    </StyledText>
  );
};

Text.propTypes = {
  variant: PropTypes.oneOf(['p', 'span']),
  children: PropTypes.any,
  color: PropTypes.string,
  style: PropTypes.any,
};

Text.defaultProps = {
  variant: 'p',
  children: '',
  style: {},
  color: '',
};

export default Text;
