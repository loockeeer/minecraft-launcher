import React from 'react';
import '../css/CustomSlider.css';

class CustomSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.value || props.min,
    };
  }

  render() {
    const {
      min, max, unit, onChange,
    } = this.props;
    const { inputValue } = this.state;
    return (
      <div className="CustomSlider">
        <div className="CustomSlider__slider">
          <input
            type="range"
            className="CustomSlider__input"
            min={min}
            max={max}
            value={inputValue}
            onChange={(e) => {
              this.setState({ inputValue: e.target.value });
              onChange(e.target.value);
            }}
          />
          <div className="CustomSlider__labels">
            <p className="CustomSlider__label">
              {min}
              {' '}
              {unit}
            </p>
            <p className="CustomSlider__label">
              {max}
              {' '}
              {unit}
            </p>
          </div>
        </div>
        <p className="CustomSlider__label">
          {inputValue}
          {' '}
          {unit}
        </p>
      </div>
    );
  }
}
export default CustomSlider;
