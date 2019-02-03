import React from "react";
import "./input.css";

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: (props.locked && props.active) || false,
      value: props.value || "",
      label: props.label || "Label"
    };
  }

  changeValue(event) {
    const value = event.target.value;
    this.setState({ value });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.setState({value: ""})
      this.onSubmit()
    }
  }
  onSubmit(){
    this.props.onSubmit(this.state.value)
  }

  render() {
    const { active, value, label } = this.state;
    const { locked } = this.props;
    const fieldClassName = `field ${(locked ? active : active || value) &&
      "active"} ${locked && !active && "locked"}`;

    return (
        <input
        className={fieldClassName}
          id={1}
          type="text"
          value={value}
          placeholder={label}
          onChange={this.changeValue.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}
          onSubmit={this.onSubmit}
        
          onFocus={() => !locked && this.setState({ active: true })}
          onBlur={() => !locked && this.setState({ active: false })}
          {...this.props}
        />
    );
  }
}

