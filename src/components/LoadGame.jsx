import React from 'react';
import '../css/LoadGame.css';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { progressValue: 50, label: 'salut' };
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
