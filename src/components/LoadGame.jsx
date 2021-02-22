import React from 'react';
import config from '../config.js';
import downloadGame from '../utils/scripts/downloadGame';
import startMinecraft from '../utils/scripts/startMinecraft';
import LoadGameStrings from '../strings/Home';
import Store from '../utils/StoreManager';
import '../css/LoadGame.css';

const app = window.require('electron').remote;
const path = app.require('path');

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.store = new Store();
    this.state = {
      progressValue: 0,
      label: LoadGameStrings.home__load__startHash,
      progressMax: 0,
      showBar: true,
    };
  }

  componentDidMount() {
    // Start downloading the game
    let startTime = Date.now();
    const interval = setInterval(() => {
      const str = LoadGameStrings.home__load__startHash;
      this.setState({
        label: str.replace(
          '{time}',
          `${Math.floor((Date.now() - startTime) / 1000)}s`,
        ),
      });
    });

    downloadGame({
      url: config.downloadServerURL,
      gamePath: config.gamePath,
      fb: (file, total) => {
        const { progressValue, showBar } = this.state;
        if (progressValue === 0) {
          startTime = Date.now();
          clearInterval(interval);
        }
        if (showBar) {
          this.setState({
            progressMax: total,
            progressValue: progressValue + 1,
            label: `${LoadGameStrings.home__load__downloading} (${Math.floor(
              ((progressValue + 1) / total) * 100,
            )}%)`,
          });
        }
      },
      // eslint-disable-next-line no-unused-vars
    })
      .then(() => {
        // Launch the game
        clearInterval(interval);
        this.setState({
          label: LoadGameStrings.home__load__startGame,
          showBar: false,
        });
        startMinecraft({
          userProfile: this.store.getUserProfile(),
          ramMin: config.minRam,
          ramMax: this.store.getMaxRam(),
          version: config.gameVersion,
          javaPath: this.store.getJavaPath(),
          forgePath: path.join(config.gamePath, config.relativeForgePath),
          gamePath: config.gamePath,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    const {
      label, progressValue, progressMax, showBar,
    } = this.state;
    return (
      <div>
        <p>{label}</p>
        {showBar && (
          <progress id="progress" max={progressMax} value={progressValue} />
        )}
      </div>
    );
  }
}
export default PlayButton;
