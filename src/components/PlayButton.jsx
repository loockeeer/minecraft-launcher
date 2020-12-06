import React from 'react';
import { Redirect } from 'react-router';
import '../css/PlayButton.css';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { play: false, progressValue: 50, label: 'salut'};
  }
  componentDidMount() {
  }

  render() {
    const { play, progressValue, label } = this.state;
    return (
      <div>
        { !play && <a href="#" className="PlayButton" onClick={()=>this.setState({ play: true})}>JOUER</a>}
        { play && (
        <div>
          <p>{label}</p>
          <progress id="progress" max="500" value={progressValue} />
        </div>
        )}
      </div>
    );
  }
}
export default PlayButton;
