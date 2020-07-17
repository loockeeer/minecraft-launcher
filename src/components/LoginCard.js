import React from 'react'
import '../css/LoginCard.css'
import openBrowser from '../utils/openBrowser.js'
import LoginStrings from '../strings/Login.js'
class LoginCard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	componentDidMount() {
	}
	render() {
		return (
			<div className="LoginCardContainer">
				<div className="LoginCard">
					<div className="LoginCard__head">
						<img className="LoginCard__head__logo" src="/logo.png"/>
						<div className="LoginCard__head__title">{LoginStrings.login__bar__title}</div>
					</div>
					<form className="LoginCard__form">
						<input type="text" className="LoginCard__form__username noBorderInput" id="LoginCard__form__username" placeholder={LoginStrings.login__bar__username}/>
						<input type="password" className="LoginCard__form__password noBorderInput" id="LoginCard__form__password" placeholder={LoginStrings.login__bar__password}/>
						<div className="LoginCard__form__rememberme"><input type="checkbox"/>{LoginStrings.login__bar__remember_me}</div>
						<a onClick={()=>{}} href="#" className="LoginCard__submit">{LoginStrings.login__bar__login}</a>
					</form>
					<a href="#" onClick={async e=>{
						e.preventDefault()
						openBrowser('https://www.minecraft.net/fr-fr/get-minecraft/');
					}} className="LoginCard__needAccount">{LoginStrings.login__bar__need_account}</a>
				</div>
			</div>
		)
	}
}

export default LoginCard