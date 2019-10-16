/*!
 * mylib 0.1.0 (https://github.com/wangdonghai/mylib)
 * API https://github.com/wangdonghai/mylib/blob/master/doc/api.md
 * Copyright 2017-2019 wangdonghai. All Rights Reserved
 * Licensed under MIT (https://github.com/wangdonghai/mylib/blob/master/LICENSE)
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.mylib = {})));
}(this, (function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  var yan = 'yan';
  var yan2 = 'yan2';

  var A =
  /*#__PURE__*/
  function () {
    function A() {
      _classCallCheck(this, A);
    }

    _createClass(A, [{
      key: "aaa",
      value: function aaa() {}
    }]);

    return A;
  }();

  var B =
  /*#__PURE__*/
  function (_A) {
    _inherits(B, _A);

    function B() {
      _classCallCheck(this, B);

      return _possibleConstructorReturn(this, _getPrototypeOf(B).apply(this, arguments));
    }

    _createClass(B, [{
      key: "bbb",
      value: function bbb() {}
    }]);

    return B;
  }(A);

  console.log(yan);
  console.log(yan2);
  var a = 1 + 1;
  var b = a;
  console.log(a);
  console.log(b);
  var name = 'base';

  exports.name = name;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
