import React from 'react';
import '../css/SettingsSubtitle.css';

class SettingsSubtitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { content } = this.props;
    return (
      <div className="SettingsSubtitle">
        <div className="SettingsSubtitle__subtitle">{content}</div>
        <hr className="SettingsSubtitle__bar" />
      </div>
    );
  }
}
export default SettingsSubtitle;
