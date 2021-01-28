import React, {Component} from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {

    constructor() {
        super();
        this.state = { name: "", message: "" }
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
      }

    validateForm = (e) => {
        let msg;
        console.log("HERE", this.state.name);
        e.preventDefault();
        if (this.state.name) { // .match(/^[.]{3,30}$/) {
            msg = "Form is Complete!";
        } else {
            msg = "Form is Incomplete!";
        }
        this.setState({ message: msg});
    }
    
    render() {
        return (<div>
            <Form name={this.state.name}
            handleNameChange={this.handleNameChange} validateForm={this.validateForm}></Form>
            <Message message={this.state.message}></Message>
        </div>);
    }
}

export default App;
