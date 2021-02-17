import React from 'react';
import config from '../../config';
import SettingsSubtitle from '../../components/SettingsSubtitle';
import CustomSlider from '../../components/CustomSlider';
import '../../css/JavaSettings.css';
import Store from '../../utils/StoreManager';
import Strings from '../../strings/Settings';

class JavaSettings extends React.Component {
  constructor(props) {
    super(props);
    this.store = new Store();
  }

  render() {
    const { onRAMChange } = this.props;
    return (
      <div className="JavaSettings">
        <div className="JavaSettings__RAM">
          <SettingsSubtitle content={Strings.settings__java__ram} />
          <br />
          <br />
          <CustomSlider min={config.defaults.minRam} max="16" value={this.store.getMaxRam()} unit="GB" onChange={onRAMChange} />
          <br />
          <p className="JavaSettings__RAM__recommended">
            {Strings.settings__java__ram__recommended.replace('{}', config.defaults.recommendedRAM.toString())}
            {' GB'}
          </p>
          <br />
          <br />
        </div>
        <div className="JavaSettings__java_path">
          <SettingsSubtitle content={Strings.settings__java__path} />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default JavaSettings;
