import React from "react";
import styles from "./LoginForm.module.css";
import Input from "../Input/Input"


export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameInputValue: "",
            passwordInputValue: "",
            errorMsg: ""
        }
    }
    handleUserInputChange = ({ target: { value } }) => {
        this.setState({
            usernameInputValue: value,
        }
        );

    }
    handlePasswordInputChange = ({ target: { value } }) => {
        this.setState({
            passwordInputValue: value,
        })

    }
    handleValidation = (e) => {
        e.preventDefault();
        if (this.state.usernameInputValue.length < 5) {
            this.setState({
                errorMsg: "UserName must contain less th"
            })
        } else if (this.state.passwordInputValue.length < 5) {
            this.setState({
                errorMsg: "PasswordError"
            })
        } else {
            this.setState({
                errorMsg: ""
            })
        }


    }
    render() {
        return (
            <div>
                <form className={styles.form} >
                    <h1>Login</h1>
                    <Input placeholder={"UserName"} onChange={this.handleUserInputChange} value={this.state.usernameInputValue} />
                    <Input placeholder={"Password"} onChange={this.handlePasswordInputChange} value={this.state.passwordInputValue} />
                    <button onClick="handleValidation" disabled={!this.state.usernameInputValue || !this.state.passwordInputValue}>Login</button>
                    <h2>{this.state.errorMsg}</h2>
                </form>
            </div>

        )
    }
}
