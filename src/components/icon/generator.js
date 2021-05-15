import React from 'react';
import {IconLoad, IconHome, IconCheckbox, IconUnCheckbox, IconLinkedIn, IconIndeed, IconGitHub} from './styled-component';
import {iconProps, iconDefaultProps} from './props';
import * as ICON from './constants';

const IconGenerator = (props) => {
  const {name, color, size} = props;
  switch (name) {
    case ICON.LOADING:
      return <IconLoad color={color} size={size} />;
    case ICON.HOME:
      return <IconHome color={color} size={size} />;
    case ICON.CHECKED_CHECKBOX:
      return <IconCheckbox color={color} size={size} />;
    case ICON.UN_CHECKBOX:
      return <IconUnCheckbox color={color} size={size} />;
    case ICON.LINKED_IN:
      return <IconLinkedIn color={color} size={size} />;
    case ICON.INDEED:
      return <IconIndeed color={color} size={size} />;
    case ICON.GITHUB:
      return <IconGitHub color={color} size={size} />;
    default:
      return null;
  }
};

IconGenerator.propTypes = {
  ...iconProps,
};

IconGenerator.defaultProps = {
  ...iconDefaultProps,
};

export default IconGenerator;
