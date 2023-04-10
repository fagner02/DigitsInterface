var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var blocksNum = 784;
var matrixSize = Math.sqrt(blocksNum);
var size = Math.floor((Math.min(window.innerHeight, window.innerWidth) * 0.8) / matrixSize);
var gapSize = 2;
var blockAngle = 0;
var num = 0;
var activations = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 36, 56, 137, 201, 199, 95, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 45, 152, 234, 254, 254, 254, 254, 254, 250, 211, 151, 6, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 46, 153, 240, 254, 254, 227, 166, 133, 251,
    200, 254, 229, 225, 104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153, 234, 254,
    254, 187, 142, 8, 0, 0, 191, 40, 198, 246, 223, 253, 21, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 8, 126, 253, 254, 233, 128, 11, 0, 0, 0, 0, 210, 43, 70, 254, 254,
    254, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 243, 254, 228, 54, 0, 0, 0, 0, 3,
    32, 116, 225, 242, 254, 255, 162, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 240,
    254, 223, 109, 138, 178, 178, 169, 210, 251, 231, 254, 254, 254, 232, 38, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 175, 244, 253, 255, 254, 254, 251, 254, 254,
    254, 254, 254, 252, 171, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
    136, 195, 176, 146, 153, 200, 254, 254, 254, 254, 150, 16, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 162, 254, 254, 241, 99, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 118, 250, 254, 254,
    90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100,
    242, 254, 254, 211, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 54, 241, 254, 254, 242, 59, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 131, 254, 254, 244, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 249, 254, 254, 152, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 228, 254, 254, 208, 8, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 78, 255, 254,
    254, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    209, 254, 254, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 227, 255, 233, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 255, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
];
var Block = /** @class */ (function () {
    function Block(index) {
        this.index = index;
        this.instantiate();
    }
    Block.prototype.setColor = function () {
        var _this = this;
        var color = (255 - activations[this.index]) / 2.55;
        color = color > 98 ? 90 : color;
        this.block.style.transform = "rotateY(" + blockAngle + "deg)";
        setTimeout(function () {
            _this.block.style.backgroundColor = "hsl(0, 0%, " + color + "%)";
        }, 650);
    };
    Block.prototype.instantiate = function () {
        this.block = document.createElement("div");
        this.block.className = "block";
        this.block.style.width = size + "px";
        this.block.style.height = size + "px";
        this.block.style.backgroundColor = "hsl(0, 0%, 90%)";
        this.block.style.transition = "transform 2s";
        document.querySelector(".box").appendChild(this.block);
    };
    return Block;
}());
function sigmoid(layer) {
    var newLayer = [];
    newLayer.fill(0.0, 0, layer.length - 1);
    for (var i = 0; i < layer.length; i++) {
        newLayer[i] = 1.0 / (1.0 + Math.exp(-layer[i]));
    }
    return newLayer;
}
function feedForward(layer) {
    for (var i = 0; i < weights.length; i++) {
        var newLayer = [];
        for (var j = 0; j < weights[i].length; j++) {
            var sigmoidOut = 0.0;
            for (var k = 0; k < weights[i][j].length; k++) {
                sigmoidOut += weights[i][j][k] * layer[k];
            }
            newLayer.push(sigmoidOut / 10.0 + biases[i][j]);
        }
        layer = sigmoid(newLayer);
    }
    return layer;
}
function evaluateInput() {
    console.log("Evaluating input");
    for (var i = 0; i < blocks.length; i++) {
        var color = parseFloat(blocks[i].block.style.backgroundColor.split(" ")[2]);
        color = color > 228 ? 255 : color;
        activations[i] = (255.0 - color) / 255.0;
    }
    var res = feedForward(activations);
    num = res.indexOf(Math.max.apply(Math, res));
    console.log("Done evaluating input");
    for (var i = 0; i < digits[num].length; i++) {
        activations[i] = digits[num][i];
    }
    rotateBlocks();
    console.log("Done setting colors");
}
var blocks = [];
var coordinates = { x: null, y: null };
var drawing = false;
function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
function rotateBlocks() {
    return __awaiter(this, void 0, void 0, function () {
        var chunk, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    blockAngle = blockAngle == 0 ? 360 : 0;
                    chunk = 0;
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < blocks.length)) return [3 /*break*/, 4];
                    blocks[i].setColor();
                    chunk++;
                    if (!(chunk == 15)) return [3 /*break*/, 3];
                    chunk = 0;
                    return [4 /*yield*/, sleep(10)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function setDrawState() {
    activations = activations.map(function () { return 0; });
    rotateBlocks();
}
function start() {
    return __awaiter(this, void 0, void 0, function () {
        var box, boxSize, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    box = document.querySelector(".box");
                    boxSize = matrixSize * (size + gapSize) - gapSize + "px";
                    box.style.gap = gapSize + "px";
                    box.style.width = boxSize;
                    box.style.height = boxSize;
                    box.addEventListener("mousedown", function (e) {
                        drawing = true;
                        coordinates.x = e.clientX;
                        coordinates.y = e.clientY;
                    });
                    box.addEventListener("mousemove", function (e) {
                        move(e.clientX, e.clientY);
                    });
                    box.addEventListener("mouseup", function () {
                        drawing = false;
                    });
                    box.addEventListener("mouseleave", function () {
                        drawing = false;
                    });
                    box.addEventListener("touchstart", function (e) {
                        drawing = true;
                        coordinates.x = e.touches[0].clientX;
                        coordinates.y = e.touches[0].clientY;
                    });
                    box.addEventListener("touchmove", function (e) {
                        move(e.touches[0].clientX, e.touches[0].clientY);
                    });
                    box.addEventListener("touchend", function () {
                        drawing = false;
                    });
                    for (i = 0; i < blocksNum; i++) {
                        blocks.push(new Block(i));
                    }
                    return [4 /*yield*/, sleep(500)];
                case 1:
                    _a.sent();
                    rotateBlocks();
                    return [2 /*return*/];
            }
        });
    });
}
start();
function move(clientX, clientY) {
    if (!drawing) {
        return;
    }
    if (!(Math.abs(coordinates.x - clientX) > size ||
        Math.abs(coordinates.y - clientY) > size)) {
        return;
    }
    coordinates.x = clientX;
    coordinates.y = clientY;
    var brushWidth = 1.4;
    var startPos = blocks[0].block.getBoundingClientRect();
    for (var k = 0; k <= Math.ceil(brushWidth); k++) {
        var length_1 = (k / Math.ceil(brushWidth)) * brushWidth * (size + gapSize);
        var hip = Math.sqrt(Math.pow(length_1, 2) + Math.pow((size + gapSize), 2));
        var stepAngle = Math.asin((size + gapSize) / hip);
        for (var i = 0; i < Math.ceil((2 * Math.PI) / stepAngle); i++) {
            var sideX = Math.sin(i * stepAngle) * length_1;
            var sideY = Math.cos(i * stepAngle) * length_1;
            var indexes = {
                x: Math.floor((coordinates.x - startPos.x + sideX) / (size + gapSize)),
                y: Math.floor((coordinates.y - startPos.y + sideY) / (size + gapSize))
            };
            var b = blocks[indexes.y * matrixSize + indexes.x];
            if (!b) {
                continue;
            }
            var rect = b.block.getBoundingClientRect();
            var x = Math.abs(rect.x + size / 2 - coordinates.x);
            var y = Math.abs(rect.y + size / 2 - coordinates.y);
            var a = 1 - (x + y) / 2 / ((size + gapSize) * brushWidth);
            if (a < 0)
                a = 0;
            var color = a * 50;
            var color2 = parseFloat(b.block.style.backgroundColor.split(" ")[2]) / 2.55;
            if (color2 < color)
                color = color2;
            b.block.style.backgroundColor = "hsl(0, 0%, ".concat(color2 - color, "%)");
        }
    }
}
//# sourceMappingURL=script.js.map