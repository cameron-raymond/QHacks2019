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
        console.log(val)
        val.sendOrDrive === 'sending' ? this.setState({sendOrDrive: true,finishedForm: val}) : this.setState({sendOrDrive: false,finishedForm: true})
    }

    addSender = () => {
        if (this.state.finishedForm){
            var info = handleForm(this.state.finishedForm);
        }
    }

    render(){
        return <SenderConfirmation coordinates={[{lat: 43.64693750000001, lng: -79.47336359999997},{lat: 44.2301391,lng: -76.49719900000002}]}/>
        if (this.state.finishedForm){
            return this.state.sendOrDrive ? <SenderConfirmation coordinates={this.state.finishedForm.locations}/> : <DriverSuccess/>
        }
        return <UserFlow onFinished={this.changeFlow.bind(this)}/>
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
