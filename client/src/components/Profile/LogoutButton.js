import React, { Component } from 'react';
import '../../styles/styles.scss';

class LogoutButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style_button = {
            "width": "91px",
            "height": "42px",
            "justifyContent": "center",
            "alignItems": "center",
            "background": "#00390D",
            "borderStyle": "solid",
            "borderColor": "#00390D"
        };

        const style_button_text = {
            "fontFamily": "Poppins",
            "fontStyle": "normal",
            "fontWeight": "480",
            "fontSize": "20px",
            "color": "#FFFFFF"
        };

        return (
            <div style={{ "textAlign": "center" }}>
                <button
                    id="logoutbutton"
                    onClick={() => this.props.logout()}
                    style={style_button}>
                    <p style={style_button_text}>Logout</p>
                </button>
            </div>
        );
    }
}

export default LogoutButton;

