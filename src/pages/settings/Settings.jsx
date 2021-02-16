import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import JavaSettings from './JavaSettings';
import Update from './Update';
import About from './About';
import '../../css/Settings.css';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Settings">
        <div className="Settings__menu">
          <div className="Settings__menu__sub">
            <h1 className="Settings__title Settings__menu__sub__link">Paramètres</h1>
            <Link to="/settings/java" className="Settings__menu__sub__link">Java</Link>
            <Link to="/settings/update" className="Settings__menu__sub__link">Mise à jour</Link>
          </div>
          <div className="Settings__menu__sub">
            <Link to="/settings/about" className="Settings__menu__sub__link">A propos</Link>
          </div>
        </div>
        <Redirect to="/settings/java" />
        <div className="Settings__switch">
          <Switch>
            <Route path="/settings/java" exact>
              <h1 className="Settings__switch__title">Paramètres Java</h1>
              <JavaSettings />
            </Route>
            <Route path="/settings/update" exact>
              <h1 className="Settings__switch__title">Mise à jour</h1>
              <Update />
            </Route>
            <Route path="/settings/about" exact>
              <h1 className="Settings__switch__title">A propos</h1>
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Settings;
