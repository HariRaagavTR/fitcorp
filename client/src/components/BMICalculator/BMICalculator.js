import React, { Component } from 'react';
import '../../styles/styles.scss';
import './bmi_calculator.css';

import BMIPictures from './BMIPictures';

class BMICalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: '',
            weight: '',
            bmi: 'N/A',
            category: 'N/A'
        }

        this.changeHeight = this.changeHeight.bind(this);
        this.changeWeight = this.changeWeight.bind(this);
        this.calculateBMI = this.calculateBMI.bind(this);
    }

    changeHeight(event) {
        this.setState({ height: event.target.value });
    }

    changeWeight(event) {
        this.setState({ weight: event.target.value });
    }

    calculateBMI() {
        var {
            height,
            weight
        } = this.state;

        if (height && weight) {
            var bmi_value = (parseFloat(weight) / (parseFloat(height) * parseFloat(height)));
            this.setState({
                bmi: bmi_value.toString()
            });

            if (bmi_value < 18.5) {
                this.setState({ category: 'underweight' });
            }
            else if (bmi_value < 25) {
                this.setState({ category: 'fit' });
            }
            else
                this.setState({ category: 'overweight' });
        }
        else {
            this.setState({ bmi: 'N/A' });
            this.setState({ category: 'N/A' });
        }
    }

    render() {
        return (
            <div id="bmi_calculator">
                <div id="bmi_box">
                    <p className="prompt" id="height">Height (in m):</p>
                    <input
                        type="number"
                        // placeholder="Enter Height"
                        onChange={this.changeHeight}
                        className="input_box"
                        id="height_input"
                    />

                    <p className="prompt" id="weight">Weight (in kg):</p>
                    <input
                        type="number"
                        // placeholder="Enter Weight"
                        onChange={this.changeWeight}
                        className="input_box"
                        id="weight_input"
                    />

                    <br />
                    <button
                        id="button_bmi"
                        onClick={this.calculateBMI}
                    >
                        <p id="calculate">Calculate</p>
                    </button>

                    <p className="prompt" id="bmi_prompt">Your BMI:</p>
                    <input
                        readOnly={true}
                        className="output_box"
                        id="bmi_output"
                        value={this.state.bmi}
                    />
                </div>
                <div id="bmi_pictures">
                    <BMIPictures category={this.state.category} />
                </div>
            </div>
        );
    }
}

export default BMICalculator;