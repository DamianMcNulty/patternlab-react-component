'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactToJsx = require('react-to-jsx');

var _reactToJsx2 = _interopRequireDefault(_reactToJsx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PatternLabComponent = function (_React$PureComponent) {
    _inherits(PatternLabComponent, _React$PureComponent);

    function PatternLabComponent() {
        _classCallCheck(this, PatternLabComponent);

        return _possibleConstructorReturn(this, (PatternLabComponent.__proto__ || Object.getPrototypeOf(PatternLabComponent)).apply(this, arguments));
    }

    _createClass(PatternLabComponent, [{
        key: '_getProps',
        value: function _getProps() {
            return _extends({}, this.props, this.constructor.defaultProps);
        }
    }, {
        key: '_setFakeProps',
        value: function _setFakeProps() {
            this.props = _extends({}, this.props, this.constructor.fakeProps);
        }
    }, {
        key: 'getHtml',
        value: function getHtml() {
            this.props = this._getProps();
            var markup = this.render();
            if (!markup) {
                this._setFakeProps();
                markup = this.render();
            }
            return markup ? (0, _server.renderToStaticMarkup)(markup) : "N/A"; // TODO: fill props using proptypes array?
        }
    }, {
        key: 'getJsx',
        value: function getJsx() {
            this.props = this._getProps();
            var markup = this.render();
            if (!markup) {
                this._setFakeProps();
                markup = this.render();
            }
            return markup ? (0, _reactToJsx2.default)(markup) : "N/A"; // TODO: fill props using proptypes array?
        }
    }, {
        key: 'getDefProps',
        value: function getDefProps() {
            return this.constructor.defaultProps;
        }
    }, {
        key: 'getPropTypes',
        value: function getPropTypes() {
            var propTypes = this.constructor.propTypes;
            if (!propTypes) return;
            var descPropTypes = this.constructor.describePropTypes;

            var returnPropTypes = {};
            Object.keys(propTypes).forEach(function (propKey) {

                var propTypeDescription = {
                    type: 'unknown',
                    isRequired: 'unknown'
                };

                if (descPropTypes && descPropTypes[propKey]) {
                    // Get manually set description
                    propTypeDescription = descPropTypes[propKey];
                } else {
                    // Try to calculate description
                    var propType = Object.keys(_react2.default.PropTypes).find(function (propTypeKey) {
                        return _react2.default.PropTypes[propTypeKey] == propTypes[propKey] || _react2.default.PropTypes[propTypeKey].isRequired == propTypes[propKey];
                    });
                    if (propType) propTypeDescription = {
                        type: propType,
                        isRequired: _react2.default.PropTypes[propType].isRequired == propTypes[propKey]
                    };
                }

                // Add description to return object
                returnPropTypes[propKey] = propTypeDescription;
            });
            return returnPropTypes;
        }
    }], [{
        key: 'getDescription',
        value: function getDescription() {
            return "[Insert description here]";
        }
    }, {
        key: 'getTitle',
        value: function getTitle() {
            return this.name;
        }
    }, {
        key: 'getAnnotations',
        value: function getAnnotations() {
            return;
        }
    }]);

    return PatternLabComponent;
}(_react2.default.PureComponent);

PatternLabComponent.describePropTypes = {};
PatternLabComponent.fakeProps = {};

exports.default = PatternLabComponent;