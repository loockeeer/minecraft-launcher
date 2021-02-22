import React from 'react';
import './css/index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Settings from './pages/settings/Settings';
import config from './config';

export default class App extends React.Component {
  componentDidMount() {
    document.title = `${config.name} Launcher`;
  }

  render() {
    return (
      <React.StrictMode>
        <Router>
          <Switch>
            <Route path="/home" exact>
              <HomePage />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/" exact>
              <LoginPage />
            </Route>
          </Switch>
        </Router>
      </React.StrictMode>
    );
  }
}
