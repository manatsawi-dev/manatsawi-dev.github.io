import {createGlobalStyle} from 'styled-components';
import Prompt from '../res/assets/fonts/Prompt-Regular.ttf';
import PromptLight from '../res/assets/fonts/Prompt-Light.ttf';

export const GlobalStyle = createGlobalStyle`
body {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    padding: 0px 30px;
  }
@font-face {
    font-family: 'Prompt Regular';
    src: url(${Prompt}) format('truetype');
  }
@font-face {
    font-family: 'Prompt Light';
    src: url(${PromptLight}) format('truetype');
}
h1, h2, h3, h4 {
  font-family: 'Prompt Regular';
}
h5,h6 {
  font-family: 'Prompt Light';
}
span, p, a {
  font-family: 'Prompt Light';
  font-weight: 200;
}
`;
