import styled from 'styled-components';

export const StyledH1 = styled.h1`
  color: ${(props) => props.theme.text};
  ${(props) => props.color && `color: ${props.color}`};
  ${(props) => props.center && 'text-align: center;'}
`;

export const StyledH2 = styled.h2`
  color: ${(props) => props.theme.text};
  ${(props) => props.color && `color: ${props.color}`};
  ${(props) => props.center && 'text-align: center;'}
`;

export const StyledH3 = styled.h3`
  color: ${(props) => props.theme.text};
  ${(props) => props.color && `color: ${props.color}`};
  ${(props) => props.center && 'text-align: center;'}
`;

export const StyledH4 = styled.h4`
  color: ${(props) => props.theme.text};
  ${(props) => props.color && `color: ${props.color}`};
  ${(props) => props.center && 'text-align: center;'}
`;

export const StyledH5 = styled.h5`
  color: ${(props) => props.theme.text};
  ${(props) => props.color && `color: ${props.color}`};
  ${(props) => props.center && 'text-align: center;'}
`;

export const StyledH6 = styled.h6`
  color: ${(props) => props.theme.text};
  ${(props) => props.color && `color: ${props.color}`};
  ${(props) => props.center && 'text-align: center;'}
`;
