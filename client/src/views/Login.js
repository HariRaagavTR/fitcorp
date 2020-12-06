import React, { Component } from 'react';
import '../styles/styles.scss';

import {
    getFromStorage,
    setInStorage
} from '../utils/storage';
import { Redirect } from 'react-router-dom';

import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';
import Header from '../components/Header/Header';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            token: '',
            signInError: '',
            signUpError: ''
        };

        this.onSignUp = this.onSignUp.bind(this);
        this.onSignIn = this.onSignIn.bind(this);
    }

    componentDidMount() {
        const object = getFromStorage('logged_in');

        if (object && object.token) {
            const { token } = object;
            fetch('/account/verify?token=' + token)
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        this.setState({
                            token: token,
                            isLoading: false
                        });
                    }
                    else {
                        this.setState({
                            isLoading: false
                        });
                    }
                });
        }
        else {
            this.setState({
                isLoading: false
            });
        }
    }

    onSignUp(signUpEmail, signUpPassword, signUpFirstName, signUpLastName, signUpAge) {
        this.setState({
            isLoading: true,
            signInEmail: '',
            signUpError: ''
        });

        fetch('/account/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: signUpFirstName,
                lastName: signUpLastName,
                age: signUpAge,
                email: signUpEmail,
                password: signUpPassword
            })
        }).then(res => res.json())
            .then(json => {
                this.setState({
                    signUpError: json.message,
                    isLoading: false
                });
            });
    }

    onSignIn(signInEmail, signInPassword) {
        this.setState({ 
            isLoading: true,
            signInEmail: '',
            signUpError: ''
        });

        fetch('/account/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: signInEmail,
                password: signInPassword
            })
        }).then(res => res.json())
            .then(json => {
                if (json.success) {
                    setInStorage('logged_in', { token: json.token });
                    this.setState({
                        signInError: json.message,
                        isLoading: false,
                        signInEmail: '',
                        signInPassword: '',
                        token: json.token
                    });
                }
                else {
                    this.setState({
                        signInError: json.message,
                        isLoading: false,
                    });
                }
            });
    }

    render() {
        const {
            isLoading,
            token
        } = this.state;

        if (isLoading) {
            return (
                <div>
                    <Header />
                    <div id="load_div">
                        <p id="loading">Loading..</p>
                    </div>
                </div>
            );
        }

        if (!token) {
            return (
                <div>
                    <Header />
                    <div style={{ 
                        "display": "table",
                        "width": "100%",
                        "height": "700px",
                        "tableLayout": "fixed"
                    }}>
                        <SignIn onSignIn={this.onSignIn} signInError={this.state.signInError} />
                        <SignUp onSignUp={this.onSignUp} signUpError={this.state.signUpError} />
                    </div>
                </div>
            );
        }

        return (
            <Redirect to="/home" />
        );
    }
}

export default Login;