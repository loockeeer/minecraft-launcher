import React from 'react';
import '../css/HomeHeader.css';

class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="HomeHeader">
        <img alt="logo" className="HomeHeader__logo" src="/logo.png" />
        <div className="HomeHeader__title">OkinaGame Launcher</div>
      </div>
    );
  }
}
export default HomeHeader;
