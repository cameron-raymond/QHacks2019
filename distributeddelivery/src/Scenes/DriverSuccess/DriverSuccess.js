import React from 'react'
import Animation from './Animation'
import './driver.css'


// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default class DriverSuccess extends React.Component {
    render() {
        return (
            <div style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: '#373c4c',
                backgroundImage: url('stars', true),
                backgroundSize: 'cover'
            }} >
                <p className="driverTitle">Success!<br/> We'll notify you if there's a match.</p>
                <Animation/>
            </div>

        )
    }
}

