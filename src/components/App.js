import React from 'react';
import { connect } from 'react-redux';

import ChoseColor from './ColorPicker/ChoseColor';
import MyToast from './Toast/toast';
import { closeModal } from '../actions';

class App extends React.Component {
    closeToast = (id) => {
        this.props.closeModal(id);
    };

    renderToasts = (toasts) => {
        return toasts.map(toast => {
           return (
               <MyToast
                   key={toast.id}
                   toast={toast}
                   onClose={this.closeToast}
               />
           );
        })
    };

    render() {
        return (
            <div>
                <div style={{ position: 'fixed', top: 0, right: 0, zIndex: 10 }}>
                    {this.renderToasts(this.props.toasts)}
                </div>
                <ChoseColor />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        toasts: state.toasts
    }
};

export default connect(mapStateToProps, {
    closeModal
})(App);
