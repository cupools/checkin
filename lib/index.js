'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _lodash = require('lodash.merge');

var _lodash2 = _interopRequireDefault(_lodash);

var _detect = require('./detect');

var _detect2 = _interopRequireDefault(_detect);

var _index = require('./rule/index');

var defaultRule = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line prefer-const
var extendRule = {};

/**
 * go through all rules
 * @param  {Detect} detect detect instance
 * @param  {Object} suit   rule suit
 * @param  {Object} obj    obj to be checkin
 * @return {Object}        obj that has been checkined
 */
function process(detect, suits, obj) {
  return (0, _keys2.default)(suits).reduce(function (ret, key) {
    var suit = suits[key];
    return (0, _extends4.default)({}, ret, (0, _defineProperty3.default)({}, key, detect.detect(key, suit, obj[key])));
  }, obj);
}

/**
 * checkin given option
 * @param  {Object} obj  option to be checkin
 * @param  {Object} suit rule suit
 * @return {Object}      option that has been checkined
 */
function checkin(obj, suit) {
  var combine = (0, _extends4.default)({}, defaultRule, extendRule);
  var detect = (0, _keys2.default)(combine).reduce(function (ret, key) {
    return ret.addRule(key, combine[key]);
  }, _detect2.default);

  return process(detect, suit, obj);
}

checkin.wrap = function wrap(extend) {
  return function (obj, suit) {
    return checkin(obj, (0, _lodash2.default)(extend, suit));
  };
};

exports.default = checkin;