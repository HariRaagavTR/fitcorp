import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../styles/styles.scss';
import {
    getFromStorage,
    setInStorage
} from '../utils/storage';

import HeaderLoggedIn from '../components/Header/HeaderLoggedIn';
import LogoutButton from '../components/Profile/LogoutButton';
import Message from '../components/Message/Message';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged_in: true,
            page: "profile"
        }
        this.changePage = this.changePage.bind(this);
        this.logout = this.logout.bind(this);
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

    logout() {
        const object = getFromStorage('logged_in');
        if (object && object.token) {
            const { token } = object;
            fetch('/account/logout?token=' + token)
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        setInStorage('logged_in', '');
                        this.setState({
                            logged_in: false
                        });
                    }
                });
        }
        else
            console.log('Error. Could Not Logout.');
    }

    render() {
        if (this.state.logged_in) {
            if (this.state.page === "profile") {
                return (
                    <div>
                        <HeaderLoggedIn page="profile" changePage={this.changePage} />
                        <Message message="In Progress." />
                        <LogoutButton logout={this.logout} />
                    </div>
                );
            }

            if (this.state.page === "home") {
                return (
                    <Redirect to="/home" />
                )
            }

            if (this.state.page === "about") {
                return (
                    <Redirect to="/about" />
                )
            }
        }

        return (
            <Redirect to="/" />
        );
    }
}

export default Profile;