import React from 'react';
import config from '../config';
import '../css/HomeHeader.css';

class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name } = config;
    return (
      <div className="HomeHeader">
        <img alt="logo" className="HomeHeader__logo" src="/logo.png" />
        <div className="HomeHeader__title">{`${name}Launcher`}</div>
      </div>
    );
  }
}
export default HomeHeader;
