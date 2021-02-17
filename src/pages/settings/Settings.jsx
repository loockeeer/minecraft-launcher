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
import SettingsStrings from '../../strings/Settings';
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
            <h1 className="Settings__title Settings__menu__sub__link">{SettingsStrings.settings__header}</h1>
            <Link to="/settings/java" className="Settings__menu__sub__link">{SettingsStrings.settings__java__link}</Link>
          </div>
          <div className="Settings__menu__sub">
            <Link to="/settings/about" className="Settings__menu__sub__link">{SettingsStrings.settings__about__link}</Link>
          </div>
        </div>
        <Redirect to="/settings/java" />
        <div className="Settings__switch">
          <Switch>
            <Route path="/settings/java" exact>
              <h1 className="Settings__switch__title">{SettingsStrings.settings__java__header}</h1>
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
              <h1 className="Settings__switch__title">{SettingsStrings.settings__about__header}</h1>
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
              {SettingsStrings.settings__buttons__save}
            </a>
            <Link to="/" className="Settings__switch__buttons__button">{SettingsStrings.settings__buttons__quit}</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
