import React from 'react'
import { Spring } from 'react-spring'
import './intro.css'

export default class Map extends React.Component {

  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        friction={10}>
        {props => <div className='button' onClick={this.props.onClick} style={props}>
        <p>{this.props.children}</p>
      </div>}
      </Spring>
      
    );
  }
}