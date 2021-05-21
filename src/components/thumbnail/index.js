import {thumbnailProps, thumbnailDefaultProps} from './props';
import {StyledThumbnailProfile} from './styled-component';

const Thumbnail = (props) => {
  const {src, size, circle, autoScale} = props;
  return <StyledThumbnailProfile src={src} size={size} circle={circle} autoScale={autoScale} />;
};

Thumbnail.propTypes = {
  ...thumbnailProps,
};
Thumbnail.defaultProps = {
  ...thumbnailDefaultProps,
};

export default Thumbnail;
