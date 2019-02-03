import React from 'react'
import ReactDOM from 'react-dom'
import Intro from './Scenes/Intro/Intro'
import NumItems from './Scenes/NumItems/NumItems'
import UserInfoDriver from './Scenes/Info/UserInfoDriver'
import UserInfoSender from './Scenes/Info/UserInfoSender'
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

export default class DriverSuccess extends React.Component {
    render() {
        return (
            <div offset={0} speed={0} factor={3} style={{ backgroundColor: '#373c4c', backgroundImage: url('stars', true), backgroundSize: 'cover' }} >
            </div>

        )
    }
}

