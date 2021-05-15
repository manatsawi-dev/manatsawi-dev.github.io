import PropTypes from 'prop-types';
import IconTheme from '../../styles/icon';

export const iconProps = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

export const iconDefaultProps = {
  name: '',
  size: IconTheme.size.webDefault,
  color: '',
};
