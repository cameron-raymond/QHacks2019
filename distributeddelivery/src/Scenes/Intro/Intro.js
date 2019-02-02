import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import './intro.css'
import { Parallax, ParallaxLayer } from 'react-spring/addons'
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default class Map extends React.Component {
  constructor(props) {
    super(props);
   
  };
  

  render() {
    return (
      <ParallaxLayer
      offset={0}
      speed={0.1}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column' }}>
      <p className="title">Welcome to Distributed Delivery</p>
        <br/>
        <br/>
        <br/>
        <p>I am a...</p>
        <div className="options">
          <Button onClick={this.props.onClick}>
            User
          </Button>
          
          <Button onClick={this.props.onClick}>
            Driver
          </Button>
        </div>
      
    </ParallaxLayer>
    );
  }
}