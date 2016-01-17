import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            reservees: [
                'slot 1',
                'slot 2'
            ]
        };
    }

    render() {
        var reservees = this.state.reservees.map((reservee) => {
            return (
                <div>{reservee}</div>
            );
        });

        return (
            <div>{reservees}</div>
        );
    }
}

export default App;
