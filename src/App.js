import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import themeFile from './util/theme';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import PageNotFound from './components/PageNotFound';


import logo from './logo.svg';
import './App.css';

const theme = createMuiTheme(themeFile);

function App() {
  return (
    <ThemeProvider theme={theme}>
     <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Provider>
    </ThemeProvider>
  )
 
}

export default App;
