import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
        };

    }
    
    render() {
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form>
                <h3>Name:
                </h3>
                <input type="text" value={this.props.name} onChange={this.props.handleNameChange}></input>
                <h3>Email:
                </h3>
                <input type="text" value={this.props.email} onChange={this.props.handleEmailChange}></input>
                <h3>Phone:
                </h3>
                <input type="text" value={this.props.phone} onChange={this.props.handlePhoneChange}></input>
                <h3>Blog URL:
                </h3>
                <input type="text" value={this.props.url} onChange={this.props.handleURLChange}></input>
                <div className="small-6 small-centered text-center columns">
                    <a href="#" className="button success expand round text-center" onClick={e => this.props.validateForm(e)}>Verify</a>
                </div>
            </form>
        </div>);
    }
}

export default Form;
