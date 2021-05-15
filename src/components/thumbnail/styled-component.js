import styled from 'styled-components';

export const StyledThumbnailBase = styled.img``;

export const StyledThumbnailProfile = styled(StyledThumbnailBase)`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  ${(props) => props.circle && `border-radius: ${props.size / 2}px;`};
`;
