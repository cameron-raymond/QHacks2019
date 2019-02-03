import React from 'react'
import MapWithADirectionsRenderer from './MapWithADirectionsRenderer'
import Animation from './SenderAnimation'
import './confirmation.css'
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default class Map extends React.Component {
    constructor(props) {
        super(props);

    };

    render() {
        console.log(this.props.driverInfo)
        return (
            <div style={{
                width: '100vw',
                height: '100vh',
                // display: 'flex',
                // flex: 1,
                // alignItems: 'center',
                // flexDirection: 'column',
                // justifyContent: 'center',
                backgroundColor: '#373c4c',
                backgroundImage: url('stars', true),
                // backgroundSize: 'cover'
            }} >

                <div style={{
                    display: 'flex',
                    flex: 1,
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 40,
                    paddingRight: 40,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '40vh'
                }}>
                 <p className="confTitle">
                            Thank you {this.props.name}!
                        </p>
                    <div style={{
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'flex-start',
                        marginLeft: 20
                    }}>
                   
                        <p className="confTitle">
                            Your Driver: {this.props.driverInfo[1]}
                        </p>
                        <p className="confTitle">
                            Price: {this.props.price}
                        </p>

                    </div>
                    <Animation/>
                </div>
                <MapWithADirectionsRenderer
                    direction={this.props.coordinates[0]}
                    coordinates={this.props.coordinates}
                />


            </div>
        );
    }
}