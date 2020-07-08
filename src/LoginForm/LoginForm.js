import React, { Component } from "react";


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
        return (
            <div>
                <h2>Login Details</h2>
                <form>
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
                        placeholder="Email"
                        value={this.state.value}
                        onChange={this.state.handleChange} />
                </form>
            </div>
        );
    }
}