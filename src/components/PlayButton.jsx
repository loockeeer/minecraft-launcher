import React from 'react';
import LoadGame from './LoadGame';
import HomeStrings from '../strings/Home';
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
            {HomeStrings.home__play__button}
          </a>
        )}
        {play && <LoadGame />}
      </div>
    );
  }
}
export default PlayButton;
