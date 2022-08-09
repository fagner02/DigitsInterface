const size = 15;
const blocksNum = 400;

class Block {
  block: HTMLElement;
  constructor() {
    this.instantiate();
  }
  setColor(color) {
    // this.color = color;
    // this.element.style.backgroundColor = this.color;
  }
  instantiate() {
    this.block = document.createElement("div");
    this.block.className = "block";
    this.block.style.width = size + "px";
    this.block.style.height = size + "px";
    (<Element>document.querySelector(".box")).appendChild(this.block);
  }
}

(<HTMLElement>document.querySelector(".box")).style.gap = 5 + "px";

const gapSize = parseInt(
  (<HTMLElement>document.querySelector(".box")).style.gap
);
console.log(gapSize);
const boxSize = Math.sqrt(blocksNum) * (size + gapSize) - gapSize + "px";
(<HTMLElement>document.querySelector(".box")).style.width = boxSize;
(<HTMLElement>document.querySelector(".box")).style.height = boxSize;

let blocks: Block[] = [];

for (let i = 0; i < blocksNum; i++) {
  blocks.push(new Block());
}

blocks.forEach((b) => {
  // b.block.style.backgroundColor = "white";
});
