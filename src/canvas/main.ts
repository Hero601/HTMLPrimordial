const canvas: HTMLCanvasElement = document.querySelector("#canvas");
const app: CanvasRenderingContext2D = canvas.getContext("2d");

import imgSrc from "./demo2.jpeg";

window.onload = main;

function main() {
  const fullWidth = canvas.width,
    fullHeight = canvas.height;

  const imgEl = document.createElement("img");
  imgEl.src = imgSrc;

  imgEl.onload = () => {
    const num = scale(imgEl, canvas);

    canvas.width = imgEl.naturalWidth * num;
    canvas.height = imgEl.naturalHeight * num;

    app.drawImage(imgEl, 0, 0, fullWidth, fullHeight);
  };
}

// 根据 canvas 和 图片 大小计算应该缩放的值
function scale(img: HTMLImageElement, el: HTMLCanvasElement): number {
  return Math.min(el.width / img.naturalWidth, el.height / img.naturalHeight);
}
