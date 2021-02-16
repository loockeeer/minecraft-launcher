import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="About">
        <p className="About__text">
          Ce launcher a été réalisé par Loockeeer (Discord : x)

          Il est open source et disponible ici : lien
        </p>
      </div>
    );
  }
}

export default About;
