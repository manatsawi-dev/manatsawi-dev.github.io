import {createGlobalStyle} from 'styled-components';
import Montserrat from '../res/assets/fonts/Montserrat-Regular.ttf';
import MontserratLight from '../res/assets/fonts/Montserrat-Light.ttf';

export const GlobalStyle = createGlobalStyle`
body {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
  }
@font-face {
    font-family: 'Montserrat, sans-sarif';
    src: url(${Montserrat}) format('truetype');
  }
@font-face {
    font-family: 'Montserrat Light, sans-sarif';
    src: url(${MontserratLight}) format('truetype');
}
h1, h2, h3, h4 {
  font-family: 'Montserrat, sans-sarif';
}
h5,h6 {
  font-family: 'Montserrat Light, sans-sarif';
}
span, p, a {
  font-family: 'Montserrat Light, sans-sarif';
  font-weight: 200;
}
`;
