import React from 'react'
import LoginCard from '../components/LoginCard.js'
import Popup from '../components/Popup.js'
import LoginStrings from '../strings/Login.js'
import GenericStrings from '../strings/Generic.js'
class LoginPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	componentDidMount() {

	}
	render() {
		return (
			<div className="LoginPage">
				{this.state.popupShow && <Popup type="alert" title={this.state.popupTitle} content={this.state.popupContent}/>}
				<LoginCard/>
			</div>
		)
	}
}

export default LoginPage