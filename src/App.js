import React, {Component} from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {

    constructor() {
        super();
        this.state = { name: "", isFormValid: false }
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
      }

    validateForm = (e) => {
        let msg, isValid;
        
        e.preventDefault();
        if (this.state.name.match(/^.{3,30}$/)) {
            console.log("GOOD")
            isValid = true;
        } else {
            isValid = false;
        }
        this.setState({ isFormValid: isValid });
        console.log("HERE", this.state);
    }
    
    render() {
        return (<div>
            <Form name={this.state.name}
            handleNameChange={this.handleNameChange} validateForm={this.validateForm}></Form>
            <Message isFormValid={this.state.isFormValid}></Message>
        </div>);
    }
}

export default App;
