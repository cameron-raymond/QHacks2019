import React from 'react'
import './intro.css'

export default class Map extends React.Component {
  constructor(props) {
    super(props);
   
  };

  render() {
    return (
      <div className='button' onClick={this.props.onClick}>
        <a>{this.props.children}</a>
      </div>
    );
  }
}