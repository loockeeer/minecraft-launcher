import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import JavaSettings from './JavaSettings';
import About from './About';
import Store from '../../utils/StoreManager';
import '../../css/Settings.css';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.store = new Store();
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      maxRam: undefined,
      // eslint-disable-next-line react/no-unused-state
      javaPath: undefined,
    };
  }

  render() {
    const { javaPath, maxRam } = this.state;
    return (
      <div className="Settings">
        <div className="Settings__menu">
          <div className="Settings__menu__sub">
            <h1 className="Settings__title Settings__menu__sub__link">Paramètres</h1>
            <Link to="/settings/java" className="Settings__menu__sub__link">Java</Link>
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
              <JavaSettings
                className="Settings__page"
                onRAMChange={(value) => {
                  /* eslint-disable-next-line react/no-unused-state */
                  this.setState({ maxRam: value });
                }}
                onJavaPathChange={(value) => {
                  /* eslint-disable-next-line react/no-unused-state */
                  this.setState({ javaPath: value });
                }}
              />
            </Route>
            <Route path="/settings/about" exact>
              <h1 className="Settings__switch__title">A propos</h1>
              <About />
            </Route>
          </Switch>
          <div className="Settings__switch__buttons">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (javaPath !== undefined) {
                  this.store.setJavaPath(javaPath);
                }
                if (maxRam !== undefined) {
                  this.store.setMaxRam(maxRam);
                }
              }}
              className="Settings__switch__buttons__button"
            >
              APPLIQUER
            </a>
            <Link to="/" className="Settings__switch__buttons__button">QUITTER</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
