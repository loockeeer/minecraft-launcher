import React from 'react';
import Strings from '../../strings/Settings';
import '../../css/About.css';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // eslint-disable-next-line react/no-danger
      <div className="About" dangerouslySetInnerHTML={{ __html: Strings.settings__about__text }} />
    );
  }
}

export default About;
