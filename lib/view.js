'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _mapContext = require('./mapContext');

var _mapContext2 = _interopRequireDefault(_mapContext);

var _Method = require('./Method');

var _view = require('ol/view');

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var View = function (_React$Component) {
	_inherits(View, _React$Component);

	function View(props) {
		_classCallCheck(this, View);

		var _this = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this, props));

		_this.options = {
			center: undefined,
			constrainRotation: undefined,
			enableRotation: undefined,
			extent: undefined,
			maxResolution: undefined,
			minResolution: undefined,
			maxZoom: undefined,
			minZoom: undefined,
			projection: undefined,
			resolution: undefined,
			resolutions: undefined,
			rotation: undefined,
			zoom: undefined,
			zoomFactor: undefined
		};
		_this.evets = {
			"change": undefined,
			"change:center": undefined,
			"change:resolution": undefined,
			"change:rotation": undefined,
			"propertychange": undefined
		};
		return _this;
	}

	_createClass(View, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var options = _Method.Method.getOptions(Object.assign(this.options, this.props));
			this.view = new _view2.default(options);
			this.props.mapComponent.map.setView(this.view);

			var olEvents = _Method.Method.getEvents(this.events, this.props);
			for (var eventName in olEvents) {
				this.layer.on(eventName, olEvents[eventName]);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);

	return View;
}(React.Component);

exports.default = function (props) {
	return _jsx(_mapContext2.default.Consumer, {}, void 0, function (mapComponent) {
		return React.createElement(View, _extends({}, props, { mapComponent: mapComponent }));
	});
};