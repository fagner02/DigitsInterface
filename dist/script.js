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
var size = 10;
var blocksNum = 784;
var num = 0;
var angle = 0;
var activations = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 84, 185, 159, 151,
    60, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 222,
    254, 254, 254, 254, 241, 198, 198, 198, 198, 198, 198, 198, 198, 170, 52, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 114, 72, 114, 163, 227, 254, 225, 254,
    254, 254, 250, 229, 254, 254, 140, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 17, 66, 14, 67, 67, 67, 59, 21, 236, 254, 106, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 253, 209, 18, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 233, 255, 83,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129,
    254, 238, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 59, 249, 254, 62, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 133, 254, 187, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 205, 248, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 126, 254, 182, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 251, 240, 57, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 221, 254, 166, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 203, 254,
    219, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    38, 254, 254, 77, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 31, 224, 254, 115, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 133, 254, 254, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 61, 242, 254, 254, 52, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 121, 254, 254, 219, 40, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 121, 254, 207, 18,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];
var Block = /** @class */ (function () {
    function Block(index) {
        this.index = index;
        this.instantiate();
    }
    Block.prototype.setColor = function () {
        // this.timeout = setTimeout(() => {
        this.block.children[this.behind].style.backgroundColor =
            "hsl(0, 0%, " +
                (90 - Math.round((activations[this.index] + 1) / 2.83)) +
                "%)";
        this.block.style.transform = "rotateY(" + angle + "deg)";
        // clearTimeout(this.timeout);
        // }, 10 * this.index);
        this.behind = this.behind == 0 ? 1 : 0;
    };
    Block.prototype.instantiate = function () {
        this.block = document.createElement("div");
        this.block.className = "block";
        this.block.style.width = size + "px";
        this.block.style.height = size + "px";
        var front = document.createElement("div");
        front.className = "block";
        front.style.backgroundColor = "hsl(0, 0%, 90%)";
        front.style.width = size + "px";
        front.style.height = size + "px";
        front.style.position = "absolute";
        front.style.transform = "rotateY(180deg)";
        var back = document.createElement("div");
        back.className = "block";
        back.style.backgroundColor = "hsl(0, 0%, 0%)";
        back.style.width = size + "px";
        back.style.height = size + "px";
        back.style.position = "absolute";
        // this.block.style.transform = "rotateY(0deg)";
        var delay = Math.round(this.index / 20) * 150;
        this.block.style.transition = "transform 2s " + delay + "ms";
        console.log(this.block.style.transition);
        document.querySelector(".box").appendChild(this.block);
        this.behind = 0;
        this.block.appendChild(front);
        this.block.appendChild(back);
    };
    return Block;
}());
var weights = [];
var biases = [];
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
    activations = activations.map(function (value) { return value / 255.0; });
    var res = feedForward(activations);
    num = res.indexOf(Math.max.apply(Math, res));
    console.log(res);
    var img = new Image(28, 28);
    img.src = num + ".png";
    img.onload = function () {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var context = canvas.getContext("2d");
        context.drawImage(img, 0, 0);
        var data = context.getImageData(0, 0, img.width, img.height).data;
        angle = angle == 0 ? 180 : 0;
        for (var i = 0; i < data.length; i += 4) {
            activations[Math.min(i / 4)] = 255 - data[i];
            blocks[Math.min(i / 4)].setColor();
        }
    };
}
function readText(text) {
    var inputs = text.split("\n");
    var sizes = [784, 50, 50, 10];
    for (var i = 0; i < sizes.length - 1; i++) {
        var result = [];
        biases.push([]);
        for (var j = 0; j < sizes[i + 1]; j++) {
            var temp = void 0;
            result.push([]);
            for (var k = 0; k < sizes[i]; k++) {
                temp = parseFloat(inputs[0]);
                inputs.shift();
                result[j].push(temp);
            }
            temp = parseFloat(inputs[0]);
            inputs.shift();
            biases[i].push(temp);
        }
        weights.push(result);
    }
}
function readFile() {
    console.log("Reading values");
    fetch("save.txt")
        .then(function (response) { return response.text(); })
        .then(function (text) { return readText(text); });
}
document.querySelector(".box").style.gap = 2 + "px";
var gapSize = parseInt(document.querySelector(".box").style.gap);
console.log(gapSize);
var boxSize = Math.sqrt(blocksNum) * (size + gapSize) - gapSize + "px";
document.querySelector(".box").style.width = boxSize;
document.querySelector(".box").style.height = boxSize;
var blocks = [];
function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
function start() {
    return __awaiter(this, void 0, void 0, function () {
        var i, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    readFile();
                    for (i = 0; i < blocksNum; i++) {
                        blocks.push(new Block(i));
                    }
                    return [4 /*yield*/, sleep(5000)];
                case 1:
                    _a.sent();
                    angle = angle == 0 ? 180 : 0;
                    for (i = 0; i < blocks.length; i++) {
                        blocks[i].setColor();
                    }
                    return [2 /*return*/];
            }
        });
    });
}
start();
//# sourceMappingURL=script.js.map