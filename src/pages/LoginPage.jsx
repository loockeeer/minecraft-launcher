import React from 'react';
import LoginCard from '../components/LoginCard.jsx';
import Popup from '../components/Popup.jsx';
import * as AuthManager from '../utils/AuthManager.js';
// import LoginStrings from '../strings/Login';
// import GenericStrings from '../strings/Generic';
import { Redirect } from 'react-router';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  submitCredentials({ username, password, rememberme }) {
    //console.log(username, password, rememberme);
    this.setState({ submitButtonDisabled: true })
    AuthManager.login({
      username,
      password,
      rememberme,
    })
      .then((res) => {
        this.setState({ submitButtonDisabled: false, loggedIn: true })
      })
      .catch((err) => {
        this.setState({ submitButtonDisabled: false, popupContent: err.response.data.errorMessage, popupShow: true, popupTitle: "Erreur d'authentification" })
      });
  }

  render() {
    const { popupContent, popupTitle, popupShow, submitButtonDisabled, loggedIn } = this.state;
    return (
      <div className="LoginPage">
        {popupShow && <Popup type="alert" title={popupTitle} content={popupContent} close={() => this.setState({ popupShow: false })} />}
        <LoginCard submitButtonDisabled={submitButtonDisabled} submitCredentials={(x) => this.submitCredentials(x)} />
        {loggedIn && <Redirect to="/"/>}
      </div>
    );
  }
}

export default LoginPage;
