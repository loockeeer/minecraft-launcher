import React from 'react';
import { Redirect } from 'react-router';
import '../css/ToolBox.css';
import UserInfo from './UserInfo';
import Store from '../utils/StoreManager';

class ToolBox extends React.Component {
  constructor(props) {
    super(props);
    this.store = new Store();
    // redirect = 1 => /login
    // redirect = 2 => /settings/java
    this.state = {
      redirect: 0,
    };
  }

  render() {
    const { redirect } = this.state;
    return (
      <div className="ToolBox">
        <UserInfo />
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            this.store.setAccessToken(undefined);
            this.store.setClientToken(undefined);
            this.store.setUserInfo({ name: undefined, id: undefined });
            this.setState({ redirect: 1 });
          }}
          className="ToolBox__button"
        >
          DECONNECTION
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            this.setState({ redirect: 2 });
          }}
          className="ToolBox__button"
        >
          PARAMETRES
        </a>
        { redirect === 1 ? <Redirect to="/login" /> : redirect === 2 && <Redirect to="/settings/java" /> }
      </div>
    );
  }
}
export default ToolBox;
