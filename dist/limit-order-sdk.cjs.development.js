'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var coreSdk = require('@sushiswap/core-sdk');
var signingKey = require('@ethersproject/signing-key');
var eip712 = require('eip-712');
var bytes = require('@ethersproject/bytes');
var bignumber = require('@ethersproject/bignumber');
var contracts = require('@ethersproject/contracts');
var abi$1 = require('@ethersproject/abi');
var fetch = _interopDefault(require('isomorphic-unfetch'));
var solidity = require('@ethersproject/solidity');

var _STOP_LIMIT_ORDER_ADD, _DEFAULT_RECEIVER_ADD, _ADVANCED_RECEIVER_AD, _LIMIT_ORDER_HELPER_A, _ROUND_UP_RECEIVER_AD;
var LAMBDA_URL = 'https://limit-order-ffo5rqmjnq-uc.a.run.app';
var SOCKET_URL = 'wss://limit-order-ffo5rqmjnq-uc.a.run.app';
var STOP_LIMIT_ORDER_ADDRESS = (_STOP_LIMIT_ORDER_ADD = {}, _STOP_LIMIT_ORDER_ADD[coreSdk.ChainId.KOVAN] = '0xce9365dB1C99897f04B3923C03ba9a5f80E8DB87', _STOP_LIMIT_ORDER_ADD[coreSdk.ChainId.MATIC] = '0x1aDb3Bd86bb01797667eC382a0BC6A9854b4005f', _STOP_LIMIT_ORDER_ADD[coreSdk.ChainId.AVALANCHE] = '0xf6f9c9DB78AF5791A296c4bF34d59E0236E990E0', _STOP_LIMIT_ORDER_ADD[coreSdk.ChainId.FANTOM] = '0x0dd184Bec9e43701F76d75D5FFfE246B2DC8d4EA', _STOP_LIMIT_ORDER_ADD[coreSdk.ChainId.ETHEREUM] = '0x104734Ce12567421aC7B562e03Be2D75522cd112', _STOP_LIMIT_ORDER_ADD[coreSdk.ChainId.BSC_TESTNET] = '0x5606863e886F2D7ecfB2Dd5C569040f17E7c0697', _STOP_LIMIT_ORDER_ADD);
var DEFAULT_RECEIVER_ADDRESS = (_DEFAULT_RECEIVER_ADD = {}, _DEFAULT_RECEIVER_ADD[coreSdk.ChainId.MATIC] = '0x8C6b2e5B8028825d371E1264f57C5CcaE0fa4D65', _DEFAULT_RECEIVER_ADD[coreSdk.ChainId.AVALANCHE] = '0x042c99C84b00f11A08a07AA9752E083261083A57', _DEFAULT_RECEIVER_ADD[coreSdk.ChainId.FANTOM] = '0x7a4f6a6Ca48Bf63C53DfF622bfa8E0DbA1c7A8c6', _DEFAULT_RECEIVER_ADD[coreSdk.ChainId.ETHEREUM] = '0xf4943f2dEc7E4914067CdF4120E8A322bc8f5a36', _DEFAULT_RECEIVER_ADD[coreSdk.ChainId.BSC_TESTNET] = '0x8f287CfCDc95e020F47655D4f3b71e66D88b8d1b', _DEFAULT_RECEIVER_ADD);
var ADVANCED_RECEIVER_ADDRESS = (_ADVANCED_RECEIVER_AD = {}, _ADVANCED_RECEIVER_AD[coreSdk.ChainId.MATIC] = '0xAA6370CD78A61D4e72911268D84bF1Ea6a976b77', _ADVANCED_RECEIVER_AD[coreSdk.ChainId.AVALANCHE] = '0x50995361A1104B2E34d81771B2cf19BA55051C7c', _ADVANCED_RECEIVER_AD[coreSdk.ChainId.FANTOM] = '0x506e3ce419976E91F2ca5BDAB96Ef253Df9dAD3b', _ADVANCED_RECEIVER_AD[coreSdk.ChainId.ETHEREUM] = '0xA32e906C31093aDbe581B913e549f70fD2fD7969', _ADVANCED_RECEIVER_AD[coreSdk.ChainId.BSC_TESTNET] = '0x9Bb49044ad568600887D0fa1e3E10717185bC9bf', _ADVANCED_RECEIVER_AD);
var LIMIT_ORDER_HELPER_ADDRESS = (_LIMIT_ORDER_HELPER_A = {}, _LIMIT_ORDER_HELPER_A[coreSdk.ChainId.MATIC] = '0xe2f736B7d1f6071124CBb5FC23E93d141CD24E12', _LIMIT_ORDER_HELPER_A[coreSdk.ChainId.AVALANCHE] = '0x889ec9e19C1598358899fCA4879011686c3d4045', _LIMIT_ORDER_HELPER_A[coreSdk.ChainId.FANTOM] = '0xBf28dD7C3B863eae035eBf535B1B214070E8ddBf', _LIMIT_ORDER_HELPER_A[coreSdk.ChainId.ETHEREUM] = '0x75a5263bddD871E94188611f3563aabc833Cc005', _LIMIT_ORDER_HELPER_A[coreSdk.ChainId.BSC_TESTNET] = '0x78EE4665665b003D0ce1C367CB6d9E602cE2f936', _LIMIT_ORDER_HELPER_A);
var ROUND_UP_RECEIVER_ADDRESS = (_ROUND_UP_RECEIVER_AD = {}, _ROUND_UP_RECEIVER_AD[coreSdk.ChainId.MATIC] = '0x1C9B033F8C46C08EbE67F15924F5B9E97e36E0a7', _ROUND_UP_RECEIVER_AD);

