import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserFlow from './Userflow'
import {handleForm} from './Logic/app'
import * as serviceWorker from './serviceWorker';
import DriverSuccess from './Scenes/DriverSuccess/DriverSuccess';
import SenderConfirmation from './Scenes/SenderConfirmation/SenderConfirmation'

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            sendOrDrive: null,
            finishedForm: false
        }
    };
    changeFlow = (val) => {
        val.sendOrDrive === 'sending' ? this.setState({sendOrDrive: true,finishedForm: val}) : this.setState({sendOrDrive: false,finishedForm: val})
    }

    // addSender = () => {
    //     if (this.state.finishedForm){
    //         var testData = {
    //             name: "Cam",
    //             sendOrDrive: "sending",
    //             locations: [{lat:,lng:}]
    //             ,
    //         }
    //         var info = handleForm(testData);
    //     }
    // }

    render(){
        if (this.state.finishedForm){
            var data = handleForm(this.state.finishedForm)
            return this.state.sendOrDrive ? <SenderConfirmation name={this.state.finishedForm.name} coordinates={this.state.finishedForm.locations} driver={data[1]} price={'$ '+data[2]} /> : <DriverSuccess/>
        }
        return <UserFlow onFinished={this.changeFlow.bind(this)}/>
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
