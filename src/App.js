import {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {GlobalStyle} from './styles/global-style';
import {lightTheme, darkTheme} from './styles/themes';
import IndexScreen from './screens/index';
import Navbar from './views/navbar';

const App = () => {
  const [themeMode] = useState('light');

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <Navbar />
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
