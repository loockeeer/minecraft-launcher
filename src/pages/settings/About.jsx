import React from 'react';
import '../../css/About.css';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const text = `
Ce launcher a été codé par Loockeeer (discord : Loockeeer#8522)
<br />
<br />
Pour toute demande (fonctionnalités, bugs) : https://github.com/loockeeer/minecraft-launcher/issues
`;
    return (
      // eslint-disable-next-line react/no-danger
      <div className="About" dangerouslySetInnerHTML={{ __html: text }} />
    );
  }
}

export default About;
