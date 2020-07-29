import React from 'react';
import LoginCard from '../components/LoginCard.jsx';
import Popup from '../components/Popup.jsx';
import * as AuthManager from '../utils/AuthManager.js';
// import LoginStrings from '../strings/Login';
// import GenericStrings from '../strings/Generic';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  submitCredentials({ username, password, rememberme }) {
    console.log(username, password, rememberme);

    AuthManager.login({
      username,
      password,
      rememberme,
    }).then((res) => console.log(res))
      .catch((err) => this.setState({ popupContent: err.response.data.errorMessage, popupShow: true, popupTitle: "Erreur d'authentification" }));
  }

  render() {
    const { popupContent, popupTitle, popupShow } = this.state;
    return (
      <div className="LoginPage">
        {popupShow && <Popup type="alert" title={popupTitle} content={popupContent} close={() => this.setState({ popupShow: false })} />}
        <LoginCard submitCredentials={(x) => this.submitCredentials(x)} />
      </div>
    );
  }
}

export default LoginPage;
