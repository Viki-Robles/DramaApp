import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import "./FormUserDetails.css";


const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        display: "flex"
    },
}));

export default function ControlledOpenSelect() {
    const classes = useStyles();
    const [age, setAge] = useState('');
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(1);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    switch (step) {
        case 1:
            return (

                <div className="formControl-container">
                    <h2 className="formControl-container-header">Choose the type of class you want</h2>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-controlled-open-select-label">Level</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>Tuition Class</MenuItem>
                            <MenuItem value={2}>Exams Class</MenuItem>
                        </Select>
                        <button className="formControl-button" onClick={() => setStep(step + 1)}>Continue</button>
                    </FormControl>

                </div>

            )
        case 2:
            return <div>Hello there</div>
    }
}

/**
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
} */