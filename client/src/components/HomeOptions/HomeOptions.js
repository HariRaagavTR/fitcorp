import React, { Component } from 'react';
import '../../styles/styles.scss';
import './home_options.css';

class HomeOptions extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.querySelector("#" + this.props.section).style.fontWeight = "bold";
    }

    render() {
        return (
            <div id="homeoptions_">
                <div id="home_options">
                    <button
                        id="bmi_calc"
                        onMouseEnter={() => document.querySelector("#bmi").style.fontWeight = "bold"}
                        onMouseLeave={() => {
                            if (this.props.section !== "bmi")
                                document.querySelector("#bmi").style.fontWeight = "normal";
                        }}
                        onClick={() => {
                            this.props.onChange("bmi");
                        }}>
                        <p id="bmi" className="home_options_text">BMI Calculator</p>
                    </button>

                    <button
                        id="diets"
                        onMouseEnter={() => document.querySelector("#diet").style.fontWeight = "bold"}
                        onMouseLeave={() => {
                            if (this.props.section !== "diet")
                                document.querySelector("#diet").style.fontWeight = "normal";
                        }}
                        onClick={() => {
                            this.props.onChange("diet");
                        }}>
                        <p id="diet" className="home_options_text">Diets</p>
                    </button>

                    <button
                        id="yoga"
                        onMouseEnter={() => document.querySelector("#yoga_asanas").style.fontWeight = "bold"}
                        onMouseLeave={() => {
                            if (this.props.section !== "yoga_asanas")
                                document.querySelector("#yoga_asanas").style.fontWeight = "normal";
                        }}
                        onClick={() => {
                            this.props.onChange("yoga_asanas");
                        }}>
                        <p id="yoga_asanas" className="home_options_text">Yoga-Asanas</p>
                    </button>

                    <button
                        id="muscle"
                        onMouseEnter={() => document.querySelector("#muscle_building").style.fontWeight = "bold"}
                        onMouseLeave={() => {
                            if (this.props.section !== "muscle_building")
                                document.querySelector("#muscle_building").style.fontWeight = "normal";
                        }}
                        onClick={() => {
                            this.props.onChange("muscle_building");
                        }}>
                        <p id="muscle_building" className="home_options_text">Muscle-Building</p>
                    </button>

                    <button
                        id="workout_vids"
                        onMouseEnter={() => document.querySelector("#workout").style.fontWeight = "bold"}
                        onMouseLeave={() => {
                            if (this.props.section !== "workout")
                                document.querySelector("#workout").style.fontWeight = "normal";
                        }}
                        onClick={() => {
                            this.props.onChange("workout");
                        }}>
                        <p id="workout" className="home_options_text">Workout Videos</p>
                    </button>
                </div>
            </div>
        );
    }
}

export default HomeOptions;