import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserFlow from './Userflow'
import NoDrivers from './Scenes/NoDrivers/NoDrivers'
import {handleForm} from './Logic/app'
import * as serviceWorker from './serviceWorker';
import DriverSuccess from './Scenes/DriverSuccess/DriverSuccess';
import SenderConfirmation from './Scenes/SenderConfirmation/SenderConfirmation'

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            sendOrDrive: null,
            drivers: null,
            finishedForm: false
        }
    };
    changeFlow = (val) => {
        val.sendOrDrive === 'sending' ? handleForm(val).then(res => this.setState({finishedForm: val,sendOrDrive: true, drivers: res})) : this.setState({sendOrDrive: false,finishedForm: val})
    }
    render(){
        if (this.state.drivers){
            if (this.state.drivers[0] == 0){
                return <NoDrivers/>
            }
            return this.state.sendOrDrive ? <SenderConfirmation name={this.state.finishedForm.name} coordinates={this.state.finishedForm.locations} price={'$ '+this.state.drivers[2]} driverInfo={this.state.drivers} /> : <DriverSuccess/>
        }
        return <UserFlow onFinished={this.changeFlow.bind(this)}/>
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
