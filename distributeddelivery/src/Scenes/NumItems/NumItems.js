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
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <p className="infoTitle">
                        I {this.props.sender ? "need" : "have"} a
                    <Input
                            id={1}
                            label="small, medium, large"
                            predicted="small"
                            locked={false}
                            active={false}
                            onSubmit={this.setSpace}
                        />
                        amount of space</p>
                </div>

            </ParallaxLayer>
        );
    }
}