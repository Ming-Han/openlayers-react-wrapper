'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _mapContext = require('./mapContext');

var _mapContext2 = _interopRequireDefault(_mapContext);

var _osm = require('ol/source/osm');

var _osm2 = _interopRequireDefault(_osm);

var _Tile = require('ol/layer/Tile');

var _Tile2 = _interopRequireDefault(_Tile);

var _Map = require('./Map.css');

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Map = function (_React$Component) {
	_inherits(Map, _React$Component);

	function Map(props) {
		_classCallCheck(this, Map);

		var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));

		_this.mapDiv;
		_this.map = {};
		_this.option;
		return _this;
	}

	_createClass(Map, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.map.setTarget(this.mapDiv);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			this.map = new ol_map(this.options);
			var mapComponent = {
				component: this,
				map: this.map
			};
			return _jsx('div', {}, void 0, React.createElement(
				'div',
				{ className: _Map2.default["openlayers-map"], ref: function ref(el) {
						_this2.mapDiv = el;
					} },
				_jsx(_mapContext2.default.Provider, {
					value: mapComponent
				}, void 0, this.props.children)
			));
		}
	}]);

	return Map;
}(React.Component);

exports.default = Map;