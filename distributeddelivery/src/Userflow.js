import React from 'react'
import Intro from './Scenes/Intro/Intro'
import NumItems from './Scenes/NumItems/NumItems'
import UserInfoDriver from './Scenes/Info/UserInfoDriver'
import UserInfoSender from './Scenes/Info/UserInfoSender'
import DateRange from './Scenes/DateRange/DateRange'
import { Parallax, ParallaxLayer } from 'react-spring/addons'

// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default class UserFlow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            sendOrDrive: null,
            locations: null,
            space: null,
            timeFrame: null
        }
    };

    updateUser = (val) => {
        this.setState({
            name: val[0],
            sendOrDrive: val[1],
        })
    }
    updateLocations = (val) => {
        this.setState({ locations: val })
    }
    updateSpace = (val) => {
        this.setState({ space: val })
    }

    updateTimeFrame = (val) => {
        this.setState({ timeFrame: val })
    }

    returnEverything = () =>{
        if(this.state.sendOrDrive && this.state.space && this.state.timeFrame && this.state.locations){
            this.props.onFinished(this.state)
        }
    }

    render() {
        return (
            <Parallax ref={ref => (this.parallax = ref)} pages={4}>
                <ParallaxLayer offset={0} speed={0} factor={3} style={{backgroundColor: '#373c4c',backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
                <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
                <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#909090' }} />
                <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#87BCDE' }} />
                <Intro onClick={() => this.parallax.scrollTo(1)} updateState={this.updateUser} />
                <ParallaxLayer offset={3} speed={1}>
                {this.returnEverything()}
                </ParallaxLayer>
                {this.state.sendOrDrive === 'sending' ? <UserInfoSender onClick={() => this.parallax.scrollTo(2)} updateState={this.updateLocations} /> : <UserInfoDriver onClick={() => this.parallax.scrollTo(2)} updateState={this.updateLocations} />}
                
                {this.state.sendOrDrive === 'sending' ? <NumItems onClick={() => this.parallax.scrollTo(3)} updateState={this.updateSpace} sender={true}/> :<NumItems onClick={() => this.parallax.scrollTo(3)} updateState={this.updateSpace} sender={false}/>}

                
                {/* Earth needs to be behind everything */}
                <ParallaxLayer offset={3.6} speed={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                    <img alt={""} src={url('earth')} style={{ width: '60%' }} />
                </ParallaxLayer>

                {this.state.sendOrDrive === 'sending' ? <DateRange sender={true} updateState={this.updateTimeFrame}/> :<DateRange sender={false} updateState={this.updateTimeFrame}/>}

                {/*BACKGROUND IMAGES*/}
                <ParallaxLayer offset={0.2} speed={-0.3} style={{ pointerEvents: 'none' }}>
                    <img alt={""} src={url('satellite2')} style={{ width: '15%', marginLeft: '15%' }} />
                </ParallaxLayer>
                <ParallaxLayer offset={0.5} speed={-0.3} style={{ pointerEvents: 'none' }}>
                    <img alt={""} src={url('satellite3')} style={{ width: '15%', marginLeft: '80%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
                    <img alt={""} src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
                </ParallaxLayer>
               
                <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1, pointerEvents: 'none' }}>
                    <img alt={""} src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                    <img alt={""} src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1, pointerEvents: 'none' }}>
                    <img alt={""} src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                    <img alt={""} src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2, pointerEvents: 'none' }}>
                    <img alt={""} src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                    <img alt={""} src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4, pointerEvents: 'none' }}>
                    <img alt={""} src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                    <img alt={""} src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                    <img alt={""} src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6, pointerEvents: 'none' }}>
                    <img alt={""} src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                    <img alt={""} src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={0.4} style={{ opacity: 0.4, pointerEvents: 'none' }}>
                    <img alt={""} src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                    <img alt={""} src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                    <img alt={""} src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                </ParallaxLayer>
            </Parallax>
        )
    }
}

