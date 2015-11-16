// Import CSS
import '../scss/master.scss';
import 'bootstrap-webpack';
// Import React and JS
import HelloBox from './HelloBox';
import React from 'react';

// Render!
React.render(<HelloBox />, document.getElementsByTagName('body')[0]);
