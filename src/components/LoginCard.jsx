import React from 'react';
import '../css/LoginCard.css';
import openBrowser from '../utils/scripts/openBrowser';
import LoginStrings from '../strings/Login';

class LoginCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', rememberme: false };
  }

  componentDidMount() {
  }

  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleChangeCheckbox(event) {
    this.setState({ rememberme: event.target.checked });
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { submitCredentials } = this.props;
    return (
      <div className="LoginCardContainer">
        <div className="LoginCard">
          <div className="LoginCard__head">
            <img alt="logo" className="LoginCard__head__logo" src="/logo.png" />
            <div className="LoginCard__head__title">{LoginStrings.login__bar__title}</div>
          </div>
          <form className="LoginCard__form">
            <input onChange={(e) => this.handleChangeUsername(e)} type="text" className="LoginCard__form__username noBorderInput" id="LoginCard__form__username" placeholder={LoginStrings.login__bar__username} />
            <input onChange={(e) => this.handleChangePassword(e)} type="password" className="LoginCard__form__password noBorderInput" id="LoginCard__form__password" placeholder={LoginStrings.login__bar__password} />
            <div className="LoginCard__form__rememberme">
              <input onChange={(e) => this.handleChangeCheckbox(e)} type="checkbox" />
              {LoginStrings.login__bar__remember_me}
            </div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              onClick={(e) => {
                e.preventDefault();
                const { username, password, rememberme } = this.state;
                submitCredentials({ username, password, rememberme });
              }}
              href="#"
              className="LoginCard__submit"
            >
              {LoginStrings.login__bar__login}
            </a>
          </form>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href="#"
            onClick={async (e) => {
              e.preventDefault();
              openBrowser('https://www.minecraft.net/fr-fr/get-minecraft/');
            }}
            className="LoginCard__needAccount"
          >
            {LoginStrings.login__bar__need_account}
          </a>
        </div>
      </div>
    );
  }
}

export default LoginCard;
