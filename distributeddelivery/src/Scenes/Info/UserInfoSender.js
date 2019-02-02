import React from 'react'
import { ParallaxLayer } from 'react-spring/addons'
import Geosuggest from './Places'
import './info.css'

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comingFrom: null,
      goingTo: null
    }
  };

  comingFrom = (val) => {
    this.setState({ comingFrom: val });
    if (this.state.goingTo && this.state.comingFrom){
      this.props.updateState([this.state.comingFrom,this.state.goingTo])
      this.props.onClick();
    }
  }
  goingTo = (val) => {
    this.setState({ goingTo: val });
    if (this.state.goingTo && this.state.comingFrom){
      this.props.updateState([this.state.comingFrom,this.state.goingTo])
      this.props.onClick();
    }
  }

  render() {
    return (
      <ParallaxLayer
        offset={1}
        speed={0.1}
        // onClick={() => this.props.onClick()}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
          <p className="infoTitle">I'm sending from</p>
          <Geosuggest onChange={this.comingFrom} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
          <p className="infoTitle">I'm going to</p>
          <Geosuggest onChange={this.goingTo} />
        </div>
      </ParallaxLayer>
    );
  }
}