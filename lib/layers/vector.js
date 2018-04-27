'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Method = require('../Method');

var _mapContext = require('../mapContext');

var _mapContext2 = _interopRequireDefault(_mapContext);

var _vector = require('ol/layer/vector');

var _vector2 = _interopRequireDefault(_vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Vector = function (_React$Component) {
	_inherits(Vector, _React$Component);

	function Vector(props) {
		_classCallCheck(this, Vector);

		var _this = _possibleConstructorReturn(this, (Vector.__proto__ || Object.getPrototypeOf(Vector)).call(this, props));

		_this.layer;
		_this.options = {
			renderMode: undefined,
			renderOrder: undefined,
			map: undefined,
			extent: undefined,
			minResolution: undefined,
			maxResolution: undefined,
			opacity: undefined,
			renderBuffer: undefined,
			source: undefined,
			declutter: undefined,
			style: undefined,
			updateWhileAnimating: undefined,
			updateWhileInteracting: undefined,
			visible: undefined,
			zIndex: undefined
		};
		_this.events = {
			'change': undefined,
			'change:extent': undefined,
			'change:maxResolution': undefined,
			'change:minResolution': undefined,
			'change:opacity': undefined,
			'change:preload': undefined,
			'change:source': undefined,
			'change:visible': undefined,
			'change:zIndex': undefined,
			'postcompose': undefined,
			'precompose': undefined,
			'propertychange': undefined,
			'render': undefined
		};
		return _this;
	}

	_createClass(Vector, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.layer != undefined) this.props.mapComponent.map.removeLayer(this.layer);
			var options = _Method.Method.getOptions(Object.assign(this.options, this.props));

			this.layer = new _vector2.default(options);
			if (this.props.zIndex) {
				this.layer.setZIndex(this.props.zIndex);
			}
			this.props.mapComponent.map.addLayer(this.layer);

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

	return Vector;
}(React.Component);

exports.default = function (props) {
	return _jsx(_mapContext2.default.Consumer, {}, void 0, function (mapComponent) {
		return React.createElement(Vector, _extends({}, props, { mapComponent: mapComponent }));
	});
};