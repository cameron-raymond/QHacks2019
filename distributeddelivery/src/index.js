import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserFlow from './Userflow'
import * as serviceWorker from './serviceWorker';
import DriverSuccess from './Scenes/DriverSuccess/DriverSuccess';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            sendOrDrive: null,
            finishedForm: false
        }
    };
    changeFlow = (val) => {
        val.sendOrDrive === 'sending' ? this.setState({sendOrDrive: true,finishedForm: true}) : this.setState({sendOrDrive: false,finishedForm: true})
    }

    render(){
        if (this.state.finishedForm){
            return this.state.sendOrDrive ? <div><p>sending</p></div> : <DriverSuccess/>
        }
        return <UserFlow onFinished={this.changeFlow.bind(this)}/>
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
