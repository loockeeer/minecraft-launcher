import React from 'react';
import downloadGame from '../utils/scripts/downloadGame';
import '../css/LoadGame.css';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { progressValue: 50, label: 'salut' };
  }

  componentDidMount() {
    // Start downloading the game
  }

  render() {
    const { label, progressValue } = this.state;
    return (
      <div>
        <p>{label}</p>
        <progress id="progress" max="500" value={progressValue} />
      </div>
    );
  }
}
export default PlayButton;
