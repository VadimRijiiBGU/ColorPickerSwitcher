import React from 'react';
import { connect } from 'react-redux';

import { Toast } from 'react-bootstrap';
import { closeModal } from '../../actions';
import './index.css';

class MyToast extends React.Component {
    onCloseModal = () => {
        this.props.closeModal();
    };

    render() {
        return (
            <Toast
                style={{ position: 'absolute', top: 0, right: 0 }}
                onClose={this.onCloseModal}
                show={this.props.modal.isShown}
                autohide
                delay={3000}
            >
                <Toast.Header className="toast-header">
                    <span className="mr-2">&#9888;</span>
                    <strong className="mr-auto">Warning!</strong>
                </Toast.Header>
                <Toast.Body className="toast-body">
                    <div >
                        {this.props.modal.text}
                    </div>
                </Toast.Body>
            </Toast>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modal: state.modal
    };
};

export default connect(mapStateToProps, {
    closeModal
})(MyToast);
