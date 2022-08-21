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
        this.angle = 0;
        this.index = index;
        this.position = [index / matrixSize, index % matrixSize];
        this.instantiate();
    }
    Block.prototype.setColor = function () {
        var color = (255 - activations[this.index]) / 2.55;
        color = color > 98 ? 90 : color;
        var child = this.block.children[this.behind];
        child.style.backgroundColor = "hsl(0, 0%, " + color + "%)";
        this.angle = this.angle == 0 ? 180 : 0;
        this.block.style.transform = "rotateY(" + this.angle + "deg)";
        this.behind = this.behind == 0 ? 1 : 0;
    };
    Block.prototype.instantiate = function () {
        this.block = document.createElement("div");
        this.block.className = "block";
        this.block.style.width = size + "px";
        this.block.style.height = size + "px";
        this.block.id = this.index.toString();
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
        var delay = Math.round(this.index / 30) * 150;
        this.block.style.transition = "transform 2s " + delay + "ms";
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
    console.log("Evaluating input");
    for (var i = 0; i < blocks.length; i++) {
        var childIndex = blocks[i].behind == 0 ? 1 : 0;
        var child = blocks[i].block.children[childIndex];
        var color = parseFloat(child.style.backgroundColor.split(" ")[2]);
        color = color > 228 ? 255 : color;
        activations[i] = (255.0 - color) / 255.0;
    }
    var res = feedForward(activations);
    num = res.indexOf(Math.max.apply(Math, res));
    console.log("Done evaluating input");
    var img = new Image(28, 28);
    img.src = num + ".png";
    img.onload = function () {
        console.log("Loaded image");
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var context = canvas.getContext("2d");
        context.drawImage(img, 0, 0);
        var data = context.getImageData(0, 0, img.width, img.height).data;
        for (var i = 0; i < data.length; i += 4) {
            activations[i / 4] = 255 - data[i];
            blocks[i / 4].setColor();
        }
        console.log("Done setting colors");
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
    console.log("Done reading text");
}
function readFile() {
    console.log("Reading values");
    fetch("save.txt")
        .then(function (response) { return response.text(); })
        .then(function (text) { return readText(text); });
}
var blocks = [];
var coordinates = { x: null, y: null };
var drawing = false;
function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
function setDrawState() {
    console.log("Drawing");
    activations = activations.map(function () { return 0; });
    blocks.forEach(function (b) {
        b.setColor();
    });
    setTimeout(function () {
        console.log("Done drawing");
    }, Math.round(blocksNum / 30) * 150 + 2000);
}
var gapSize = 2;
function start() {
    return __awaiter(this, void 0, void 0, function () {
        var box, boxSize, i, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    readFile();
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
                        console.log("end");
                    });
                    box.addEventListener("mouseleave", function () {
                        drawing = false;
                        console.log("end");
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
                        console.log("end");
                    });
                    for (i = 0; i < blocksNum; i++) {
                        blocks.push(new Block(i));
                    }
                    return [4 /*yield*/, sleep(500)];
                case 1:
                    _a.sent();
                    for (i = 0; i < blocks.length; i++) {
                        blocks[i].setColor();
                    }
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
        var m = 0;
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
            // blocks.forEach((b) => {
            var rect = b.block.getBoundingClientRect();
            var x = Math.abs(rect.x + size / 2 - coordinates.x);
            var y = Math.abs(rect.y + size / 2 - coordinates.y);
            // if (!(x < size * brushWidth && y < size * brushWidth)) {
            //   continue;
            // }
            var child = b.block.children[b.behind == 0 ? 1 : 0];
            var a = 1 - (x + y) / 2 / ((size + gapSize) * brushWidth);
            if (a < 0)
                a = 0;
            var color = a * 50;
            var color2 = parseFloat(child.style.backgroundColor.split(" ")[2]) / 2.55;
            if (color2 < color)
                color = color2;
            child.style.backgroundColor = "hsl(0, 0%, ".concat(color2 - color, "%)");
            // });
            m++;
        }
        console.log(m);
    }
}
//# sourceMappingURL=script.js.map