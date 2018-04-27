'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.View = exports.Layer = exports.Layers = exports.Map = undefined;

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

var _index = require('./layers/index');

var _view = require('./view');

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ol = {
	Map: _map2.default,
	Layers: _index.Layers,
	Layer: _index.Layer,
	View: _view2.default
};

exports.Map = _map2.default;
exports.Layers = _index.Layers;
exports.Layer = _index.Layer;
exports.View = _view2.default;