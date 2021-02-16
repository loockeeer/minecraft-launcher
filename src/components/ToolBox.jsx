import React from 'react';
import '../css/ToolBox.css';
import UserInfo from './UserInfo';

class ToolBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ToolBox">
        <UserInfo />
        <p className="ToolBox__button">DECONNECTION</p>
        <p className="ToolBox__button">PARAMETRES</p>
      </div>
    );
  }
}
export default ToolBox;
