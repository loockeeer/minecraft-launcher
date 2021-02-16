import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ToolBox.css';
import UserInfo from './UserInfo';
import Store from '../utils/StoreManager';

class ToolBox extends React.Component {
  constructor(props) {
    super(props);
    this.store = new Store();
  }

  render() {
    return (
      <div className="ToolBox">
        <UserInfo />
        <Link
          href="#"
          to="/login"
          onClick={() => {
            this.store.setAccessToken(undefined);
            this.store.setClientToken(undefined);
            this.store.setUserInfo({ name: undefined, id: undefined });
          }}
          className="ToolBox__button"
        >
          DECONNECTION
        </Link>
        <Link
          to="/settings/java"
          className="ToolBox__button"
        >
          PARAMETRES
        </Link>
      </div>
    );
  }
}
export default ToolBox;