function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  _regeneratorRuntime = function () {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) keys.push(key);

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

var types = {
  EIP712Domain: [{
    name: 'name',
    type: 'string'
  }, {
    name: 'chainId',
    type: 'uint256'
  }, {
    name: 'verifyingContract',
    type: 'address'
  }],
  LimitOrder: [{
    name: 'maker',
    type: 'address'
  }, {
    name: 'tokenIn',
    type: 'address'
  }, {
    name: 'tokenOut',
    type: 'address'
  }, {
    name: 'amountIn',
    type: 'uint256'
  }, {
    name: 'amountOut',
    type: 'uint256'
  }, {
    name: 'recipient',
    type: 'address'
  }, {
    name: 'startTime',
    type: 'uint256'
  }, {
    name: 'endTime',
    type: 'uint256'
  }, {
    name: 'stopPrice',
    type: 'uint256'
  }, {
    name: 'oracleAddress',
    type: 'address'
  }, {
    name: 'oracleData',
    type: 'bytes32'
  }]
};
var bentoTypes = {
  EIP712Domain: [{
    name: 'name',
    type: 'string'
  }, {
    name: 'chainId',
    type: 'uint256'
  }, {
    name: 'verifyingContract',
    type: 'address'
  }],
  SetMasterContractApproval: [{
    name: 'warning',
    type: 'string'
  }, {
    name: 'user',
    type: 'address'
  }, {
    name: 'masterContract',
    type: 'address'
  }, {
    name: 'approved',
    type: 'bool'
  }, {
    name: 'nonce',
    type: 'uint256'
  }]
};
var name = 'LimitOrder';

var getSignature = function getSignature(message, chainId, privateKey) {
  var domain = {
    name: name,
    chainId: chainId,
    verifyingContract: STOP_LIMIT_ORDER_ADDRESS[chainId]
  };
  return sign({
    types: types,
    primaryType: 'LimitOrder',
    domain: domain,
    message: message
  }, privateKey);
};
var getTypedData = function getTypedData(message, chainId) {
  var domain = {
    name: name,
    chainId: chainId,
    verifyingContract: STOP_LIMIT_ORDER_ADDRESS[chainId]
  };
  return {
    types: types,
    primaryType: 'LimitOrder',
    domain: domain,
    message: message
  };
};
var getTypedDataBento = function getTypedDataBento(message, chainId) {
  var domain = {
    name: 'BentoBox V1',
    chainId: chainId,
    verifyingContract: coreSdk.BENTOBOX_ADDRESS[chainId]
  };
  return {
    types: bentoTypes,
    primaryType: 'SetMasterContractApproval',
    domain: domain,
    message: message
  };
};
var getTypeHash = function getTypeHash(typedData) {
  var message = eip712.getMessage(typedData, true).toString('hex');
  return "0x" + message;
};

var sign = function sign(typedData, privateKey) {
  var message = eip712.getMessage(typedData, true);
  var signingKey$1 = new signingKey.SigningKey(privateKey);

  var _signingKey$signDiges = signingKey$1.signDigest(message),
      v = _signingKey$signDiges.v,
      r = _signingKey$signDiges.r,
      s = _signingKey$signDiges.s;

  return {
    v: v,
    r: r,
    s: s
  };
};

