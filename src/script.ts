const blocksNum = 784;
const matrixSize = Math.sqrt(blocksNum);
const size = Math.floor(
  (Math.min(window.innerHeight, window.innerWidth) * 0.8) / matrixSize
);
const gapSize = 2;

let blockAngle = 0;
let num = 0;
let activations: number[] = [
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

class Block {
  block: HTMLElement;
  index: number;
  constructor(index: number) {
    this.index = index;
    this.instantiate();
  }
  setColor() {
    let color = (255 - activations[this.index]) / 2.55;
    color = color > 98 ? 90 : color;

    this.block.style.transform = "rotateY(" + blockAngle + "deg)";

    setTimeout(() => {
      this.block.style.backgroundColor = "hsl(0, 0%, " + color + "%)";
    }, 650);
  }
  instantiate() {
    this.block = document.createElement("div");
    this.block.className = "block";
    this.block.style.width = size + "px";
    this.block.style.height = size + "px";
    this.block.style.backgroundColor = "hsl(0, 0%, 90%)";
    this.block.style.transition = "transform 2s";

    (<Element>document.querySelector(".box")).appendChild(this.block);
  }
}

function sigmoid(layer: number[]): number[] {
  let newLayer: number[] = [];
  newLayer.fill(0.0, 0, layer.length - 1);

  for (let i = 0; i < layer.length; i++) {
    newLayer[i] = 1.0 / (1.0 + Math.exp(-layer[i]));
  }

  return newLayer;
}
declare const weights: number[][][];
declare const biases: number[][];
function feedForward(layer: number[]) {
  for (let i = 0; i < weights.length; i++) {
    var newLayer: number[] = [];

    for (let j = 0; j < weights[i].length; j++) {
      let sigmoidOut = 0.0;

      for (let k = 0; k < weights[i][j].length; k++) {
        sigmoidOut += weights[i][j][k] * layer[k];
      }

      newLayer.push(sigmoidOut / 10.0 + biases[i][j]);
    }

    layer = sigmoid(newLayer);
  }

  return layer;
}

declare const digits: number[][];
function evaluateInput() {
  console.log("Evaluating input");
  for (let i = 0; i < blocks.length; i++) {
    let color = parseFloat(blocks[i].block.style.backgroundColor.split(" ")[2]);
    color = color > 228 ? 255 : color;
    activations[i] = (255.0 - color) / 255.0;
  }

  let res = feedForward(activations);
  num = res.indexOf(Math.max(...res));
  console.log("Done evaluating input");

  for (let i = 0; i < digits[num].length; i++) {
    activations[i] = digits[num][i];
  }
  rotateBlocks();
  console.log("Done setting colors");
}

let blocks: Block[] = [];
let coordinates: { x: number; y: number } = { x: null, y: null };
let drawing = false;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function rotateBlocks() {
  blockAngle = blockAngle == 0 ? 360 : 0;
  let chunk = 0;
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].setColor();
    chunk++;
    if (chunk == 15) {
      chunk = 0;
      await sleep(10);
    }
  }
}

function setDrawState() {
  activations = activations.map(() => 0);
  rotateBlocks();
}

async function start() {
  let box = <HTMLElement>document.querySelector(".box");

  const boxSize = matrixSize * (size + gapSize) - gapSize + "px";

  box.style.gap = gapSize + "px";
  box.style.width = boxSize;
  box.style.height = boxSize;

  box.addEventListener("mousedown", (e) => {
    drawing = true;
    coordinates.x = e.clientX;
    coordinates.y = e.clientY;
  });
  box.addEventListener("mousemove", (e) => {
    move(e.clientX, e.clientY);
  });
  box.addEventListener("mouseup", () => {
    drawing = false;
  });
  box.addEventListener("mouseleave", () => {
    drawing = false;
  });

  box.addEventListener("touchstart", (e) => {
    drawing = true;
    coordinates.x = e.touches[0].clientX;
    coordinates.y = e.touches[0].clientY;
  });
  box.addEventListener("touchmove", (e) => {
    move(e.touches[0].clientX, e.touches[0].clientY);
  });
  box.addEventListener("touchend", () => {
    drawing = false;
  });

  for (let i = 0; i < blocksNum; i++) {
    blocks.push(new Block(i));
  }

  await sleep(500);

  rotateBlocks();
}

start();

function move(clientX: number, clientY: number) {
  if (!drawing) {
    return;
  }

  if (
    !(
      Math.abs(coordinates.x - clientX) > size ||
      Math.abs(coordinates.y - clientY) > size
    )
  ) {
    return;
  }

  coordinates.x = clientX;
  coordinates.y = clientY;

  let brushWidth = 1.4;
  let startPos = blocks[0].block.getBoundingClientRect();

  for (let k = 0; k <= Math.ceil(brushWidth); k++) {
    let length = (k / Math.ceil(brushWidth)) * brushWidth * (size + gapSize);
    let hip = Math.sqrt(length ** 2 + (size + gapSize) ** 2);

    let stepAngle = Math.asin((size + gapSize) / hip);

    for (let i = 0; i < Math.ceil((2 * Math.PI) / stepAngle); i++) {
      let sideX = Math.sin(i * stepAngle) * length;
      let sideY = Math.cos(i * stepAngle) * length;

      let indexes = {
        x: Math.floor((coordinates.x - startPos.x + sideX) / (size + gapSize)),
        y: Math.floor((coordinates.y - startPos.y + sideY) / (size + gapSize)),
      };

      let b = blocks[indexes.y * matrixSize + indexes.x];
      if (!b) {
        continue;
      }

      let rect = b.block.getBoundingClientRect();
      let x = Math.abs(rect.x + size / 2 - coordinates.x);
      let y = Math.abs(rect.y + size / 2 - coordinates.y);

      let a = 1 - (x + y) / 2 / ((size + gapSize) * brushWidth);
      if (a < 0) a = 0;

      let color = a * 50;
      let color2 =
        parseFloat(b.block.style.backgroundColor.split(" ")[2]) / 2.55;
      if (color2 < color) color = color2;

      b.block.style.backgroundColor = `hsl(0, 0%, ${color2 - color}%)`;
    }
  }
}
