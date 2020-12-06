import React, { Component } from 'react';
import '../../styles/styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        };

        this.onTextChangeSignInEmail = this.onTextChangeSignInEmail.bind(this);
        this.onTextChangeSignInPassword = this.onTextChangeSignInPassword.bind(this);
    }

    onTextChangeSignInEmail(event) {
        this.setState({
            signInEmail: event.target.value
        });
    }

    onTextChangeSignInPassword(event) {
        this.setState({
            signInPassword: event.target.value
        });
    }

    render() {
        const style_bg = {
            "position": "relative",
            "width": "420px",
            "height": "358px",
            "background": "linear-gradient(235.22deg, #1D7D26 0.45%, #25AA31 53.71%, #1D7D26 100%)",
            "boxShadow": "0px 4px 4px rgba(0, 0, 0, 0.25)"
        };

        const style_heading = {
            "position": "relative",
            "width": "122px",
            "height": "52.5px",
            "left": "147px",
            "top": "22px",
            "fontFamily": "Poppins",
            "fontStyle": "normal",
            "fontWeight": "bolder",
            "fontSize": "35px",
            "lineHeight": "53px",
            "color": "#FFFFFF"
        };

        const style_prompt_1 = {
            "position": "relative",
            "left": "35px",
            "top": "31px",
            "fontFamily": "Poppins",
            "fontStyle": "normal",
            "fontWeight": "420",
            "fontSize": "22px",
            "lineHeight": "30px",
            "color": "#FFFFFF"
        };

        const style_input_1 = {
            "position": "relative",
            "width": "350px",
            "height": "42px",
            "left": "35px",
            "top": "31px",
            "background": "#F7F7F7",
            "border": "1px solid #000000",
            "boxSizing": "border-box",
            "fontSize": "20px",
            "fontFamily": "Poppins",
            "fontStyle": "normal",
            "padding": "10px",
            "color": "#434343",

        };

        const style_prompt_2 = {
            "position": "relative",
            "left": "35px",
            "top": "58px",
            "fontFamily": "Poppins",
            "fontStyle": "normal",
            "fontWeight": "420",
            "fontSize": "22px",
            "lineHeight": "30px",
            "color": "#FFFFFF"
        };

        const style_input_2 = {
            "position": "relative",
            "width": "350px",
            "height": "42px",
            "left": "35px",
            "top": "58px",
            "background": "#F7F7F7",
            "border": "1px solid #000000",
            "boxSizing": "border-box",
            "margin": "0px",
            "fontSize": "20px",
            "fontFamily": "Poppins",
            "fontStyle": "normal",
            "padding": "10px",
            "color": "#434343"
        };

        const style_button = {
            "position": "relative",
            "width": "91px",
            "height": "42px",
            "left": "166px",
            "top": "83px",
            "justifyContent": "center",
            "alignItems": "center",
            "background": "#00390D",
            "borderStyle": "solid",
            "borderColor": "#00390D"
        };

        const style_button_text = {
            "position": "absolute",
            "left": "50%",
            "top": "50%",
            "transform": "translate(-50%, -50%)",
            "fontFamily": "Poppins",
            "fontStyle": "normal",
            "fontWeight": "480",
            "fontSize": "23px",
            "lineHeight": "35px",
            "display": "flex",
            "alignItems": "center",
            "color": "#FFFFFF"
        };

        return (
            <div style={{
                "float": "left",
                "position": "relative",
                "top": "170px",
                "left": "290px"
            }}>
                <div style={style_bg}>
                    <p style={style_heading}>Sign In</p>
                    <p style={style_prompt_1}>Email:</p>
                    <input
                        style={style_input_1}
                        type="email"
                        // placeholder="Enter Email"
                        name="email"
                        required
                        className="input_box"
                        value={this.state.signInEmail}
                        onChange={this.onTextChangeSignInEmail}
                    />

                    <p style={style_prompt_2}>Password:</p>
                    <input
                        style={style_input_2}
                        type="password"
                        // placeholder="Enter Password"
                        name="password"
                        required
                        className="input_box"
                        value={this.state.signInPassword}
                        onChange={this.onTextChangeSignInPassword}
                    />
                    <button
                        className="loginbutton"
                        onClick={() => this.props.onSignIn(this.state.signInEmail, this.state.signInPassword)}
                        style={style_button}>
                        <p style={style_button_text}>Login</p>
                    </button>
                </div>
                {
                    (this.props.signInError) ? (
                        <p className="loginerror">{this.props.signInError}</p>
                    ) : (null)
                }
            </div>
        );
    }
}

export default SignIn;