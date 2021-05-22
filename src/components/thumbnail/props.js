import PropTypes from 'prop-types';

export const thumbnailProps = {
  src: PropTypes.string.isRequired,
  size: PropTypes.number,
  circle: PropTypes.bool,
  autoScale: PropTypes.bool,
};

export const thumbnailDefaultProps = {
  size: 0,
  circle: false,
  autoScale: false,
};
