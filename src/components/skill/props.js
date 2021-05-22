import PropTypes from 'prop-types';

export const skillProps = {
  skillName: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export const skillDefaultProps = {
  color: '',
};
