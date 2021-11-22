// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = ".html *,\n.html *::before,\n.html *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    position: relative;\n}\n\n.skin-top {\n    border: 2px solid black;\n    width: 360px;\n    height: 360px;\n    position: relative;\n    left: 50%;\n    margin-left: -180px;\n    border-radius: 60% / 40%;\n    top: 20vh;\n    border-bottom-color: transparent;\n    background-color: rgb(87, 198, 155);\n    z-index: -2;\n}\n\n.skin-top::before {\n    content: '';\n    border: 50px solid blue;\n    border-color: transparent transparent rgb(255, 251, 190) transparent;\n    border-radius: 10px;\n    width: 0px;\n    height: 0px;\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n    top: -95px;\n    z-index: 2;\n}\n\n.skin-top::after {\n    content: '';\n    border: 55px solid blue;\n    border-color: transparent transparent black transparent;\n    border-radius: 10px;\n    width: 0px;\n    height: 0px;\n    position: absolute;\n    left: 50%;\n    margin-left: -55px;\n    top: -103px;\n    z-index: 1;\n\n}\n\n.mouth {\n    position: absolute;\n    border: 2px solid black;\n    top: 180px;\n    width: 320px;\n    height: 112px;\n    left: 50%;\n    margin-left: -160px;\n    border-radius: 50%;\n    margin-top: -110px;\n    background-color: rgb(229, 158, 176);\n\n}\n\n.mouth::before {\n    content: \"\";\n    display: block;\n    width: 40px;\n    height: 16px;\n    position: absolute;\n    border-radius: 50%;\n    background-color: rgb(253, 189, 205);\n}\n\n.mouth::after {\n    content: \"\";\n    display: block;\n    width: 40px;\n    height: 16px;\n    position: absolute;\n    border-radius: 50%;\n    left: 100%;\n    margin-left: -42px;\n    background-color: rgb(253, 189, 205);\n}\n\n.teeth1 {\n    position: absolute;\n    border: 2px solid black;\n    width: 50px;\n    height: 25px;\n    border-radius: 0 0 100px 100px;\n    background: #fff;\n    left: 30%;\n    top: 74px;\n    transform: rotate(-7deg);\n}\n\n.teeth2 {\n    position: absolute;\n    border: 2px solid black;\n    width: 50px;\n    height: 25px;\n    border-radius: 0 0 100px 100px;\n    background: #fff;\n    left: 56%;\n    top: 74px;\n    transform: rotate(7deg);\n}\n\n.teeth3 {\n    position: absolute;\n    border: 2px solid black;\n    width: 38px;\n    height: 20px;\n    border-radius: 0 0 50px 50px;\n    background: #fff;\n    left: 10%;\n    top: 93px;\n    transform: rotate(-27deg);\n}\n\n.teeth4 {\n    position: absolute;\n    border: 2px solid black;\n    width: 38px;\n    height: 20px;\n    border-radius: 0 0 50px 50px;\n    background: #fff;\n    left: 80%;\n    top: 94px;\n    transform: rotate(27deg);\n}\n\n.teeth5 {\n    position: absolute;\n    border: 2px solid black;\n    width: 38px;\n    height: 20px;\n    border-radius: 50px 50px 0 0;\n    background: #fff;\n    left: 10%;\n    top: 138px;\n    transform: rotate(27deg);\n}\n\n.teeth6 {\n    position: absolute;\n    border: 2px solid black;\n    width: 50px;\n    height: 25px;\n    border-radius: 100px 100px 0 0;\n    background: #fff;\n    left: 30%;\n    top: 153px;\n    transform: rotate(7deg);\n}\n\n.teeth7 {\n    position: absolute;\n    border: 2px solid black;\n    width: 50px;\n    height: 25px;\n    border-radius: 100px 100px 0 0;\n    background: #fff;\n    left: 56%;\n    top: 153px;\n    transform: rotate(-7deg);\n}\n\n.teeth8 {\n    position: absolute;\n    border: 2px solid black;\n    width: 38px;\n    height: 20px;\n    border-radius: 50px 50px 0 0;\n    background: #fff;\n    left: 80%;\n    top: 138px;\n    transform: rotate(-27deg);\n}\n\n.skin-top .eye-left {\n    position: absolute;\n    border: 3px solid black;\n    border-radius: 0 0 0 50px;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    width: 15px;\n    height: 15px;\n    left: 20%;\n    top: 35px;\n    transform: rotate(100deg);\n}\n\n.skin-top .eye-right {\n    position: absolute;\n    border: 3px solid black;\n    border-radius: 0 0 0 50px;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    width: 15px;\n    height: 15px;\n    left: 76%;\n    top: 35px;\n    transform: rotate(165deg);\n}\n\n.skin-bottom {\n    width: 406px;\n    height: 200px;\n    border-radius: 20% / 60%;\n    border: 2px solid black;\n    position: relative;\n    left: 50%;\n    margin-top: -3%;\n    margin-left: -203px;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n    background-color: rgb(87, 198, 155);\n    z-index: -2;\n}\n\n.skin-bottom::before {\n    content: \"\";\n    width: 65px;\n    display: block;\n    height: 100px;\n    position: absolute;\n    border: 2px solid black;\n    border-radius: 0 0 20px 50px;\n    background-color: rgb(87, 198, 155);\n    border-top-color: transparent;\n    top: -14%;\n    left: 25%;\n    transform: rotate(-90deg);\n    animation: leftMove 300ms infinite linear;\n}\n\n.skin-bottom::after {\n    content: \"\";\n    display: block;\n    width: 65px;\n    height: 100px;\n    position: absolute;\n    border: 2px solid black;\n    border-radius: 0 0 50px 20px;\n    background-color: rgb(87, 198, 155);\n    border-top-color: transparent;\n    top: -14%;\n    left: 60%;\n    transform: rotate(90deg);\n    animation: rightMove 300ms infinite linear;\n}\n\n.skin-bottom .belly {\n    position: absolute;\n    width: 360px;\n    height: 160px;\n    background: rgb(255, 251, 190);\n    border-radius: 50%;\n    left: 50%;\n    margin-left: -180px;\n    top: 6vh;\n    z-index: -1;\n}\n\nimg{\n    display: block;\n    margin-top: -50%;\n}\n\n@keyframes leftMove {\n    0% {\n        left: 25%;\n    }\n\n    50% {\n        left: 30%;\n    }\n\n    100% {\n        left: 25%;\n    }\n\n}\n@keyframes rightMove {\n    0% {\n        left: 60%;\n    }\n\n    50% {\n        left: 55%;\n    }\n\n    100% {\n        left: 60%;\n    }\n\n}\n";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//模块化
var player = {
  id: undefined,
  n: 1,
  time: 100,
  ui: {
    demo1: document.querySelector('#demo1'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnStop': 'stop',
    //清掉
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnMid': 'normal',
    '#btnFast': 'fast'
  },
  init: function init() {
    //初始化
    player.ui.demo1.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n); //同时以文本的形式和html的形式展示标签

    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      var value = player.events[key];
      document.querySelector(key).onclick = player[value]; //用字符串取方法
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id); //取消先前设定的setInterval任务

      return;
    }

    player.ui.demo1.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo1.scrollTop = player.ui.demo1.scrollHeight; //自动滚动。到代码的高度
  },
  stop: function stop() {
    window.clearInterval(player.id);
  },
  play: function play() {
    player.id = setInterval(player.run, player.time); //每次调用play的时候都会把它赋值给id
    //考虑将它内置
  },
  slow: function slow() {
    player.stop(); //把闹钟砸了，再重新定闹钟

    player.time = 200;
    player.play();
  },
  normal: function normal() {
    player.stop();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.stop();
    player.time = 0;
    player.play();
  }
};
player.init(); //太丑了，如何解决重复的问题
//x=()=>{run()}  x和run是等价的
//window.clearInterval(id) 以及 id = setInterval(run, time) 重复
//使用面向对象的思维再次进行优化
//每次调用play的时候都会把它赋值给id  考虑将它内置
//不能在声明一个对象的''
},{"./css.js":"css.js"}],"C:/Users/5555/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "9179" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/5555/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map