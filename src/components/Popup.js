import React from 'react'
import '../css/Popup.css'
class Popup extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div className="PopupContainer">
				<div className={"Popup "+this.props.type}>
					<div className="Popup__title">{this.props.title}</div>
					<p className="Popup__content">{this.props.content}</p>
				</div>
			</div>
		)
	}
}
export default Popup