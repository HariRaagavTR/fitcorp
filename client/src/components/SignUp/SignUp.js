import React, { Component } from 'react';
import '../../styles/styles.scss';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signUpEmail: '',
            signUpPassword: '',
            signUpAge: 18,
            signUpFirstName: '',
            signUpLastName: ''
        };
        this.onTextChangeSignUpEmail = this.onTextChangeSignUpEmail.bind(this);
        this.onTextChangeSignUpPassword = this.onTextChangeSignUpPassword.bind(this);
        this.onTextChangeSignUpAge = this.onTextChangeSignUpAge.bind(this);
        this.onTextChangeSignUpFirstName = this.onTextChangeSignUpFirstName.bind(this);
        this.onTextChangeSignUpLastName = this.onTextChangeSignUpLastName.bind(this);
    }

    onTextChangeSignUpEmail(event) {
        this.setState({
            signUpEmail: event.target.value
        });
    }

    onTextChangeSignUpPassword(event) {
        this.setState({
            signUpPassword: event.target.value
        });
    }

    onTextChangeSignUpAge(event) {
        this.setState({
            signUpAge: event.target.value
        });
    }

    onTextChangeSignUpFirstName(event) {
        this.setState({
            signUpFirstName: event.target.value
        });
    }

    onTextChangeSignUpLastName(event) {
        this.setState({
            signUpLastName: event.target.value
        });
    }

    render() {
        const style_bg = {
            "position": "relative",
            "width": "420px",
            "height": "640px",
            "background": "#FFFFFF",
            "boxShadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
            "display": "inline-block"
        };

        const style_heading = {
            "position": "relative",
            "left": "147px",
            "top": "22px",
            "fontFamily": "Poppins",
            "fontStyle": "normal",
            "fontWeight": "bold",
            "fontSize": "35px",
            "lineHeight": "53px",
            "display": "flex",
            "alignItems": "center",
            "color": "#000000"
        };

        const style_prompt_1 = {
            "position": "relative",
            "left": "35px",
            "top": "31px",
            "fontFamily": "Poppins",
            "fontStyle": "normal",
            "fontWeight": "600",
            "fontSize": "20px",
            "lineHeight": "30px",
            "color": "#000000"
        };

        const style_prompt_2 = {
            "position": "relative",
            "left": "35px",
            "top": "58px",
            "fontFamily": "Poppins",
            "fontStyle": "normal",
            "fontWeight": "600",
            "fontSize": "20px",
            "lineHeight": "30px",
            "color": "#000000"
        };

        const style_prompt_3 = {
            "position": "relative",
            "left": "35px",
            "top": "85px",
            "fontFamily": "Poppins",
            "fontStyle": "normal",
            "fontWeight": "600",
            "fontSize": "20px",
            "lineHeight": "30px",
            "color": "#000000"
        };

        const style_prompt_4 = {
            "position": "relative",
            "left": "35px",
            "top": "112px",
            "fontFamily": "Poppins",
            "fontStyle": "normal",
            "fontWeight": "600",
            "fontSize": "20px",
            "lineHeight": "30px",
            "color": "#000000"
        };

        const style_prompt_5 = {
            "position": "relative",
            "left": "35px",
            "top": "139px",
            "fontFamily": "Poppins",
            "fontStyle": "normal",
            "fontWeight": "600",
            "fontSize": "20px",
            "lineHeight": "30px",
            "color": "#000000"
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
            "color": "#434343"
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
            "fontSize": "20px",
            "fontFamily": "Poppins",
            "fontStyle": "normal",
            "padding": "10px",
            "color": "#434343"
        };

        const style_input_3 = {
            "position": "relative",
            "width": "350px",
            "height": "42px",
            "left": "35px",
            "top": "85px",
            "background": "#F7F7F7",
            "border": "1px solid #000000",
            "boxSizing": "border-box",
            "fontSize": "20px",
            "fontFamily": "Poppins",
            "fontStyle": "normal",
            "padding": "10px",
            "color": "#434343"
        };

        const style_input_4 = {
            "position": "relative",
            "width": "350px",
            "height": "42px",
            "left": "35px",
            "top": "112px",
            "background": "#F7F7F7",
            "border": "1px solid #000000",
            "boxSizing": "border-box",
            "fontSize": "20px",
            "fontFamily": "Poppins",
            "fontStyle": "normal",
            "padding": "10px",
            "color": "#434343"
        };

        const style_input_5 = {
            "position": "relative",
            "width": "350px",
            "height": "42px",
            "left": "35px",
            "top": "139px",
            "background": "#F7F7F7",
            "border": "1px solid #000000",
            "boxSizing": "border-box",
            "fontSize": "20px",
            "fontFamily": "Poppins",
            "fontStyle": "normal",
            "padding": "10px",
            "color": "#434343"
        };

        const style_button = {
            "position": "relative",
            "width": "230px",
            "height": "42px",
            "left": "95px",
            "top": "168px",
            "background": "#D1D1D1",
            "borderStyle": "solid",
            "borderColor": "#D1D1D1",
        };

        const style_button_text = {
            "position": "relative",
            "width": "200px",
            "left": "30px",
            "fontFamily": "Poppins",
            "fontStyle": "normal",
            "fontWeight": "600",
            "fontSize": "21px",
            "lineHeight": "35px",
            "display": "flex",
            "alignItems": "center",
            "color": "#000000"
        };

        return (
            <div style={{
                "float": "left",
                "position": "relative",
                "top": "30px",
                "left": "390px"
            }}>
                <div style={style_bg}>
                    <p style={style_heading}>Sign Up</p>
                    <p style={style_prompt_1}><b>Email:</b></p>
                    <input
                        style={style_input_1}
                        type="email"
                        // placeholder="Email"
                        name="email"
                        required
                        className="input_box"
                        value={this.state.signUpEmail}
                        onChange={this.onTextChangeSignUpEmail}
                    />

                    <p style={style_prompt_2}><b>Password:</b></p>
                    <input
                        style={style_input_2}
                        type="password"
                        // placeholder="Last Name"
                        name="password"
                        required
                        className="input_box"
                        value={this.state.signUpPassword}
                        onChange={this.onTextChangeSignUpPassword}
                    />

                    <p style={style_prompt_3}><b>First Name:</b></p>
                    <input
                        style={style_input_3}
                        type="text"
                        // placeholder="First Name"
                        name="firstName"
                        required
                        className="input_box"
                        value={this.state.signUpFirstName}
                        onChange={this.onTextChangeSignUpFirstName}
                    />

                    <p style={style_prompt_4}><b>Last Name:</b></p>
                    <input
                        style={style_input_4}
                        type="text"
                        // placeholder="Last Name"
                        name="lastName"
                        required
                        className="input_box"
                        value={this.state.signUpLastName}
                        onChange={this.onTextChangeSignUpLastName}
                    />

                    <p style={style_prompt_5}><b>Age:</b></p>
                    <input
                        style={style_input_5}
                        type="number"
                        // placeholder="Age"
                        name="age"
                        required
                        className="input_box"
                        value={this.state.signUpAge}
                        onChange={this.onTextChangeSignUpAge}
                    />

                    <button
                        style={style_button}
                        className="loginbutton"
                        onClick={() => this.props.onSignUp(this.state.signUpEmail,
                            this.state.signUpPassword,
                            this.state.signUpFirstName,
                            this.state.signUpLastName,
                            this.state.signUpAge)
                        }>
                        <p style={style_button_text}>Create Account</p>
                    </button>
                </div>
                {
                    (this.props.signUpError) ? (
                        <p className="loginerror">{this.props.signUpError}</p>
                    ) : (null)
                }
            </div>
        );
    }
}

export default SignUp;