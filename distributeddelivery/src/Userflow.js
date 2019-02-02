import React from 'react'
import ReactDOM from 'react-dom'
import Intro from './Scenes/Intro/Intro'
import NumItems from './Scenes/NumItems/NumItems'
import UserInfo from './Scenes/Info/UserInfo'
import DateRange from './Scenes/DateRange/DateRange'
import { Parallax, ParallaxLayer } from 'react-spring/addons'

// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
// const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
// const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
// const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
// const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
// const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
// const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sendOrDrive: null,
            locations: null,
            space: null
        }
    };

    updateUser = (val) => {
        this.setState({sendOrDrive: val})
    }
    updateLocations = (val) => {
        this.setState({ locations: val })
    }
    updateSpace = (val) => {
        this.setState({ space: val })
    }

    render() {
        return (

            <Parallax ref={ref => (this.parallax = ref)} pages={4}>
                <ParallaxLayer offset={0} speed={0} factor={3} style={{backgroundColor: '#373c4c',backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
                <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
                <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#909090' }} />
                <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#87BCDE' }} />
                <Intro onClick={() => this.parallax.scrollTo(1)} updateState={this.updateUser} />
                <UserInfo onClick={() => this.parallax.scrollTo(2)} updateState={this.updateLocations} />
                <NumItems onClick={() => this.parallax.scrollTo(3)} updateState={this.updateSpace} />
                <DateRange/>

                {/*BACKGROUND IMAGES*/}
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
                <ParallaxLayer offset={3.8} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                    <img alt={""} src={url('earth')} style={{ width: '60%' }} />
                </ParallaxLayer>





            </Parallax>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))