import styled from 'styled-components';
import {LoaderAlt} from '@styled-icons/boxicons-regular/LoaderAlt';
import {Home} from '@styled-icons/boxicons-solid/Home';
import {CheckboxChecked} from '@styled-icons/fluentui-system-filled/CheckboxChecked';
import {CheckboxUnchecked} from '@styled-icons/fluentui-system-regular/CheckboxUnchecked';
import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare';
import {Github} from '@styled-icons/boxicons-logos/Github';
import {Indeed} from '@styled-icons/simple-icons/Indeed';

export const IconLoad = styled(LoaderAlt)`
  color: ${(props) => (props.color ? props.color : props.theme.text)};
  font-size: ${(props) => `${props.size}px`};
`;

export const IconHome = styled(Home)`
  color: ${(props) => (props.color ? props.color : props.theme.text)};
  font-size: ${(props) => `${props.size}px`};
`;

export const IconCheckbox = styled(CheckboxChecked)`
  color: ${(props) => (props.color ? props.color : props.theme.text)};
  font-size: ${(props) => `${props.size}px`};
`;

export const IconUnCheckbox = styled(CheckboxUnchecked)`
  color: ${(props) => (props.color ? props.color : props.theme.text)};
  font-size: ${(props) => `${props.size}px`};
`;

export const IconLinkedIn = styled(LinkedinSquare)`
  color: ${(props) => (props.color ? props.color : props.theme.text)};
  font-size: ${(props) => `${props.size}px`};
`;

export const IconIndeed = styled(Indeed)`
  color: ${(props) => (props.color ? props.color : props.theme.text)};
  font-size: ${(props) => `${props.size}px`};
`;

export const IconGitHub = styled(Github)`
  color: ${(props) => (props.color ? props.color : props.theme.text)};
  font-size: ${(props) => `${props.size}px`};
`;
