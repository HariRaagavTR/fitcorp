import React, { Component } from 'react';
import '../../styles/styles.scss';
import './header.css';

class HeaderLoggedIn extends Component {
    constructor(props) {
        super(props);
        this.changeBackgroundHomeEnter = this.changeBackgroundHomeEnter.bind(this);
        this.changeBackgroundHomeLeave = this.changeBackgroundHomeLeave.bind(this);
        this.changeBackgroundAboutEnter = this.changeBackgroundAboutEnter.bind(this);
        this.changeBackgroundAboutLeave = this.changeBackgroundAboutLeave.bind(this);
        this.changeBackgroundProfileLeave = this.changeBackgroundProfileLeave.bind(this);
    }

    componentDidMount() {
        if (this.props.page === 'home') {
            document.querySelector('#header_home').style.background = '#00390D';
            document.querySelector('#header_home').style.border = '#00390D';
        }
        else if (this.props.page === 'about') {
            document.querySelector('#header_about').style.background = '#00390D';
            document.querySelector('#header_about').style.border = '#00390D';
        }
        else
            document.querySelector('#header_profile').style.border = "7px solid #00390D";
    }

    changeBackgroundHomeEnter() {
        document.querySelector('#header_home').style.background = '#00390D';
        document.querySelector('#header_home').style.border = '#00390D';
    }

    changeBackgroundHomeLeave() {
        if (this.props.page != 'home') {
            document.querySelector('#header_home').style.background = '#1D7D26';
            document.querySelector('#header_home').style.border = '#1D7D26';
        }
    }

    changeBackgroundAboutEnter() {
        document.querySelector('#header_about').style.background = '#00390D';
        document.querySelector('#header_about').style.border = '#00390D';
    }

    changeBackgroundAboutLeave() {
        if (this.props.page != 'about') {
            document.querySelector('#header_about').style.background = '#1D7D26';
            document.querySelector('#header_about').style.border = '#1D7D26';
        }
    }

    changeBackgroundProfileLeave() {
        if (this.props.page != 'profile')
            document.querySelector('#header_profile').style.border = "5px solid #000000";
    }

    render() {
        return (
            <div id="header">
                <div id="header_bg">
                    <p id="header_name">FitCorp Gymnasium</p>

                    <button
                        className="header_button"
                        id="header_home"
                        onMouseEnter={this.changeBackgroundHomeEnter}
                        onMouseLeave={this.changeBackgroundHomeLeave}
                        onClick={() => this.props.changePage('home')}
                    >
                        <p className="header_text" id="header_home_text">Home</p>
                    </button>

                    <button
                        className="header_button"
                        id="header_about"
                        onMouseEnter={this.changeBackgroundAboutEnter}
                        onMouseLeave={this.changeBackgroundAboutLeave}
                        onClick={() => this.props.changePage('about')}
                    >
                        <p className="header_text" id="header_about_text">About</p>
                    </button>

                    <div id="profile">
                        <div
                            id="header_profile"
                            onMouseEnter={() => document.querySelector('#header_profile').style.border = "7px solid #00390D"}
                            onMouseLeave={this.changeBackgroundProfileLeave}
                            onClick={() => this.props.changePage('profile')}
                        />
                    </div>
                </div>
            </div>
        );
    }

}

export default HeaderLoggedIn;