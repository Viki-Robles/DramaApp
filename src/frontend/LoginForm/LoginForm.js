import React, { Component } from "react";
import "./LoginForm.css";
import FormUserDetails from "../FormUserDetails/FormUserDetails";
import loginLogo from "./images/loginLogo2.png";

export default class LoginForm extends Component {

    handleSubmit(event) {
        event.preventDefault(event)
        const firstName = document.getElementById('form_firstName').value
        const lastName = document.getElementById('form_lastName').value
        const email = document.getElementById('form_email').value
        const postBody = { firstName, lastName, email }
        console.log(postBody)
        fetch('/rest/storeUser', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postBody)
        });
    }


    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            email: ''
        };
    }
    //Go Back to next step

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }
    //Go Back to previous step

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state;

        switch (step) {
            case 1:
                return (
                    <div className="loginForm-container">
                        <img src={loginLogo} alt=""/>
                        <h2>Sign in</h2>
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <input
                                id="form_firstName"
                                type="text" required
                                placeholder="FirstName"
                                value={this.state.value}
                                onChange={this.state.handleChange} />
                            <input
                                id="form_lastName"
                                type="text" required
                                placeholder="LastName"
                                value={this.state.value}
                                onChange={this.state.handleChange} />
                            <input
                                id="form_email"
                                type="email" required
                                placeholder="Email Address"
                                value={this.state.value}
                                onChange={this.state.handleChange} />
                                <input type="submit"></input>
                        </form>
                        <button className="loginForm-button" onClick={this.nextStep}>Next</button>
                    </div>
                    
                )

            case 2:
                return <FormUserDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange} />
            case 3:
                return <div>Add the calendar</div>
            case 4:
                return <div>Confirm Booking</div>
        }
    }
}

/**   <LockIcon fontSize="large" mr={20} color="green"/>
 */