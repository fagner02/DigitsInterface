const size = 10;
const blocksNum = 784;
let num = 0;
let angle = 0;
let activations: number[] = [
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

class Block {
  block: HTMLElement;
  index: number;
  timeout: number;
  behind: number;
  constructor(index: number) {
    this.index = index;
    this.instantiate();
  }
  setColor() {
    // this.timeout = setTimeout(() => {
    (<HTMLElement>this.block.children[this.behind]).style.backgroundColor =
      "hsl(0, 0%, " +
      (90 - Math.round((activations[this.index] + 1) / 2.83)) +
      "%)";
    this.block.style.transform = "rotateY(" + angle + "deg)";
    // clearTimeout(this.timeout);
    // }, 10 * this.index);
    this.behind = this.behind == 0 ? 1 : 0;
  }
  instantiate() {
    this.block = document.createElement("div");
    this.block.className = "block";
    this.block.style.width = size + "px";
    this.block.style.height = size + "px";
    let front = document.createElement("div");
    front.className = "block";
    front.style.backgroundColor = "hsl(0, 0%, 90%)";
    front.style.width = size + "px";
    front.style.height = size + "px";
    front.style.position = "absolute";
    front.style.transform = "rotateY(180deg)";
    let back = document.createElement("div");
    back.className = "block";
    back.style.backgroundColor = "hsl(0, 0%, 0%)";
    back.style.width = size + "px";
    back.style.height = size + "px";
    back.style.position = "absolute";
    // this.block.style.transform = "rotateY(0deg)";
    let delay = Math.round(this.index / 20) * 150;
    this.block.style.transition = "transform 2s " + delay + "ms";
    console.log(this.block.style.transition);
    (<Element>document.querySelector(".box")).appendChild(this.block);
    this.behind = 0;
    this.block.appendChild(front);
    this.block.appendChild(back);
  }
}

let weights: number[][][] = [];
let biases: number[][] = [];

function sigmoid(layer: number[]): number[] {
  let newLayer: number[] = [];
  newLayer.fill(0.0, 0, layer.length - 1);

  for (let i = 0; i < layer.length; i++) {
    newLayer[i] = 1.0 / (1.0 + Math.exp(-layer[i]));
  }

  return newLayer;
}

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

function evaluateInput() {
  activations = activations.map((value) => value / 255.0);

  let res = feedForward(activations);
  num = res.indexOf(Math.max(...res));
  console.log(res);

  let img = new Image(28, 28);
  img.src = num + ".png";
  img.onload = () => {
    let canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    let context = canvas.getContext("2d");
    context.drawImage(img, 0, 0);
    let data = context.getImageData(0, 0, img.width, img.height).data;

    angle = angle == 0 ? 180 : 0;
    for (let i = 0; i < data.length; i += 4) {
      activations[Math.min(i / 4)] = 255 - data[i];
      blocks[Math.min(i / 4)].setColor();
    }
  };
}

function readText(text: string) {
  let inputs = text.split("\n");
  const sizes = [784, 50, 50, 10];

  for (let i = 0; i < sizes.length - 1; i++) {
    let result: number[][] = [];
    biases.push([]);
    for (let j = 0; j < sizes[i + 1]; j++) {
      let temp: number;
      result.push([]);

      for (let k = 0; k < sizes[i]; k++) {
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
    .then((response) => response.text())
    .then((text) => readText(text));
}

(<HTMLElement>document.querySelector(".box")).style.gap = 2 + "px";

const gapSize = parseInt(
  (<HTMLElement>document.querySelector(".box")).style.gap
);
console.log(gapSize);
const boxSize = Math.sqrt(blocksNum) * (size + gapSize) - gapSize + "px";
(<HTMLElement>document.querySelector(".box")).style.width = boxSize;
(<HTMLElement>document.querySelector(".box")).style.height = boxSize;

let blocks: Block[] = [];

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function start() {
  readFile();
  for (let i = 0; i < blocksNum; i++) {
    blocks.push(new Block(i));
  }
  await sleep(5000);
  angle = angle == 0 ? 180 : 0;
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].setColor();
  }
}

start();
