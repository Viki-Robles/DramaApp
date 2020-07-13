import React, { Component } from "react";
import "./LoginForm.css";
import FormUserDetails from "../FormUserDetails/FormUserDetails";
import loginLogo from "./images/loginLogo2.png";
import LockIcon from '@material-ui/icons/Lock';


export default class LoginForm extends Component {
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
        const { firstName, lastName, email } = this.state;
        const { step } = this.state;

        switch (step) {
            case 1:
                return (
                    <div className="loginForm-container">
                        <img src={loginLogo} alt=""/>
                        <h2>Sign in</h2>
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <input
                                type="text" required
                                placeholder="FirstName"
                                value={this.state.value}
                                onChange={this.state.handleChange} />
                            <input
                                type="text" required
                                placeholder="LastName"
                                value={this.state.value}
                                onChange={this.state.handleChange} />
                            <input
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