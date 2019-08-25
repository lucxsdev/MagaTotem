import React, { Component } from 'react';
import QRCode from 'react-qr-code';
import './Qrcode.css'



class Qrcode extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ""
        } 
    }
    
    getinput(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div className="form-wrapper">
                <p>QR CODE GENERATOR</p>
                <div className="wrapper">
                    <input disabled
                        type="text"
                        value={this.state.value}
                        onChange={this.getinput.bind(this)} />
                </div>
                <div className="qrcode">
                    <QRCode
                        value={this.state.value} />
                </div>
                <div class="btn_imprimir">
                    <button type="button">IMPRIMIR</button>
                </div>
            </div>
        );
    }
}

export default Qrcode