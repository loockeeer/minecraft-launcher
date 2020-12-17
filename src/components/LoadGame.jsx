import React from 'react';
import config from '../config.js';
import downloadGame from '../utils/scripts/downloadGame';
import LoadGameStrings from '../strings/Home';
import '../css/LoadGame.css';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progressValue: 0,
      label: LoadGameStrings.home__load__startDownload,
      progressMax: 0,
      showBar: true,
    };
  }

  componentDidMount() {
    // Start downloading the game
    downloadGame({
      url: config.downloadServerURL,
      gamePath: config.gamePath,
      fb: (file, total) => {
        const { progressValue, showBar } = this.state;
        if (showBar) {
          this.setState({
            progressMax: total,
            progressValue: progressValue + 1,
            label: file,
          });
        }
      },
    // eslint-disable-next-line no-unused-vars
    }).then((files) => {
      // Launch the game
      this.setState({ label: LoadGameStrings.home__load__startGame, showBar: false });
    }).catch((err) => { throw err; });
  }

  render() {
    const {
      label, progressValue, progressMax, showBar,
    } = this.state;
    return (
      <div>
        <p>{label}</p>
        {showBar && <progress id="progress" max={progressMax} value={progressValue} />}
      </div>
    );
  }
}
export default PlayButton;
