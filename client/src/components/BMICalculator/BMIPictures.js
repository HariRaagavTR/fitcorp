import React, { Component } from 'react';
import '../../styles/styles.scss';

class BMIPictures extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    (this.props.category === 'underweight') ? (
                        <div style={{float: 'left'}} id="underweight">
                            <img alt='' src={process.env.PUBLIC_URL + "/resources/underweight_selected.png"} />
                            <p className="label" id="under_text">Underweight</p>
                        </div>
                    ) : (
                            <div style={{float: 'left'}} id="underweight">
                                <img alt='' src={process.env.PUBLIC_URL + "/resources/underweight.png"} />
                                <p className="label" id="under_text">Underweight</p>
                            </div>
                        )
                }
                {
                    (this.props.category === 'fit') ? (
                        <div style={{float: 'left'}} id="fit">
                            <img alt='' src={process.env.PUBLIC_URL + "/resources/fit_selected.png"} />
                            <p className="label" id="fit_text">Fit</p>
                        </div>
                    ) : (
                            <div style={{float: 'left'}} id="fit">
                                <img alt='' src={process.env.PUBLIC_URL + "/resources/fit.png"} />
                                <p className="label" id="fit_text">Fit</p>
                            </div>
                        )
                }
                {
                    (this.props.category === 'overweight') ? (
                        <div style={{float: 'left'}} id="overweight">
                            <img alt='' src={process.env.PUBLIC_URL + "/resources/overweight_selected.png"} />
                            <p className="label" id="over_text">Overweight</p>
                        </div>
                    ) : (
                            <div style={{float: 'left'}} id="overweight">
                                <img alt='' src={process.env.PUBLIC_URL + "/resources/overweight.png"} />
                                <p className="label" id="over_text">Overweight</p>
                            </div>
                        )
                }
            </div>
        );
    }
}

export default BMIPictures;