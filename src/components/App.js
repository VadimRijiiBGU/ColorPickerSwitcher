import React from 'react';
import ChoseColor from './ColorPicker/ChoseColor';
import MyToast from './Toast/toast';

class App extends React.Component {
    render() {
        return (
            <div>
                <MyToast />
                <ChoseColor />
            </div>
        );
    }
}

export default App;
