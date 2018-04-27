'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getPropsKey(eventName) {
  return 'on' + eventName.replace(/(\:[a-z])/g, function ($1) {
    return $1.toUpperCase();
  }).replace(/^[a-z]/, function ($1) {
    return $1.toUpperCase();
  }).replace(':', '');
}

var Method = exports.Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, null, [{
    key: 'getOptions',
    value: function getOptions(props) {
      var options = {};
      for (var key in props) {
        if (key !== 'children' && typeof props[key] !== 'undefined' //exclude undefined ones
        && !key.match(/^on[A-Z]/) //exclude events
        ) {
            options[key] = props[key];
          }
      }
      return options;
    }
  }, {
    key: 'getEvents',
    value: function getEvents(events, props) {
      var prop2EventMap = {};
      for (var key in events) {
        prop2EventMap[getPropsKey(key)] = key;
      }

      var ret = {};
      for (var propName in props) {
        var eventName = prop2EventMap[propName];
        var prop = props[propName];
        if (typeof prop !== 'undefined' && propName.match(/^on[A-Z]/) && eventName) {
          ret[eventName] = prop;
        }
      }

      return ret;
    }
  }]);

  return Method;
}();