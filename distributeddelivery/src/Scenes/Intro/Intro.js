import React from 'react'
import ReactDOM from 'react-dom'
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
      onClick={this.props.onClick}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={url('server')} style={{ width: '20%' }} />
    </ParallaxLayer>
    );
  }
}