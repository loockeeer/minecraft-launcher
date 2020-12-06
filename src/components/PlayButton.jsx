import React from 'react';
import LoadGame from './LoadGame';
import '../css/PlayButton.css';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { play: false };
  }

  render() {
    const { play } = this.state;
    return (
      <div>
        {!play && (
          <a
            href="#"
            className="PlayButton"
            onClick={() => this.setState({ play: true })}
          >
            JOUER
          </a>
        )}
        {play && <LoadGame />}
      </div>
    );
  }
}
export default PlayButton;