var getSignatureWithProvider = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(message, chainId, provider) {
    var typedData, signature, _splitSignature, v, r, s;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            typedData = getTypedData(message, chainId);
            _context.next = 3;
            return provider.send('eth_signTypedData_v4', [message.maker, JSON.stringify(typedData)]);

          case 3:
            signature = _context.sent;
            _splitSignature = bytes.splitSignature(signature), v = _splitSignature.v, r = _splitSignature.r, s = _splitSignature.s;
            return _context.abrupt("return", {
              v: v,
              r: r,
              s: s
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getSignatureWithProvider(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var getSignatureWithProviderBentobox = /*#__PURE__*/function () {
  var _ref2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(message, chainId, provider) {
    var typedData, signature, _splitSignature2, v, r, s;

    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            typedData = getTypedDataBento(message, chainId);
            _context2.next = 3;
            return provider.send('eth_signTypedData_v4', [message.user, JSON.stringify(typedData)]);

          case 3:
            signature = _context2.sent;
            _splitSignature2 = bytes.splitSignature(signature), v = _splitSignature2.v, r = _splitSignature2.r, s = _splitSignature2.s;
            return _context2.abrupt("return", {
              v: v,
              r: r,
              s: s
            });

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getSignatureWithProviderBentobox(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
var getSignatureBento = /*#__PURE__*/function () {
  var _ref3 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(bentoApproval, chainId, privateKey) {
    var domain;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            domain = {
              name: 'BentoBox V1',
              chainId: chainId,
              verifyingContract: coreSdk.BENTOBOX_ADDRESS[chainId]
            };
            return _context3.abrupt("return", sign({
              types: bentoTypes,
              primaryType: 'SetMasterContractApproval',
              domain: domain,
              message: bentoApproval
            }, privateKey));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getSignatureBento(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

(function (OrderStatus) {
  OrderStatus["FILLED"] = "FILLED";
  OrderStatus["CANCELLED"] = "CANCELLED";
  OrderStatus["EXPIRED"] = "EXPIRED";
  OrderStatus["PENDING"] = "PENDING";
})(exports.OrderStatus || (exports.OrderStatus = {}));

var abi = [
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_externalOrderFee",
				type: "uint256"
			},
			{
				internalType: "contract IBentoBoxV1",
				name: "_bentoBox",
				type: "address"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "contract IERC20",
				name: "token",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "feeTo",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "LogFeesCollected",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "maker",
				type: "address"
			},
			{
				indexed: true,
				internalType: "bytes32",
				name: "digest",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "contract ILimitOrderReceiver",
				name: "receiver",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "fillAmount",
				type: "uint256"
			}
		],
		name: "LogFillOrder",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "bytes32",
				name: "digest",
				type: "bytes32"
			}
		],
		name: "LogOrderCancelled",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "feeTo",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "externalOrderFee",
				type: "uint256"
			}
		],
		name: "LogSetFees",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "contract ILimitOrderReceiver",
				name: "receiver",
				type: "address"
			}
		],
		name: "LogWhiteListReceiver",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "OwnershipTransferred",
		type: "event"
	},
	{
		inputs: [
		],
		name: "FEE_DIVISOR",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes[]",
				name: "calls",
				type: "bytes[]"
			},
			{
				internalType: "bool",
				name: "revertOnFail",
				type: "bool"
			}
		],
		name: "batch",
		outputs: [
			{
				internalType: "bool[]",
				name: "successes",
				type: "bool[]"
			},
			{
				internalType: "bytes[]",
				name: "results",
				type: "bytes[]"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "maker",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "amountIn",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "amountOut",
						type: "uint256"
					},
					{
						internalType: "address",
						name: "recipient",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "startTime",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "endTime",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "stopPrice",
						type: "uint256"
					},
					{
						internalType: "contract IOracle",
						name: "oracleAddress",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "oracleData",
						type: "bytes"
					},
					{
						internalType: "uint256",
						name: "amountToFill",
						type: "uint256"
					},
					{
						internalType: "uint8",
						name: "v",
						type: "uint8"
					},
					{
						internalType: "bytes32",
						name: "r",
						type: "bytes32"
					},
					{
						internalType: "bytes32",
						name: "s",
						type: "bytes32"
					}
				],
				internalType: "struct StopLimitOrder.OrderArgs[]",
				name: "order",
				type: "tuple[]"
			},
			{
				internalType: "contract IERC20",
				name: "tokenIn",
				type: "address"
			},
			{
				internalType: "contract IERC20",
				name: "tokenOut",
				type: "address"
			},
			{
				internalType: "contract ILimitOrderReceiver",
				name: "receiver",
				type: "address"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "batchFillOrder",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "maker",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "amountIn",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "amountOut",
						type: "uint256"
					},
					{
						internalType: "address",
						name: "recipient",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "startTime",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "endTime",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "stopPrice",
						type: "uint256"
					},
					{
						internalType: "contract IOracle",
						name: "oracleAddress",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "oracleData",
						type: "bytes"
					},
					{
						internalType: "uint256",
						name: "amountToFill",
						type: "uint256"
					},
					{
						internalType: "uint8",
						name: "v",
						type: "uint8"
					},
					{
						internalType: "bytes32",
						name: "r",
						type: "bytes32"
					},
					{
						internalType: "bytes32",
						name: "s",
						type: "bytes32"
					}
				],
				internalType: "struct StopLimitOrder.OrderArgs[]",
				name: "order",
				type: "tuple[]"
			},
			{
				internalType: "contract IERC20",
				name: "tokenIn",
				type: "address"
			},
			{
				internalType: "contract IERC20",
				name: "tokenOut",
				type: "address"
			},
			{
				internalType: "contract ILimitOrderReceiver",
				name: "receiver",
				type: "address"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "batchFillOrderOpen",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "hash",
				type: "bytes32"
			}
		],
		name: "cancelOrder",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		name: "cancelledOrder",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "claimOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "deploymentChainId",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "externalOrderFee",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "feeTo",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "",
				type: "address"
			}
		],
		name: "feesCollected",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "maker",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "amountIn",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "amountOut",
						type: "uint256"
					},
					{
						internalType: "address",
						name: "recipient",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "startTime",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "endTime",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "stopPrice",
						type: "uint256"
					},
					{
						internalType: "contract IOracle",
						name: "oracleAddress",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "oracleData",
						type: "bytes"
					},
					{
						internalType: "uint256",
						name: "amountToFill",
						type: "uint256"
					},
					{
						internalType: "uint8",
						name: "v",
						type: "uint8"
					},
					{
						internalType: "bytes32",
						name: "r",
						type: "bytes32"
					},
					{
						internalType: "bytes32",
						name: "s",
						type: "bytes32"
					}
				],
				internalType: "struct StopLimitOrder.OrderArgs",
				name: "order",
				type: "tuple"
			},
			{
				internalType: "contract IERC20",
				name: "tokenIn",
				type: "address"
			},
			{
				internalType: "contract IERC20",
				name: "tokenOut",
				type: "address"
			},
			{
				internalType: "contract ILimitOrderReceiver",
				name: "receiver",
				type: "address"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "fillOrder",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "maker",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "amountIn",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "amountOut",
						type: "uint256"
					},
					{
						internalType: "address",
						name: "recipient",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "startTime",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "endTime",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "stopPrice",
						type: "uint256"
					},
					{
						internalType: "contract IOracle",
						name: "oracleAddress",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "oracleData",
						type: "bytes"
					},
					{
						internalType: "uint256",
						name: "amountToFill",
						type: "uint256"
					},
					{
						internalType: "uint8",
						name: "v",
						type: "uint8"
					},
					{
						internalType: "bytes32",
						name: "r",
						type: "bytes32"
					},
					{
						internalType: "bytes32",
						name: "s",
						type: "bytes32"
					}
				],
				internalType: "struct StopLimitOrder.OrderArgs",
				name: "order",
				type: "tuple"
			},
			{
				internalType: "contract IERC20",
				name: "tokenIn",
				type: "address"
			},
			{
				internalType: "contract IERC20",
				name: "tokenOut",
				type: "address"
			},
			{
				internalType: "contract ILimitOrderReceiver",
				name: "receiver",
				type: "address"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "fillOrderOpen",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		name: "orderStatus",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "pendingOwner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "token",
				type: "address"
			},
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			},
			{
				internalType: "uint8",
				name: "v",
				type: "uint8"
			},
			{
				internalType: "bytes32",
				name: "r",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32"
			}
		],
		name: "permitToken",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_feeTo",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_externalOrderFee",
				type: "uint256"
			}
		],
		name: "setFees",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "token",
				type: "address"
			}
		],
		name: "swipe",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "token",
				type: "address"
			}
		],
		name: "swipeFees",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address"
			},
			{
				internalType: "bool",
				name: "direct",
				type: "bool"
			},
			{
				internalType: "bool",
				name: "renounce",
				type: "bool"
			}
		],
		name: "transferOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract ILimitOrderReceiver",
				name: "receiver",
				type: "address"
			}
		],
		name: "whiteListReceiver",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];

