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
        <div className="HomeHeader__logo" />
      </div>
    );
  }
}
export default HomeHeader;
