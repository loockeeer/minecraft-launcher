import React from 'react';
import config from '../config.js';
import downloadGame from '../utils/scripts/downloadGame';
import LoadGameStrings from '../strings/Home';
import '../css/LoadGame.css';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progressValue: 50, label: LoadGameStrings.load__startDownload, progressMax: 10, showBar: true,
    };
  }

  componentDidMount() {
    // Start downloading the game
    downloadGame({
      url: config.downladServerURL,
      path: config.gamePath,
      fb: (file, total) => {
        const { progressValue } = this.state;
        this.setState({
          progressMax: total,
          progressValue: progressValue + 1,
          label: file,
        });
      },
    // eslint-disable-next-line no-unused-vars
    }).then((files) => {
      // Launch the game
      this.setState({ label: LoadGameStrings.load__startGame, showBar: false });
    });
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
