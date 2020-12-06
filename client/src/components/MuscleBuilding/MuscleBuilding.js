import React, { Component } from 'react';
import './muscle.css';

class Exercise1 extends Component {
    render() {
        return (
            <div>
                <p id='name_1'>Bench Press</p>
            </div>
        );
    }
}

class Exercise2 extends Component {
    render() {
        return (
            <div>
                <p id='name_2'>Reverse Crunches</p>
            </div>
        );
    }
}

class Exercise3 extends Component {
    render() {
        return (
            <div>
                <p id='name_3'>Planks</p>
            </div>
        );
    }
}

class Exercise4 extends Component {
    render() {
        return (
            <div>
                <p id='name_4'>Deadlifts</p>
            </div>
        );
    }
}

class Benifits1 extends Component {
    render() {
        return (
            <ol id='benifit1'>
                <li>Tone the muscles of upper body</li>
                <li>Effective exercise for sports</li>
                <li>Improving muscular endurance</li>
                <li>Improving muscular endurance</li>
            </ol>
        );
    }
}

class Benifits2 extends Component {
    render() {
        return (
            <div>
                <ol id='benifit2'>
                    <li>Takes strain off your neck</li>
                    <li>Less stressful on your back than crunches</li>
                    <li>Strengthens your rectus abdominis</li>
                    <li>Targets other core muscles</li>
                </ol>
            </div>
        );
    }
}

class Benifits3 extends Component {
    render() {
        return (
            <div>
                <ol id='benifit3'>
                    <li>Activate more muscles</li>
                    <li>Helps improving posture</li>
                    <li>Heips to increase flexibility</li>
                    <li>Improve core strength and stability</li>
                </ol>
            </div>
        );
    }
}

class Benifits4 extends Component {
    render() {
        return (
            <div>
                <ol id='benifit4'>
                    <li>Increases cardiovascular ability</li>
                    <li>Builds muscles</li>
                    <li>More fat burning</li>
                    <li>Build your upper as well as your lower body</li>
                </ol>
            </div>
        );
    }
}


class Muscle1 extends Component {
    render() {
        return (
            <div id="image_1">
                <img src={process.env.PUBLIC_URL + "/resources/muscle1.png"} height="300px" />
            </div>
        );
    }
}

class Muscle2 extends Component {
    render() {
        return (
            <div id="image_2">
                <img src={process.env.PUBLIC_URL + "/resources/muscle2.png"} />
            </div>
        );
    }
}

class Muscle3 extends Component {
    render() {
        return (
            <div id="image_3">
                <img src={process.env.PUBLIC_URL + "/resources/muscle3.jpg"} height="250px" />
            </div>
        );
    }
}

class Muscle4 extends Component {
    render() {
        return (
            <div id="image_4">
                <img src={process.env.PUBLIC_URL + "/resources/muscle4.png"} height="250px" />
            </div>
        );
    }
}

class MuscleBuilding extends Component {
    render() {
        return (
            <div style={{ "height": "1500px" }}>
                <Exercise1 />
                <Benifits1 />
                <Muscle1 />
                <Exercise2 />
                <Benifits2 />
                <Muscle2 />
                <Exercise3 />
                <Benifits3 />
                <Muscle3 />
                <Exercise4 />
                <Benifits4 />
                <Muscle4 />
            </div>
        );
    }
}

export default MuscleBuilding;