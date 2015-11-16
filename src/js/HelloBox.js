// Import React and HelloText class
import React from 'react';
import HelloText from './HelloText';
import 'backbone';

// Create class called HelloBox that extends the base React Component class
class HelloBox extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div>
            <HelloText name="Amit" />
            <button type="button" className="btn btn-danger">Danger</button>
        </div>
    }
}

export default HelloBox;