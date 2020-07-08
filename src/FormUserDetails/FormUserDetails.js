import React, { Component } from "react";
import "./FormUserDetails.css";
import LoginForm from "../LoginForm/LoginForm";


export default class FormUserDetails extends Component {
    constructor() {
        super();
        this.state = {
            step: 1
        };
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }
    //Go Back to previous step

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }
    render() {
        const { step } = this.state;
        switch (step) {
            case 1:
                return (
                    <div className="formUserDetails-container">
                        <label>Choose your level</label>
                        <select className="levels" id="levels">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        <button className="loginForm-button" onClick={this.nextStep}>Next</button>
                    </div>
                )
            case 2:
                return <div>Hello</div>

        }
    }
}