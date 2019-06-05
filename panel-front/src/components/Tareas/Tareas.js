import React, { Component } from 'react';
import { Toast } from 'react-bootstrap';

class Tareas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showA: true
        };
    }

    render() {
        const { showA } = this.state;
        const toggleShowA = () => this.setState({ showA: !showA });

        let tarjetas = (
            <Toast show={showA} onClose={toggleShowA}>
                <Toast.Header>
                    <strong className="mr-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>
                    Woohoo, you're reading this text in a Toast!
              </Toast.Body>
            </Toast>
        );
        return (
            <div>
                {tarjetas}
            </div>
        );
    }
}

export default Tareas;