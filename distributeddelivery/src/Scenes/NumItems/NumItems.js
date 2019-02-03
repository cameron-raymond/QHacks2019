import React from 'react'
import { ParallaxLayer } from 'react-spring/addons'
import Input from '../../Components/TextInput/Input'

export default class Map extends React.Component {
    setSpace = (val) => {
        this.props.onClick()
        this.props.updateState(val)
    }
    
    render() {
        
        return (
            <ParallaxLayer
                offset={2}
                speed={-0}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <p className="infoTitle">
                        I {this.props.sender ? "need" : "have"} a</p>
                    <Input
                            id={1}
                            label="small, medium, large"
                            locked={false}
                            active={false}
                            onSubmit={this.setSpace}
                        />                    
                        <p className="infoTitle">amount of space</p>
                </div>

            </ParallaxLayer>
        );
    }
}