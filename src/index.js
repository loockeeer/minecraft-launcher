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

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Redirect to="/" />
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
