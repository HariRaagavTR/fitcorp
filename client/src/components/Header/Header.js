import React, { Component } from 'react';
import '../../styles/styles.scss';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style_header = {
            "height": "80px",
            "width": "100%",
            "margin": "0px", 
            "padding": "0px"
        };

        const style_header_bg = {
            "position": "absolute",
            "width": "100%",
            "height": "80px",
            "left": "0px",
            "top": "0px",
            "background": "#1D7D26",
            "margin": "0px", 
            "padding": "0px"
        }

        const style_header_name = {
            "position": "absolute",
            "left": "28px",
            "top": "15px",
            "fontFamily": "Poppins",
            "fontStyle": "bold",
            "fontSize": "33px",
            "fontWeight": "800",
            "lineHeight": "49px",
            "alignItems": "center",
            "color": "#FFFFFF",
            "margin": "0px", 
            "padding": "0px"
        }

        return (
            <div style={style_header}>
                <div style={style_header_bg}>
                    <p style={style_header_name}>FitCorp Gymnasium</p>
                </div>
            </div>
        );
    }
}

export default Header;