import React, { Component } from 'react';
import '../../styles/styles.scss';
import './workout_style.css';

class SevenMinuteWorkout extends Component {
    render() {
        return (
            <div id="seven_minute_workout_div">
                <video id="myvideo_smw" controls>
                    <source src={process.env.PUBLIC_URL + '/resources/example2.mp4'} type='video/mp4' />
                </video>
                <p id="sss">7-Min Workout</p>
            </div>
        );
    }
}

class Zumba extends Component {
    render() {
        return (
            <div id="zumba_workout_div">
                <video id="myvideo_z" controls>
                    <source src={process.env.PUBLIC_URL + '/resources/zumba.mp4'} type='video/mp4' />
                </video>
                <p id="zzz">Zumba Workout</p>
            </div>
        );
    }
}

class WorkoutVideos extends Component {
    render() {
        return (
            <div>
                <SevenMinuteWorkout />
                <Zumba />
            </div>
        );
    }
}

export default WorkoutVideos;