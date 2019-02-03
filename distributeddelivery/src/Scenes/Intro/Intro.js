import React from 'react'
import Button from './Button'
import './intro.css'
import {Spring} from 'react-spring'
import { ParallaxLayer } from 'react-spring/addons'

export default class Map extends React.Component {

  handleClick(val) {
    this.props.onClick()
    this.props.updateState(val)
  }

  render() {
    return (
      <ParallaxLayer
        offset={0}
        speed={0.1}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
       
       
        <br />
        
        <p className="title">I am...</p>
        <div className="options">
          <Button onClick={() => this.handleClick("sending")}>
            sending
          </Button>

          <Button onClick={() => this.handleClick("driving")}>
            driving
          </Button>
        </div>

      </ParallaxLayer>
    );
  }
}