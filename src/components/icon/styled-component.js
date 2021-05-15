import styled from 'styled-components';
import {LoaderAlt} from '@styled-icons/boxicons-regular/LoaderAlt';
import {Home} from '@styled-icons/boxicons-solid/Home';
import {CheckboxChecked} from '@styled-icons/fluentui-system-filled/CheckboxChecked';
import {CheckboxUnchecked} from '@styled-icons/fluentui-system-regular/CheckboxUnchecked';
import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare';
import {Github} from '@styled-icons/boxicons-logos/Github';
import {Indeed} from '@styled-icons/simple-icons/Indeed';
import {Js} from '@styled-icons/fa-brands/Js';
import {Docker} from '@styled-icons/fa-brands/Docker';
import {Dart} from '@styled-icons/simple-icons/Dart';
import {ReactLogo} from '@styled-icons/fa-brands/ReactLogo';
import {Flutter} from '@styled-icons/simple-icons/Flutter';
import {Menu} from '@styled-icons/boxicons-regular/Menu';

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

export const IconFlutter = styled(Flutter)`
  color: ${(props) => (props.color ? props.color : props.theme.text)};
  font-size: ${(props) => `${props.size}px`};
`;

export const IconReact = styled(ReactLogo)`
  color: ${(props) => (props.color ? props.color : props.theme.text)};
  font-size: ${(props) => `${props.size}px`};
`;

export const IconJavaScript = styled(Js)`
  color: ${(props) => (props.color ? props.color : props.theme.text)};
  font-size: ${(props) => `${props.size}px`};
`;

export const IconDart = styled(Dart)`
  color: ${(props) => (props.color ? props.color : props.theme.text)};
  font-size: ${(props) => `${props.size}px`};
`;

export const IconDocker = styled(Docker)`
  color: ${(props) => (props.color ? props.color : props.theme.text)};
  font-size: ${(props) => `${props.size}px`};
`;

export const IconMenu = styled(Menu)`
  color: ${(props) => (props.color ? props.color : props.theme.text)};
  font-size: ${(props) => `${props.size}px`};
`;
