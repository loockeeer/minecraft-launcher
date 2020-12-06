import React from 'react';
import config from '../config.js';
import downloadGame from '../utils/scripts/downloadGame';
import '../css/LoadGame.css';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { progressValue: 50, label: 'salut', progressMax: 10 };
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
    });
  }

  render() {
    const { label, progressValue, progressMax } = this.state;
    return (
      <div>
        <p>{label}</p>
        <progress id="progress" max={progressMax} value={progressValue} />
      </div>
    );
  }
}
export default PlayButton;
