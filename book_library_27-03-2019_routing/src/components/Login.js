import React, { Component } from 'react';
import './loginForm.css';
import  { Redirect} from 'react-router-dom';

class Login extends Component {

    state = {
        username: "",
        password: ""
    };

    handleChange = (event) => {
        this.setState(
            {
                ...this.state,
                [event.target.name]: event.target.value
               
            });
    }
 


    render(){

        const { isLogined, handleSubmit } = this.props;
        if (isLogined) {
            return <Redirect to="/books" />;
        }

        return(
            <div>
                <form className = "loginForm" onSubmit = { (event) => handleSubmit(event, this.state)} >
                    <input type = "text" placeholder = "Username"
                    onChange = {this.handleChange}
                    name="username"
                    value = {this.state.username}
                    />
                    <input type = "password" placeholder = "Password"
                    onChange = {this.handleChange}
                    value = {this.state.password}
                    name="password"
                    />

                    <button type = "submit">Log in</button>
                </form>
                <p>Username is admin</p>
                <p>Password is admin</p>
            </div>
        )
    }
}

export default Login;