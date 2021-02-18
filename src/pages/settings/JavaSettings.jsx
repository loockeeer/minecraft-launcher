import React from 'react';
import config from '../../config';
import SettingsSubtitle from '../../components/SettingsSubtitle';
import CustomSlider from '../../components/CustomSlider';
import '../../css/JavaSettings.css';
import Store from '../../utils/StoreManager';
import Strings from '../../strings/Settings';
import getHostRAM from '../../utils/scripts/getHostRAM';

class JavaSettings extends React.Component {
  constructor(props) {
    super(props);
    this.store = new Store();
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      javaPath: this.store.getJavaPath(),
    };
  }

  render() {
    const { onRAMChange, onJavaPathChange } = this.props;
    const { javaPath } = this.state;
    return (
      <div className="JavaSettings">
        <div className="JavaSettings__RAM">
          <SettingsSubtitle content={Strings.settings__java__ram} />
          <br />
          <br />
          <CustomSlider min={config.defaults.minRam} max={getHostRAM('gb')} value={this.store.getMaxRam() > getHostRAM('gb') ? config.defaults.minRam : this.store.getMaxRam()} unit="GB" onChange={onRAMChange} />
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
          <input
            type="file"
            id="javaPath"
            className="JavaSettings__java_path__input"
            onChange={(e) => {
              if (e.target.files[0]) {
                this.setState({ javaPath: e.target.files[0].path });
                onJavaPathChange(e.target.files[0].path);
              }
            }}
          />
          <label htmlFor="javaPath" className="JavaSettings__java_path__label">{javaPath}</label>
        </div>
      </div>
    );
  }
}

export default JavaSettings;
