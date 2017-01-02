'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _assertionError = require('assertion-error');

var _assertionError2 = _interopRequireDefault(_assertionError);

var _shouldFormat = require('should-format');

var _shouldFormat2 = _interopRequireDefault(_shouldFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Rule = function () {
  function Rule(params) {
    (0, _classCallCheck3.default)(this, Rule);

    this.params = (0, _extends3.default)({
      key: '',
      val: undefined,
      expected: undefined,
      operate: '',
      showDiff: false
    }, params);
  }

  (0, _createClass3.default)(Rule, [{
    key: 'assert',
    value: function assert(expr) {
      if (expr) {
        return;
      }
      throw generateError(this.params);
    }
  }]);
  return Rule;
}();

exports.default = Rule;


function generateError(params) {
  var key = params.key,
      val = params.val,
      expected = params.expected,
      operate = params.operate,
      showDiff = params.showDiff;

  var expectedMsg = expected !== undefined ? ' ' + (0, _shouldFormat2.default)(expected) : '';
  var diffMsg = showDiff ? ' but get ' + (0, _shouldFormat2.default)(val) : '';
  var message = 'expected ' + key + ' to ' + operate + expectedMsg + diffMsg;
  return new _assertionError2.default(message);
}