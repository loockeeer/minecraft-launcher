import React from 'react';
import '../css/UserInfo.css';
import Store from '../utils/StoreManager';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = new Store();
  }

  render() {
    const { name, uuid } = this.store.getUserProfile();
    const avatarURL = `https://crafatar.com/avatars/${uuid}`;
    return (
      <div className="UserInfo">
        <p className="UserInfo__username">{name}</p>
        <img alt="avatar" className="UserInfo__avatarURL" src={avatarURL} />
      </div>
    );
  }
}
export default UserInfo;
