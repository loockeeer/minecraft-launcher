import React from 'react';
import { Redirect } from 'react-router';
import LoginCard from '../components/LoginCard.jsx';
import Popup from '../components/Popup.jsx';
import * as AuthManager from '../utils/AuthManager.js';
// import LoginStrings from '../strings/Login';
// import GenericStrings from '../strings/Generic';
import Store from '../utils/StoreManager.js';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.store = new Store();
    this.state = {};
  }

  componentDidMount() {
    if (this.store.getClientToken()) {
      AuthManager.refresh()
        .then(() => {
          this.setState({ loggedIn: true });
        })
        .catch(() => {});
    }
  }

  submitCredentials({ username, password, rememberme }) {
    // console.log(username, password, rememberme);
    this.setState({ submitButtonDisabled: true });
    AuthManager.login({
      username,
      password,
      rememberme,
    })
      .then(() => {
        this.setState({ submitButtonDisabled: false, loggedIn: true });
      })
      .catch((err) => {
        this.setState({
          submitButtonDisabled: false,
          popupContent: err.response.data.errorMessage,
          popupShow: true,
          popupTitle: "Erreur d'authentification",
        });
      });
  }

  render() {
    const {
      popupContent,
      popupTitle,
      popupShow,
      submitButtonDisabled,
      loggedIn,
    } = this.state;
    return (
      <div className="LoginPage">
        {popupShow && (
          <Popup
            type="alert"
            title={popupTitle}
            content={popupContent}
            close={() => this.setState({ popupShow: false })}
          />
        )}
        <LoginCard
          submitButtonDisabled={submitButtonDisabled}
          submitCredentials={(x) => this.submitCredentials(x)}
        />
        {loggedIn && <Redirect to="/" />}
      </div>
    );
  }
}

export default LoginPage;
