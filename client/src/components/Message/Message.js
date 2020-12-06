import React, { Component } from 'react';
import '../../styles/styles.scss';

class Message extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style_message = {
            "fontSize": "20px",
            "fontFamily": "Poppins",
            "fontStyle": "normal",
        }

        const styles_container = {
            "width": "100%",
            "height": "400px",
            "textAlign": "center",
            "verticalAlign": "middle",
            "lineHeight": "400px"   
        }

        return (
            <div style={styles_container}>
                <p style={style_message}>{this.props.message}</p>
            </div>
        );
    }
}

export default Message;