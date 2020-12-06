import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../styles/styles.scss';
import {
    getFromStorage
} from '../utils/storage';
import './about.css';

import HeaderLoggedIn from '../components/Header/HeaderLoggedIn';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged_in: true,
            page: "about"
        }
        this.changePage = this.changePage.bind(this);
    }

    componentWillMount() {
        const object = getFromStorage('logged_in');

        if (object && object.token) {
            const { token } = object;
            fetch('/account/verify?token=' + token)
                .then(res => res.json())
                .then(json => {
                    if (!json.success) {
                        this.setState({
                            logged_in: false
                        });
                    }
                });
        }
        else {
            this.setState({
                logged_in: false
            });
        }
    }

    changePage(page) {
        this.setState({ page });
    }

    render() {
        if (this.state.logged_in) {
            if (this.state.page === "about") {
                return (
                    <div>
                        <HeaderLoggedIn page="about" changePage={this.changePage} />
                        <p id='aaa'>About</p>
                        <p id='tstyle'>At FitCorp, customers are at the center of what we do and why we do it! We believe fitness should be accessible to everyone and everywhere. That's why we offer numerous free, full length workout videos, muscle building exercises, the most affordable and effective workout programs on the web, meal plans and healthy diet plans which can enhance your body so that you can stay fit and have fun during your workout!</p>
                        <p id='us'>Visit Us:</p>
                        <div>
                            <div style={{ "float": "left" }}>
                                <img src={process.env.PUBLIC_URL + "/resources/wp.png"} id="img1" />
                            </div>
                            <div style={{ "float": "left" }}>
                                <img src={process.env.PUBLIC_URL + "/resources/insta.png"} id="img2" />
                            </div>
                            <div style={{ "float": "left" }}>
                                <img src={process.env.PUBLIC_URL + "/resources/fb.png"} id="img3" />
                            </div>
                        </div>
                    </div>
                );
            }

            if (this.state.page === "home") {
                return (
                    <Redirect to="/home" />
                )
            }

            if (this.state.page === "profile") {
                return (
                    <Redirect to="/profile" />
                )
            }
        }

        return (
            <Redirect to="/" />
        );
    }
}

export default About;