var LimitOrder = /*#__PURE__*/function () {
  function LimitOrder(maker, amountIn, amountOut, recipient, startTime, endTime, stopPrice, oracleAddress, oracleData, v, r, s) {
    if (stopPrice === void 0) {
      stopPrice = '0';
    }

    if (oracleAddress === void 0) {
      oracleAddress = '0x0000000000000000000000000000000000000000';
    }

    if (oracleData === void 0) {
      oracleData = '0x00000000000000000000000000000000000000000000000000000000000000';
    }

    if (v === void 0) {
      v = 0;
    }

    if (r === void 0) {
      r = '';
    }

    if (s === void 0) {
      s = '';
    }

    this.maker = coreSdk.validateAndParseAddress(maker);
    this.amountIn = amountIn;
    this.amountOut = amountOut;
    this.recipient = coreSdk.validateAndParseAddress(recipient);
    this.startTime = startTime.toString();
    this.endTime = endTime.toString();
    this.stopPrice = stopPrice;
    this.oracleAddress = coreSdk.validateAndParseAddress(oracleAddress);
    this.oracleData = oracleData;
    this.v = v;
    this.r = r;
    this.s = s;
  }

  LimitOrder.getLimitOrder = function getLimitOrder(data) {
    return new LimitOrder(data.maker, coreSdk.CurrencyAmount.fromRawAmount(new coreSdk.Token(data.chainId, data.tokenIn, data.tokenInDecimals, data.tokenInSymbol), data.amountIn), coreSdk.CurrencyAmount.fromRawAmount(new coreSdk.Token(data.chainId, data.tokenOut, data.tokenOutDecimals, data.tokenOutSymbol), data.amountOut), data.recipient, data.startTime, data.endTime, data.stopPrice, data.oracleAddress, data.oracleData, data.v, data.r, data.s);
  };

  var _proto = LimitOrder.prototype;

  _proto.usePrice = function usePrice(price) {
    return new LimitOrder(this.maker, this.amountIn, coreSdk.CurrencyAmount.fromRawAmount(this.amountOut.currency, price.quote(this.amountIn).quotient.toString()), this.recipient, this.startTime, this.endTime, this.stopPrice, this.oracleAddress, this.oracleData);
  };

  _proto.signdOrderWithPrivatekey = function signdOrderWithPrivatekey(chainId, privateKey) {
    var order = {
      maker: this.maker,
      tokenIn: this.tokenInAddress,
      tokenOut: this.tokenOutAddress,
      amountIn: this.amountInRaw,
      amountOut: this.amountOutRaw,
      recipient: this.recipient,
      startTime: this.startTime,
      endTime: this.endTime,
      stopPrice: this.stopPrice,
      oracleAddress: this.oracleAddress,
      oracleData: solidity.keccak256(['bytes'], [this.oracleData])
    };

    var _getSignature = getSignature(order, chainId, privateKey),
        v = _getSignature.v,
        r = _getSignature.r,
        s = _getSignature.s;

    this.v = v;
    this.r = r;
    this.s = s;
    return {
      v: v,
      r: r,
      s: s
    };
  };

  _proto.signOrderWithProvider = /*#__PURE__*/function () {
    var _signOrderWithProvider = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(chainId, provider) {
      var order, _yield$getSignatureWi, v, r, s;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              order = {
                maker: this.maker,
                tokenIn: this.tokenInAddress,
                tokenOut: this.tokenOutAddress,
                amountIn: this.amountInRaw,
                amountOut: this.amountOutRaw,
                recipient: this.recipient,
                startTime: this.startTime,
                endTime: this.endTime,
                stopPrice: this.stopPrice,
                oracleAddress: this.oracleAddress,
                oracleData: solidity.keccak256(['bytes'], [this.oracleData])
              };
              _context.next = 3;
              return getSignatureWithProvider(order, chainId, provider);

            case 3:
              _yield$getSignatureWi = _context.sent;
              v = _yield$getSignatureWi.v;
              r = _yield$getSignatureWi.r;
              s = _yield$getSignatureWi.s;
              this.v = v;
              this.r = r;
              this.s = s;
              return _context.abrupt("return", {
                v: v,
                r: r,
                s: s
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function signOrderWithProvider(_x, _x2) {
      return _signOrderWithProvider.apply(this, arguments);
    }

    return signOrderWithProvider;
  }();

  _proto.getTypedData = function getTypedData$1() {
    var order = {
      maker: this.maker,
      tokenIn: this.tokenInAddress,
      tokenOut: this.tokenOutAddress,
      amountIn: this.amountInRaw,
      amountOut: this.amountOutRaw,
      recipient: this.recipient,
      startTime: this.startTime,
      endTime: this.endTime,
      stopPrice: this.stopPrice,
      oracleAddress: this.oracleAddress,
      oracleData: solidity.keccak256(['bytes'], [this.oracleData])
    };
    return getTypedData(order, this.chainId);
  };

  _proto.getTypeHash = function getTypeHash$1() {
    var typedData = this.getTypedData();

    var digest = getTypeHash(typedData);

    return digest;
  };

  _proto.send = /*#__PURE__*/function () {
    var _send = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var resp;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch(LAMBDA_URL + "/orders/create", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  maker: this.maker,
                  tokenIn: this.tokenInAddress,
                  tokenOut: this.tokenOutAddress,
                  tokenInDecimals: this.tokenInDecimals,
                  tokenOutDecimals: this.tokenOutDecimals,
                  tokenInSymbol: this.tokenInSymbol,
                  tokenOutSymbol: this.tokenOutSymbol,
                  amountIn: this.amountInRaw,
                  amountOut: this.amountOutRaw,
                  recipient: this.recipient,
                  startTime: this.startTime,
                  endTime: this.endTime,
                  stopPrice: this.stopPrice,
                  oracleAddress: this.oracleAddress,
                  oracleData: this.oracleData,
                  v: this.v,
                  r: this.r,
                  s: this.s,
                  chainId: this.amountIn.currency.chainId
                })
              });

            case 2:
              resp = _context2.sent;
              return _context2.abrupt("return", resp.json());

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function send() {
      return _send.apply(this, arguments);
    }

    return send;
  }();

  _createClass(LimitOrder, [{
    key: "amountInRaw",
    get: function get() {
      return this.amountIn.quotient.toString();
    }
  }, {
    key: "amountOutRaw",
    get: function get() {
      return this.amountOut.quotient.toString();
    }
  }, {
    key: "tokenInAddress",
    get: function get() {
      return this.amountIn.currency.address;
    }
  }, {
    key: "tokenOutAddress",
    get: function get() {
      return this.amountOut.currency.address;
    }
  }, {
    key: "tokenInDecimals",
    get: function get() {
      return this.amountIn.currency.decimals;
    }
  }, {
    key: "tokenOutDecimals",
    get: function get() {
      return this.amountOut.currency.decimals;
    }
  }, {
    key: "tokenInSymbol",
    get: function get() {
      return this.amountIn.currency.symbol || '';
    }
  }, {
    key: "tokenOutSymbol",
    get: function get() {
      return this.amountOut.currency.symbol || '';
    }
  }, {
    key: "chainId",
    get: function get() {
      return this.amountIn.currency.chainId;
    }
  }]);

  return LimitOrder;
}();
var FillLimitOrder = /*#__PURE__*/function () {
  function FillLimitOrder(order, path, amountExternal, amountToFill, limitOrderReceiver, to, keepTokenIn) {
    if (keepTokenIn === void 0) {
      keepTokenIn = false;
    }

    this.order = order;
    this.path = path.map(coreSdk.validateAndParseAddress);
    this.amountExternal = amountExternal;
    this.amountToFill = amountToFill;
    this.limitOrderReceiver = coreSdk.validateAndParseAddress(limitOrderReceiver);
    this.to = coreSdk.validateAndParseAddress(to);
    this.tokenIn = order.amountIn.currency.address;
    this.tokenOut = order.amountOut.currency.address;
    this.limitOrderReceiverData = abi$1.defaultAbiCoder.encode(['address[]', 'uint256', 'address', 'bool'], [this.path, this.amountExternal.toString(), this.to, keepTokenIn]);
  }

  var _proto2 = FillLimitOrder.prototype;

  _proto2.fillOrderOpen = function fillOrderOpen(signer, extra) {
    extra.open = true;
    return this.fillOrder(signer, extra);
  };

  _proto2.fillOrder = /*#__PURE__*/function () {
    var _fillOrder = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(signer, extra) {
      var gasPrice, nonce, _extra$forceExecution, forceExecution, _extra$open, open, func, orderArg, limitOrderContract, gasLimit, executed, transaction;

      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              gasPrice = extra.gasPrice, nonce = extra.nonce, _extra$forceExecution = extra.forceExecution, forceExecution = _extra$forceExecution === void 0 ? false : _extra$forceExecution, _extra$open = extra.open, open = _extra$open === void 0 ? false : _extra$open;
              func = open ? 'fillOrderOpen' : 'fillOrder';
              orderArg = [this.order.maker, this.order.amountInRaw, this.order.amountOutRaw, this.order.recipient, this.order.startTime, this.order.endTime, this.order.stopPrice, this.order.oracleAddress, this.order.oracleData, this.amountToFill.toString(), this.order.v, this.order.r, this.order.s];
              limitOrderContract = new contracts.Contract(STOP_LIMIT_ORDER_ADDRESS[this.order.chainId], abi, signer);
              executed = true;
              if (extra.debug) console.log(orderArg, this.path, this.limitOrderReceiver, this.limitOrderReceiverData);
              _context3.prev = 6;
              _context3.next = 9;
              return limitOrderContract.estimateGas[func](orderArg, this.path[0], this.path[this.path.length - 1], this.limitOrderReceiver, this.limitOrderReceiverData);

            case 9:
              gasLimit = _context3.sent;
              gasLimit = gasLimit.mul(11).div(10);
              _context3.next = 22;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](6);

              if (!forceExecution) {
                _context3.next = 21;
                break;
              }

              console.log('Failed to estimate gas, forcing execution');
              gasLimit = bignumber.BigNumber.from('400000'); // 400k

              executed = true;
              _context3.next = 22;
              break;

            case 21:
              return _context3.abrupt("return", {
                executed: false
              });

            case 22:
              _context3.next = 24;
              return limitOrderContract.fillOrder(orderArg, this.path[0], this.path[this.path.length - 1], this.limitOrderReceiver, this.limitOrderReceiverData, {
                gasLimit: gasLimit,
                gasPrice: gasPrice,
                nonce: nonce
              });

            case 24:
              transaction = _context3.sent;
              return _context3.abrupt("return", {
                executed: executed,
                transaction: transaction
              });

            case 26:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[6, 13]]);
    }));

    function fillOrder(_x3, _x4) {
      return _fillOrder.apply(this, arguments);
    }

    return fillOrder;
  }();

  return FillLimitOrder;
}();

