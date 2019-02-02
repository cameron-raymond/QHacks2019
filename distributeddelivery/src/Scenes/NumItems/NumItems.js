import React from 'react'
import { ParallaxLayer } from 'react-spring/addons'
import Input from '../../Components/TextInput/Input'
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    };


    setSpace = (val) => {
        this.props.onClick()
        console.log(val)
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
                        I need a
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