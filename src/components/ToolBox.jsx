import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ToolBox.css';
import UserInfo from './UserInfo';
import Store from '../utils/StoreManager';
import Strings from '../strings/ToolBox';
import { invalidate } from '../utils/AuthManager';

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
          to="/"
          onClick={async () => {
            await invalidate();
            this.store.setUserProfile({});
          }}
          className="ToolBox__button"
        >
          {Strings.toolbox__disconnect}
        </Link>
        <Link
          to="/settings/java"
          className="ToolBox__button"
        >
          {Strings.toolbox__settings}
        </Link>
      </div>
    );
  }
}
export default ToolBox;
