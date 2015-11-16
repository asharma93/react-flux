'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HelloText = require('./HelloText');

var _HelloText2 = _interopRequireDefault(_HelloText);

require('backbone');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Import React and HelloText class

// Create class called HelloBox that extends the base React Component class

var HelloBox = (function (_React$Component) {
    _inherits(HelloBox, _React$Component);

    function HelloBox() {
        _classCallCheck(this, HelloBox);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(HelloBox).call(this));
    }

    _createClass(HelloBox, [{
        key: 'render',
        value: function render() {
            var x = new Backbone.Model();
            console.log(x);
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_HelloText2.default, { name: 'Amit' })
            );
        }
    }]);

    return HelloBox;
})(_react2.default.Component);

exports.default = HelloBox;