exports.ADVANCED_RECEIVER_ADDRESS = ADVANCED_RECEIVER_ADDRESS;
exports.DEFAULT_RECEIVER_ADDRESS = DEFAULT_RECEIVER_ADDRESS;
exports.FillLimitOrder = FillLimitOrder;
exports.LAMBDA_URL = LAMBDA_URL;
exports.LIMIT_ORDER_HELPER_ADDRESS = LIMIT_ORDER_HELPER_ADDRESS;
exports.LimitOrder = LimitOrder;
exports.ROUND_UP_RECEIVER_ADDRESS = ROUND_UP_RECEIVER_ADDRESS;
exports.SOCKET_URL = SOCKET_URL;
exports.STOP_LIMIT_ORDER_ADDRESS = STOP_LIMIT_ORDER_ADDRESS;
exports.bentoTypes = bentoTypes;
exports.getSignature = getSignature;
exports.getSignatureBento = getSignatureBento;
exports.getSignatureWithProvider = getSignatureWithProvider;
exports.getSignatureWithProviderBentobox = getSignatureWithProviderBentobox;
exports.getTypeHash = getTypeHash;
exports.getTypedData = getTypedData;
exports.getTypedDataBento = getTypedDataBento;
exports.name = name;
exports.types = types;
//# sourceMappingURL=limit-order-sdk.cjs.development.js.map
