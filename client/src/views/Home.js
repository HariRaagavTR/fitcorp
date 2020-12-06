import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../styles/styles.scss';

import HeaderLoggedIn from '../components/Header/HeaderLoggedIn';
import HomeOptions from '../components/HomeOptions/HomeOptions';
import BMICalculator from '../components/BMICalculator/BMICalculator';
import WorkoutVideos from '../components/WorkoutVideos/WorkoutVideos';
import Message from '../components/Message/Message';
import YogaAsanas from '../components/YogaAsanas/YogaAsanas';
import MuscleBuilding from '../components/MuscleBuilding/MuscleBuilding';

import {
    getFromStorage
} from '../utils/storage';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "home",
            logged_in: true,
            section: 'bmi'
        };

        this.changeSection = this.changeSection.bind(this);
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

    changeSection(section) {
        this.setState({ section });
        document.querySelector("#bmi").style.fontWeight = "normal";
        document.querySelector("#diet").style.fontWeight = "normal";
        document.querySelector("#yoga_asanas").style.fontWeight = "normal";
        document.querySelector("#muscle_building").style.fontWeight = "normal";
        document.querySelector("#workout").style.fontWeight = "normal";
        document.querySelector("#" + section).style.fontWeight = "bold";
    }

    changePage(page) {
        this.setState({ page });
    }

    render() {
        if (this.state.logged_in) {
            if (this.state.page === "home") {
                return (
                    <div>
                        <HeaderLoggedIn page="home" changePage={this.changePage} />
                        <HomeOptions onChange={this.changeSection} section={this.state.section} />
                        {
                            (this.state.section === 'bmi') ? (
                                <BMICalculator />
                            ) : (this.state.section === 'diet') ? (
                                <Message message="In Progess." />
                            ) : (this.state.section === 'yoga_asanas') ? (
                                <YogaAsanas />
                            ) : (this.state.section === 'muscle_building') ? (
                                <MuscleBuilding />
                            ) : (<WorkoutVideos />)
                        }
                    </div>
                );
            }

            if (this.state.page === "about") {
                return (
                    <Redirect to="/about" />
                )
            }

            if(this.state.page === "profile") {
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

export default Home;