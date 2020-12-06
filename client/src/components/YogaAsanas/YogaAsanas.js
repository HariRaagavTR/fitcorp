import React, { Component } from 'react';
import './yoga.css';

class AsanaName1 extends Component {
    render() {
        return (
            <div>
                <p id='name1'>Dhanurasana</p>
            </div>
        );
    }
}

class AsanaName2 extends Component {
    render() {
        return (
            <div>
                <p id='name2'>Padmasana</p>
            </div>
        );
    }
}

class AsanaName3 extends Component {
    render() {
        return (
            <div>
                <p id='name3'>Garudasana</p>
            </div>
        );
    }
}

class AsanaName4 extends Component {
    render() {
        return (
            <div>
                <p id='name4'>Chakrasana</p>
            </div>
        );
    }
}

class Health1 extends Component {
    render() {
        return (
            <div>
                <ol id='health1'>
                    <li>Great way to release stress</li>
                    <li>Maximum stretch on the abdomen</li>
                    <li>Gives toned shape</li>
                    <li>Shed and burn belly fat fast</li>
                </ol>
            </div>
        );
    }
}

class Health2 extends Component {
    render() {
        return (
            <div>
                <ol id='health2'>
                    <li>Stretches the ankles and knees</li>
                    <li>Calms the brain</li>
                    <li>Keeps spine straight</li>
                    <li>Eases menstrual discomfort</li>
                </ol>
            </div>
        );
    }
}

class Health3 extends Component {
    render() {
        return (
            <div>
                <ol id='health3'>
                    <li>Enhances sense of balance</li>
                    <li>Strengthens muscles of legs</li>
                    <li>Improves concentraction</li>
                    <li>Stretches shoulders and upper back</li>
                </ol>
            </div>
        );
    }
}

class Health4 extends Component {
    render() {
        return (
            <div>
                < ol id='health4'>
                    <li>Sharpens eyesight</li>
                    <li>Reduces stress and tension</li>
                    <li>Benificial for asthama patients</li>
                    <li>Increases elasticity</li>
                </ol>
            </div>
        );
    }
}


class Yoga1 extends Component {
    render() {
        return (
            <div id="image1">
                <img src={process.env.PUBLIC_URL + "/resources/yoga1.png"} height='250' width='420'/>
            </div>
        );
    }
}

class Yoga2 extends Component {
    render() {
        return (
            <div id="image2">
                <img src={process.env.PUBLIC_URL + "/resources/yoga2.png"} height='250' />
            </div>
        );
    }
}

class Yoga3 extends Component {
    render() {
        return (
            <div id="image3">
                <img src={process.env.PUBLIC_URL + "/resources/yoga3.png"} height='300' />
            </div>
        );
    }
}

class Yoga4 extends Component {
    render() {
        return (
            <div id="image4">
                <img src={process.env.PUBLIC_URL + "/resources/yoga4.png"} height='250' />
            </div>
        );
    }
}

class YogaAsanas extends Component {
    render() {
        return (
            <div style={{ "height": "1500px" }}>
                <AsanaName1 />
                <Health1 />
                <Yoga1 />
                <AsanaName2 />
                <Health2 />
                <Yoga2 />
                <AsanaName3 />
                <Health3 />
                <Yoga3 />
                <AsanaName4 />
                <Health4 />
                <Yoga4 />
            </div>
        );
    }
}

export default YogaAsanas;