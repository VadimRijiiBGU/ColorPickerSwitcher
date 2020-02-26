import React from 'react';

import { Toast } from 'react-bootstrap';
import './index.css';

class MyToast extends React.Component {
     render() {
        return (
            <Toast
                onClose={() => this.props.onClose(this.props.toast.id)}
                autohide
                delay={1000}
                animation={true}
            >
                <Toast.Header className="toast-header">
                    <span className="mr-2">&#9888;</span>
                    <strong className="mr-auto">Warning!</strong>
                </Toast.Header>
                <Toast.Body className="toast-body">
                    <div >
                        {this.props.toast.text}
                    </div>
                </Toast.Body>
            </Toast>
        );
    }
}

export default MyToast;
