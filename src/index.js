import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';
import PlayPage from './pages/PlayPage.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Redirect to="/login" />
      <Switch>
        <Route path="/play" exact>
          <PlayPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
