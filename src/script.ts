const pixelResults: number[][] = [];
const blocksNum = 784;
const size = Math.floor(
  (Math.min(window.innerHeight, window.innerWidth) * 0.8) / Math.sqrt(blocksNum)
);
console.log(size);
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
  timeout: number;
  behind: number;
  angle = 0;
  constructor(index: number) {
    this.index = index;
    this.instantiate();
  }
  setColor() {
    let color = (255 - activations[this.index]) / 2.55;
    color = color > 98 ? 90 : color;
    let child = <HTMLElement>this.block.children[this.behind];
    child.style.backgroundColor = "hsl(0, 0%, " + color + "%)";

    this.angle = this.angle == 0 ? 180 : 0;
    this.block.style.transform = "rotateY(" + this.angle + "deg)";

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
    let delay = Math.round(this.index / 30) * 150;
    this.block.style.transition = "transform 2s " + delay + "ms";
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
  console.log("Evaluating input");
  for (let i = 0; i < blocks.length; i++) {
    let childIndex = blocks[i].behind == 0 ? 1 : 0;
    let child = <HTMLElement>blocks[i].block.children[childIndex];
    let color = parseFloat(child.style.backgroundColor.split(" ")[2]);
    color = color > 228 ? 255 : color;
    activations[i] = (255.0 - color) / 255.0;
  }

  let res = feedForward(activations);
  num = res.indexOf(Math.max(...res));
  console.log("Done evaluating input");

  for (let i = 0; i < activations.length; i++) {
    activations[i] = pixelResults[num][i];
    blocks[i].setColor();
  }
  console.log("Done setting colors");
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
  console.log("Done reading text");
}

function readFile() {
  console.log("Reading values");
  fetch("save.txt")
    .then((response) => response.text())
    .then((text) => readText(text));
}

let blocks: Block[] = [];
let coordinates: { x: number; y: number } = { x: null, y: null };
let drawing = false;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function setDrawState() {
  console.log("Drawing");
  activations = activations.map((value) => 0);
  blocks.forEach((b) => {
    b.setColor();
  });
}

async function start() {
  readFile();
  for (let i = 0; i < blocksNum; i++) {
    blocks.push(new Block(i));
  }
  await sleep(500);

  for (let i = 0; i < blocks.length; i++) {
    blocks[i].setColor();
  }

  setImages(0);
  console.log("Done setting pixel results");

  let box = <HTMLElement>document.querySelector(".box");

  box.style.gap = 2 + "px";

  const gapSize = parseInt(box.style.gap);
  console.log(gapSize);
  const boxSize = Math.sqrt(blocksNum) * (size + gapSize) - gapSize + "px";
  box.style.width = boxSize;
  box.style.height = boxSize;

  box.addEventListener("mousedown", (e) => {
    drawing = true;
    // if (coordinates.x == null && coordinates.y == null) {
    coordinates.x = (<MouseEvent>e).clientX;
    coordinates.y = (<MouseEvent>e).clientY;
    // }
  });
  box.addEventListener("mousemove", (e) => {
    if (drawing) {
      if (
        Math.abs(coordinates.x - (<MouseEvent>e).clientX) > size ||
        Math.abs(coordinates.y - (<MouseEvent>e).clientY) > size
      ) {
        coordinates.x = (<MouseEvent>e).clientX;
        coordinates.y = (<MouseEvent>e).clientY;
        blocks.forEach((b) => {
          let rect = b.block.getBoundingClientRect();
          let x = Math.abs(rect.x + size / 2 - coordinates.x);
          let y = Math.abs(rect.y + size / 2 - coordinates.y);
          let brushWidth = 1.5;
          if (x < size * brushWidth && y < size * brushWidth) {
            let child = <HTMLElement>b.block.children[b.behind == 0 ? 1 : 0];

            let color = 100 - ((x + y) / 2 / (size * brushWidth)) * 100;
            let color2 =
              parseFloat(child.style.backgroundColor.split(" ")[2]) / 2.55;
            if (color2 < color) color = color2;

            child.style.backgroundColor =
              "hsl(0, 0%, " + (color2 - color) + "%)";
          }
        });
      }
    }
  });

  box.addEventListener("mouseup", () => {
    drawing = false;
    console.log("end");
  });

  box.addEventListener("mouseleave", () => {
    drawing = false;
    console.log("end");
  });
}

function setImages(i: number) {
  let img = new Image(28, 28);
  img.src = i + ".png";
  img.onload = () => {
    console.log("Loaded image");
    let canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    let context = canvas.getContext("2d");
    context.drawImage(img, 0, 0);

    let data = context.getImageData(0, 0, img.width, img.height).data;

    pixelResults.push([]);
    for (let k = 0; k < data.length; k += 4) {
      pixelResults[i].push(255 - data[k]);
    }
    if (i == 9) {
      return;
    }
    setImages(i + 1);
    console.log("Done pixel colors");
  };
}

start();
