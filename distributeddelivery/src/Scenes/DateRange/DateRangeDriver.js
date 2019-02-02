import React from 'react'
import { ParallaxLayer } from 'react-spring/addons'
import Input from '../../Components/TextInput/Input'

export default class Map extends React.Component {
    setSpace = (val) => {
        this.props.onClick()
        this.props.updateState(val)
    }

    getDate = () => {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        today = mm + '/' + dd + '/' + yyyy;
        return today
    }
    render() {

        return (
            <ParallaxLayer
                offset={3}
                speed={-0}
                style={{ display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent: 'center' }}
            >
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <p className="infoTitle">
                        I'm leaving on
                    <Input
                            id={1}
                            label={this.getDate()}
                            predicted="small"
                            locked={false}
                            active={false}
                            onSubmit={this.setSpace}
                        />
                    </p>
                </div>
                
            </ParallaxLayer>
        );
    }
}