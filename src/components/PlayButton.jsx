import React from 'react';
import { Redirect } from 'react-router';
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
        <a href="#" className="PlayButton" onClick={()=>this.setState({ play: true})}>JOUER</a>
        { play && (<Redirect to="/play"></Redirect>)}
      </div>
    );
  }
}
export default PlayButton;
