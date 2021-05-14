import styled from 'styled-components';

export const StyledText = styled.p`
  ${(props) => props.color && `color: ${props.color}`};
`;

export const StyledTextInLine = styled.span`
  ${(props) => props.color && `color: ${props.color}`};
`;
