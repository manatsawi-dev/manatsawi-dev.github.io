import {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {GlobalStyle} from './styles/global-style';
import {lightTheme, darkTheme} from './styles/themes';
import IndexScreen from './screens/index';

const App = () => {
  const [themeMode] = useState('light');

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={IndexScreen} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
