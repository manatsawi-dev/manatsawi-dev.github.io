import styled from 'styled-components';

export const StyledThumbnailBase = styled.img``;

export const StyledThumbnailProfile = styled(StyledThumbnailBase)`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  ${(props) => props.circle && `border-radius: ${props.size / 2}px;`};
  ${(props) =>
    props.autoScale &&
    `@media (min-width: 1080px){
      width: 395px;
      height: 395px;
      border-radius: 197.5px;
    }
  `};
`;
