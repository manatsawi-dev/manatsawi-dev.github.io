import {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {GlobalStyle} from './styles/global-style';
import {lightTheme, darkTheme} from './styles/themes';
import Layout from './screens/layout';
import IndexScreen from './screens';
import Navbar from './views/navbar';

const App = () => {
  const [themeMode] = useState('light');

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <Layout>
          <Navbar />
          <Switch>
            <Route exact path="/" component={IndexScreen} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
