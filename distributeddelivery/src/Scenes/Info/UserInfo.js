import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/addons'
import Geosuggest from './Places'
import './info.css'
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default class Map extends React.Component {
  constructor(props) {
    super(props);

  };


  render() {
 
    return (
      <ParallaxLayer
        offset={1}
        speed={0.1}
        // onClick={() => this.props.onClick()}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column', }}>
        <p className="infoTitle">I'm coming from</p>
        <Geosuggest/>
      </ParallaxLayer>
    );
  }
}