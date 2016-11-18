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

var extendRule = {};

/**
 * go through all rules
 * @param  {Detect} detect detect instance
 * @param  {Object} suit   rule suit
 * @param  {Object} obj    key:value to be proof
 * @return {Object}        key:value that has bee proofed
 */
function process(detect, suit, obj) {
  return (0, _keys2.default)(suit).reduce(function (ret, key) {
    var rules = suit[key];
    var target = obj[key];
    return (0, _extends4.default)({}, ret, (0, _defineProperty3.default)({}, key, detect.detect(rules, target)));
  }, obj);
}

/**
 * proof given option
 * @param  {Object} obj  option to be proof
 * @param  {Object} suit rule suit
 * @return {Object}      option that has been proofed
 */
function proof(obj, suit) {
  var combine = (0, _extends4.default)({}, defaultRule, extendRule);
  var detect = (0, _keys2.default)(combine).reduce(function (ret, key) {
    return ret.addRule(key, combine[key]);
  }, _detect2.default);

  return process(detect, suit, obj);
}

proof.addRule = function (name, assert) {
  extendRule[name] = assert;
  return proof;
};

proof.peace = function () {
  try {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return proof.apply(null, args);
  } catch (e) {
    return (0, _extends4.default)({}, e, {
      isError: true
    });
  }
};

proof.wrap = function (extend) {
  return function (obj, suit) {
    return proof(obj, (0, _lodash2.default)(extend, suit));
  };
};

exports.default = proof;