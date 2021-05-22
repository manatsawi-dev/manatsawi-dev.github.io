import React from 'react';
import {iconProps, iconDefaultProps} from './props';
import IconGenerator from './generator';

const Icon = (props) => {
  return <IconGenerator {...props} />;
};

Icon.propTypes = {
  ...iconProps,
};

Icon.defaultProps = {
  ...iconDefaultProps,
};

export default Icon;
