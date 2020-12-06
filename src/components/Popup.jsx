/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import '../css/Popup.css';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      type, title, content, close,
    } = this.props;
    return (
      <div className="PopupContainer">
        <div className={`Popup ${type}`}>
          <a href="#" className="Popup__closeButton" onClick={() => close()} />
          <div className="Popup__title">{title}</div>
          <p className="Popup__content">{content}</p>
        </div>
      </div>
    );
  }
}
export default Popup;
