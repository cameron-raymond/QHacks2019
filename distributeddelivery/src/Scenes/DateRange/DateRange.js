import React from 'react'
import { ParallaxLayer } from 'react-spring/addons'
import DayPicker from 'react-day-picker/DayPickerInput'
import DayPickerRange from '../../Components/DayPickerRange/DayPickerRange'
import 'react-day-picker/lib/style.css';

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    };
    setSpace = (val) => {
        this.props.updateState(val)
    }
    returnDateRange = () => {
        if (this.props.sender) {
            return (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column' }}>
                    <p className="infoTitle">Let's send between</p>
                    <DayPickerRange returnDate={this.setSpace} />
                </div>
            )
        }
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                <p className="infoTitle">
                    I'm leaving on
                </p>
                <div style={{ marginLeft: 15 }}><DayPicker onDayChange={this.setSpace} /></div>
            </div>
        )
    }

    render() {
        return (
            <ParallaxLayer
                offset={3}
                speed={-0}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column' }}>

                {this.returnDateRange()}

            </ParallaxLayer>
        );
    }
}