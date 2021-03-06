/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/game.js":
/*!**************************************!*\
  !*** ./app/javascript/packs/game.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var obstacleID = 9;
var boxID = 1;
var goalID = 3;
var charID = 2;
var freeID = 0;
var goalBoxID = 4;
var goalCharID = 5;

var TNode = /*#__PURE__*/function () {
  function TNode(state) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var q = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var visited = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    var exhausted = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
    var frozen = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
    var terminal = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;

    _classCallCheck(this, TNode);

    this.state = state;
    this.parent = parent;
    this.children = children;
    this.q = q;
    this.n = n;
    this.visited = visited;
    this.exhausted = exhausted;
    this.frozen = frozen; // when frozen, copy state into this attribute

    this.terminal = terminal;
  }

  _createClass(TNode, [{
    key: "isRoot",
    value: function isRoot() {
      if (this.parent === null) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "isVisited",
    value: function isVisited() {
      if (this.visited === true) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "isExhausted",
    value: function isExhausted() {
      if (this.exhausted === true) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "isFrozen",
    value: function isFrozen() {
      if (this.frozen === false) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: "isTerminal",
    value: function isTerminal() {
      if (this.terminal === true) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return TNode;
}(); // Testing


var testRoot = mctsInit(5, 5);
var testFrozen = [[9, 0, 9, 0, 9], [0, 0, 0, 0, 9], [0, 9, 2, 0, 9], [0, 1, 0, 1, 0], [9, 0, 0, 0, 9]];
var testState = [[9, 0, 9, 0, 9], [0, 1, 2, 1, 9], [0, 9, 0, 0, 9], [0, 0, 0, 0, 0], [9, 0, 0, 0, 9]];
var testNode = new TNode(state = testFrozen, parent = null, children = [], q = 0, n = 0, visited = false, exhausted = false, frozen = false, terminal = false);
postMessage("Worker started!"); //newPuzzle = mctsMain(mctsInit(5, 5), 60000);
//postMessage(newPuzzle);

function mctsInit(m, n) {
  // creates root (m by n) filled with obstacles
  var state = Array.from({
    length: n
  }, function () {
    return Array.from({
      length: m
    }, function () {
      return obstacleID;
    });
  });
  state[Math.trunc(state.length / 2)][Math.trunc(state[0].length / 2)] = freeID + 2;
  return new TNode(state, parent = null, children = [], q = 0, n = 0, visited = false, exhausted = false, frozen = false, terminal = false);
}

function mctsSim(node) {
  // full simulation/rollout
  //console.log("Starting Sim call", node);
  var nodeCur = node; //if (nodeCur.children.length === 0) console.log("Creating children");
  // create child nodes if necessary, but still let it go through visited nodes

  while (nodeCur.isFrozen() === false) {
    //console.log("Starting first sim while", nodeCur.parent);
    if (nodeCur.children.length === 0) mctsAct1(nodeCur);
    nodeCur = mctsRoll(nodeCur);
  }

  while (nodeCur.isTerminal() === false) {
    //console.log("Starting second sim while", nodeCur);
    if (nodeCur.children.length === 0) mctsAct2(nodeCur);
    nodeCur = mctsRoll(nodeCur);
  }

  node.visited = true;
  mctsProp(node, mctsEval(nodeCur));
  console.log("Ending Sim call", nodeCur.parent);
  return node;
}

function mctsMain(root, timeLimit) {
  mctsSim(root);
  var startTime = Date.now();

  while (Date.now() - startTime < timeLimit) {
    //console.log("Starting main while loop");
    var nodeCur = mctsTrav(root);

    if (nodeCur.isTerminal()) {
      mctsSim(nodeCur);
    } else {
      mctsExpl(nodeCur);
    }
  }

  var puzzle = root;

  while (puzzle.isTerminal() === false) {
    puzzle = mctsBest(puzzle);
  }

  console.log("Evaluation:", mctsEval(puzzle));
  console.log("Result:", puzzle);
  return puzzle;
}

function mctsExpl(node) {
  // exhaust a node by starting sim at each child
  //console.log("Starting Expl call", node);
  for (child = 0; child < node.children.length; child++) {
    mctsSim(node.children[child]);
    node.exhausted = true;
  } //console.log("Ending Expl call", node);


  return node;
}

function mctsTrav(node) {
  // traverse down to the uct-best unexhausted node
  //console.log("Starting Trav call");
  var nodeCurrent = node;

  while (nodeCurrent.isExhausted()) {
    var bestUCT = 0;
    var nodeNext = null;

    for (i = 0; i < nodeCurrent.children.length; i++) {
      //console.log(nodeCurrent, nodeCurrent.children[i]);
      var uct = mctsUCT(nodeCurrent, nodeCurrent.children[i]);

      if (uct >= bestUCT) {
        bestUCT = uct;
        nodeNext = nodeCurrent.children[i];
      }
    }

    nodeCurrent = nodeNext;
  } //console.log("Ending Trav call", nodeCurrent);


  return nodeCurrent;
}

function mctsBest(node) {
  // choose best child (num times propagated thru)
  var best = [null, 0];

  for (i = 0; i < node.children.length; i++) {
    maxer = node.children[i].n;

    if (maxer >= best[1]) {
      best = [node.children[i], maxer];
    }
  }

  return best[0];
}

function mctsRoll(node) {
  // rollout policy, i.e. pick random child
  roll = Math.random();
  numCh = node.children.length;

  for (i = 0; i < numCh; i++) {
    if (roll <= (i + 1) / numCh) {
      return node.children[i];
    }
  }

  return null;
}

function mctsAct1(node) {
  // create child nodes, unfrozen
  var neighbors = [0, 0, 0, 0];
  var deleted = false;
  var newState = JSON.parse(JSON.stringify(node.state));

  for (i = 0; i < node.state.length; i++) {
    for (j = 0; j < node.state[i].length; j++) {
      if (node.state[i][j] === obstacleID) {
        neighbors = [j + 1, i + 1, j - 1, i - 1]; // right, up, left, down

        deleted = false; // delete obstacles adjacent to non-obstacles

        if (deleted === false && neighbors[0] < node.state[i].length) {
          if (node.state[i][neighbors[0]] !== obstacleID) {
            newState[i][j] = freeID;
            node.children.push(new TNode(state = JSON.parse(JSON.stringify(newState)), parent = node));
            deleted = true;
            newState[i][j] = obstacleID;
          }
        }

        if (deleted === false && neighbors[1] < node.state.length) {
          if (node.state[neighbors[1]][j] !== obstacleID) {
            newState[i][j] = freeID;
            node.children.push(new TNode(state = JSON.parse(JSON.stringify(newState)), parent = node));
            deleted = true;
            newState[i][j] = obstacleID;
          }
        }

        if (deleted === false && neighbors[2] >= 0) {
          if (node.state[i][neighbors[2]] !== obstacleID) {
            newState[i][j] = freeID;
            node.children.push(new TNode(state = JSON.parse(JSON.stringify(newState)), parent = node));
            deleted = true;
            newState[i][j] = obstacleID;
          }
        }

        if (deleted === false && neighbors[3] >= 0) {
          if (node.state[neighbors[3]][j] !== obstacleID) {
            newState[i][j] = freeID;
            node.children.push(new TNode(state = JSON.parse(JSON.stringify(newState)), parent = node));
            deleted = true;
            newState[i][j] = obstacleID;
          }
        }
      }
    }
  }

  newState = JSON.parse(JSON.stringify(node.state));

  for (i = 0; i < node.state.length; i++) {
    for (j = 0; j < node.state[i].length; j++) {
      if (node.state[i][j] === freeID) {
        // place box
        newState[i][j] = boxID;
        node.children.push(new TNode(state = JSON.parse(JSON.stringify(newState)), parent = node));
        newState[i][j] = freeID;
      }
    }
  } // freeze level if we have any boxes


  var boxCount = 0;

  for (i = 0; i < node.state.length; i++) {
    for (j = 0; j < node.state[i].length; j++) {
      if (node.state[i][j] == boxID) {
        boxCount++;
      }
    }
  }

  if (boxCount > 0) {
    node.children.push(new TNode(state = node.state, parent = node, children = [], q = 0, n = 0, visited = false, exhausted = false, frozen = node.state));
  }

  return node;
}

function mctsAct2(node) {
  // create child nodes, frozen
  var neighbor = 0;
  var neighbor2 = 0;
  var newState = JSON.parse(JSON.stringify(node.state));

  for (i = 0; i < node.state.length; i++) {
    for (j = 0; j < node.state[i].length; j++) {
      if (node.state[i][j] === charID || node.state[i][j] === goalCharID) {
        neighbors = [j + 1, i + 1, j - 1, i - 1]; // move agent, possibly pushing boxes

        neighbor = j + 1;
        neighbor2 = j + 2;

        if (neighbor < node.state[i].length) {
          if (node.state[i][neighbor] === freeID || node.state[i][neighbor] === goalID) {
            newState[i][neighbor] += 2;
            newState[i][j] -= 2;
            node.children.push(new TNode(state = JSON.parse(JSON.stringify(newState)), parent = node, children = [], q = 0, n = 0, visited = false, exhausted = false, frozen = node.frozen));
            newState[i][neighbor] -= 2;
            newState[i][j] += 2;
          }

          if (node.state[i][neighbor] === boxID || node.state[i][neighbor] === goalBoxID) {
            if (neighbor2 < node.state[i].length) {
              if (node.state[i][neighbor2] != obstacleID && node.state[i][neighbor2] != boxID && node.state[i][neighbor2] != goalBoxID) {
                newState[i][neighbor] += 2;
                newState[i][j] -= 2;
                newState[i][neighbor2] += 1;
                newState[i][neighbor] -= 1;
                node.children.push(new TNode(state = JSON.parse(JSON.stringify(newState)), parent = node, children = [], q = 0, n = 0, visited = false, exhausted = false, frozen = node.frozen));
                newState[i][neighbor] -= 2;
                newState[i][j] += 2;
                newState[i][neighbor2] -= 1;
                newState[i][neighbor] += 1;
              }
            }
          }
        }

        neighbor = i + 1;
        neighbor2 = i + 2;

        if (neighbor < node.state.length) {
          if (node.state[neighbor][j] === freeID || node.state[neighbor][j] === goalID) {
            newState[neighbor][j] += 2;
            newState[i][j] -= 2;
            node.children.push(new TNode(state = JSON.parse(JSON.stringify(newState)), parent = node, children = [], q = 0, n = 0, visited = false, exhausted = false, frozen = node.frozen));
            newState[neighbor][j] -= 2;
            newState[i][j] += 2;
          }

          if (node.state[neighbor][j] === boxID || node.state[neighbor][j] === goalBoxID) {
            if (neighbor2 < node.state.length) {
              if (node.state[neighbor2][j] != obstacleID && node.state[neighbor2][j] != boxID && node.state[neighbor2][j] != goalBoxID) {
                newState[neighbor][j] += 2;
                newState[i][j] -= 2;
                newState[neighbor2][j] += 1;
                newState[neighbor][j] -= 1;
                node.children.push(new TNode(state = JSON.parse(JSON.stringify(newState)), parent = node, children = [], q = 0, n = 0, visited = false, exhausted = false, frozen = node.frozen));
                newState[neighbor][j] -= 2;
                newState[i][j] += 2;
                newState[neighbor2][j] -= 1;
                newState[neighbor][j] += 1;
              }
            }
          }
        }

        neighbor = j - 1;
        neighbor2 = j - 2;

        if (neighbor >= 0) {
          if (node.state[i][neighbor] === freeID || node.state[i][neighbor] === goalID) {
            newState[i][neighbor] += 2;
            newState[i][j] -= 2;
            node.children.push(new TNode(state = JSON.parse(JSON.stringify(newState)), parent = node, children = [], q = 0, n = 0, visited = false, exhausted = false, frozen = node.frozen));
            newState[i][neighbor] -= 2;
            newState[i][j] += 2;
          }

          if (node.state[i][neighbor] === boxID || node.state[i][neighbor] === goalBoxID) {
            if (neighbor2 >= 0) {
              if (node.state[i][neighbor2] != obstacleID && node.state[i][neighbor2] != boxID && node.state[i][neighbor2] != goalBoxID) {
                newState[i][neighbor] += 2;
                newState[i][j] -= 2;
                newState[i][neighbor2] += 1;
                newState[i][neighbor] -= 1;
                node.children.push(new TNode(state = JSON.parse(JSON.stringify(newState)), parent = node, children = [], q = 0, n = 0, visited = false, exhausted = false, frozen = node.frozen));
                newState[i][neighbor] -= 2;
                newState[i][j] += 2;
                newState[i][neighbor2] -= 1;
                newState[i][neighbor] += 1;
              }
            }
          }
        }

        neighbor = i - 1;
        neighbor2 = i - 2;

        if (neighbor >= 0) {
          if (node.state[neighbor][j] === freeID || node.state[neighbor][j] === goalID) {
            newState[neighbor][j] += 2;
            newState[i][j] -= 2;
            node.children.push(new TNode(state = JSON.parse(JSON.stringify(newState)), parent = node, children = [], q = 0, n = 0, visited = false, exhausted = false, frozen = node.frozen));
            newState[neighbor][j] -= 2;
            newState[i][j] += 2;
          }

          if (node.state[neighbor][j] === boxID || node.state[neighbor][j] === goalBoxID) {
            if (neighbor2 >= 0) {
              if (node.state[neighbor2][j] != obstacleID && node.state[neighbor2][j] != boxID && node.state[neighbor2][j] != goalBoxID) {
                newState[neighbor][j] += 2;
                newState[i][j] -= 2;
                newState[neighbor2][j] += 1;
                newState[neighbor][j] -= 1;
                node.children.push(new TNode(state = JSON.parse(JSON.stringify(newState)), parent = node, children = [], q = 0, n = 0, visited = false, exhausted = false, frozen = node.frozen));
                newState[neighbor][j] -= 2;
                newState[i][j] += 2;
                newState[neighbor2][j] -= 1;
                newState[neighbor][j] += 1;
              }
            }
          }
        }
      }
    }
  } // evaluate level, terminal node


  newState = JSON.parse(JSON.stringify(node.state));
  /*
      for (i = 0; i < node.state.length; i++) {
        for (j = 0; j < node.state[i].length; j++) {
  
          // change current boxes into goals
          if (newState[i][j] === boxID) {
            newState[i][j] = goalID;
          }
  
          console.log("After c boxes -> goals", JSON.parse(JSON.stringify(newState)));
  
          // move the agent back to where they started
          if (newState[i][j] === charID || newState[i][j] === goalCharID) {
            newState[i][j] -= 2;
            newState[Math.trunc(state.length / 2)][Math.trunc(state[0].length / 2)] += 2;
          }
  
          console.log("After move agent to start", JSON.parse(JSON.stringify(newState)));
  
          // restore frozen (original) box locations
          if (node.frozen[i][j] === boxID) {
            newState[i][j] += 1;
          }
  
          console.log("After restore frozen boxes", JSON.parse(JSON.stringify(newState)));
  
          // postprocessing: unused boxes -> obstacle tile
          if (newState[i][j] === goalBoxID) {
            newState[i][j] = obstacleID;
          }
  
          console.log("After postprocessing", JSON.parse(JSON.stringify(newState)));
        }
      }
      */

  for (i = 0; i < node.state.length; i++) {
    for (j = 0; j < node.state[i].length; j++) {
      // change current boxes into goals
      if (newState[i][j] === boxID) {
        newState[i][j] = goalID;
      }
    }
  }

  for (i = 0; i < node.state.length; i++) {
    for (j = 0; j < node.state[i].length; j++) {
      // move the agent back to where they started
      if (newState[i][j] === charID || newState[i][j] === goalCharID) {
        newState[i][j] -= 2;
        newState[Math.trunc(state.length / 2)][Math.trunc(state[0].length / 2)] += 2;
      }
    }
  }

  for (i = 0; i < node.state.length; i++) {
    for (j = 0; j < node.state[i].length; j++) {
      // restore frozen (original) box locations
      if (node.frozen[i][j] === boxID) {
        newState[i][j] += 1;
      }
    }
  }

  for (i = 0; i < node.state.length; i++) {
    for (j = 0; j < node.state[i].length; j++) {
      // postprocessing: unused boxes -> obstacle tile
      if (newState[i][j] === goalBoxID) {
        newState[i][j] = obstacleID;
      }
    }
  }

  node.children.push(new TNode(state = JSON.parse(JSON.stringify(newState)), parent = node, children = [], q = 0, n = 0, visited = false, exhausted = false, frozen = node.frozen, terminal = true));
  return node;
}

function mctsProp(node, result) {
  // recursively backpropagate to root
  node.q += result;
  node.n += 1;

  if (node.isRoot()) {
    return;
  }

  mctsProp(node.parent, result);
}

function mctsEval(node) {
  // equation 2 from paper
  var terrain = 0;
  var congestion = 0;
  var neighbors = [0, 0, 0, 0]; // constant parameters

  var a = 4;
  var b = 4;
  var c = 1;
  var k = 200;
  var w1 = 5;
  var w2 = 5;
  var w3 = 2;
  var boxes = [];
  var goalsUnordered = [];

  for (i = 0; i < node.state.length; i++) {
    for (j = 0; j < node.state[i].length; j++) {
      if (node.state[i][j] === freeID || node.state[i][j] === freeID + 1 || node.state[i][j] === freeID + 2) {
        neighbors = [j + 1, i + 1, j - 1, i - 1]; // right, up, left, down

        if (neighbors[0] < node.state[i].length) {
          if (node.state[i][neighbors[0]] === obstacleID) {
            terrain++;
          }
        }

        if (neighbors[1] < node.state.length) {
          if (node.state[neighbors[1]][j] === obstacleID) {
            terrain++;
          }
        }

        if (neighbors[2] >= 0) {
          if (node.state[i][neighbors[2]] === obstacleID) {
            terrain++;
          }
        }

        if (neighbors[3] >= 0) {
          if (node.state[neighbors[3]][j] === obstacleID) {
            terrain++;
          }
        }
      }

      if (node.state[i][j] === boxID) {
        boxes.push([i, j]);
      }

      if (node.state[i][j] === goalID || node.state[i][j] === goalCharID) {
        goalsUnordered.push([i, j]);
      }
    }
  }

  var goals = [];

  for (box = 0; box < boxes.length; box++) {
    var shortest = [Number.POSITIVE_INFINITY, goalsUnordered[box]];

    for (goal = 0; goal < goalsUnordered.length; goal++) {
      var dist = Math.sqrt(Math.pow(boxes[box][0] - goalsUnordered[goal][0], 2) + Math.pow(boxes[box][1] - goalsUnordered[goal][1], 2));

      if (dist < shortest[0]) {
        shortest[0] = dist;
        shortest[1] = goal; // index in the goalsUnordered array
      }
    }

    goals.push(goalsUnordered[shortest[1]]); // reorder corresponding to boxes

    goalsUnordered.splice(shortest[1], 1);
  }

  for (box = 0; box < boxes.length; box++) {
    var boxCount = 0;
    var goalCount = 0;
    var obstacleCount = 0;
    var areaCount = 0;

    for (i = Math.min(boxes[box][0], goals[box][0]); i <= Math.max(boxes[box][0], goals[box][0]); i++) {
      for (j = Math.min(boxes[box][1], goals[box][1]); j <= Math.max(boxes[box][1], goals[box][1]); j++) {
        if (node.state[i][j] === boxID) {
          boxCount += 1;
        }

        if (node.state[i][j] === goalID) {
          goalCount += 1;
        }

        if (node.state[i][j] === obstacleID) {
          obstacleCount += 1;
        }

        areaCount += 1;
      }
    }

    congestion += (a * boxCount + b * goalCount) / (c * (areaCount - obstacleCount));
  }

  return (w1 * terrain + w2 * congestion + w3 * boxes.length) / k;
}

function mctsUCT(node, child) {
  // used to decide between nodes in traversal
  var c = Math.sqrt(2); // constant param, sqrt(2) is apparently standard

  return child.q / child.n + c * Math.sqrt(Math.log(node.n) / child.n);
}

/***/ })

/******/ });
//# sourceMappingURL=game-cd54052f3ed7990fd3ff.js.map