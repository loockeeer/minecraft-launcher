import React from 'react';
import SettingsSubtitle from '../../components/SettingsSubtitle';

class JavaSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="JavaSettings">
        <div className="JavaSettings__RAM">
          <SettingsSubtitle content="Mémoire RAM" />
          <br />
        </div>
        <div className="JavaSettings__java_path">
          <SettingsSubtitle content="Emplacement de Java" />
          <br />
        </div>
      </div>
    );
  }
}

export default JavaSettings;
