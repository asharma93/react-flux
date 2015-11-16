
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
        var x = new Backbone.Model();
        console.log(x);
        return <div>
            <HelloText name="Amit" />
        </div>
    }
}

export default HelloBox;
// Import React
import React from 'react';

// Create class called HelloText that extends the base React Component class
export default class HelloText extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <p>Hello, {this.props.name}!</p>
    }
}
// Import CSS
import '../scss/master.scss';

// Import React and JS
import HelloBox from './HelloBox';
import React from 'react';

// Render!
React.render(<HelloBox />, document.getElementsByTagName('body')[0]);
