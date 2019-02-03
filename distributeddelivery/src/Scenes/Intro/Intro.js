import React from 'react'
import Button from './Button'
import './intro.css'
import Input from '../../Components/TextInput/Input'
import { Spring } from 'react-spring'
import { ParallaxLayer } from 'react-spring/addons'

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null
    }
  }

  getVal = (val) => {
    this.setState({ name: val })
  }

  handleClick(val) {
    if (this.state.name) {
      this.props.onClick()
      this.props.updateState([this.state.name,val])
    }
  }

  render() {
    return (
      <ParallaxLayer
        offset={0}
        speed={0.1}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>


        <br />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
          <p className="title">Hi, I'm </p>
          <Input
            id={1}
            label="your name"
            locked={false}
            active={false}
            onKeyChange={this.getVal}
          />
          <p className="title">I want to...</p>
        </div>

        <div className="options">
          <Button onClick={() => this.handleClick("sending")}>
            send
          </Button>

          <Button onClick={() => this.handleClick("driving")}>
            drive
          </Button>
        </div>

      </ParallaxLayer>
    );
  }
}