var size = 15;
var blocksNum = 400;
var Block = /** @class */ (function () {
    function Block() {
        this.instantiate();
    }
    Block.prototype.setColor = function (color) {
        // this.color = color;
        // this.element.style.backgroundColor = this.color;
    };
    Block.prototype.instantiate = function () {
        this.block = document.createElement("div");
        this.block.className = "block";
        this.block.style.width = size + "px";
        this.block.style.height = size + "px";
        document.querySelector(".box").appendChild(this.block);
    };
    return Block;
}());
document.querySelector(".box").style.gap = 5 + "px";
var gapSize = parseInt(document.querySelector(".box").style.gap);
console.log(gapSize);
var boxSize = Math.sqrt(blocksNum) * (size + gapSize) - gapSize + "px";
document.querySelector(".box").style.width = boxSize;
document.querySelector(".box").style.height = boxSize;
var blocks = [];
for (var i = 0; i < blocksNum; i++) {
    blocks.push(new Block());
}
blocks.forEach(function (b) {
    // b.block.style.backgroundColor = "white";
});
