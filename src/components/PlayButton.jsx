import React from 'react';
import '../css/PlayButton.css';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <a href="#" className="PlayButton">JOUER</a>
    );
  }
}
export default PlayButton;
