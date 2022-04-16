const canvas: HTMLCanvasElement = document.querySelector("#canvas");
const app: CanvasRenderingContext2D = canvas.getContext("2d");

window.onload = main;

function main() {
  const fullWidth = canvas.width,
    fullHeight = canvas.height;

  drawTriangle(app);
}

function drawTriangle(ctx: CanvasRenderingContext2D) {
  ctx.beginPath(); // 开始绘制

  // 样式
  ctx.strokeStyle = "red";

  ctx.moveTo(20, 20); // 开始绘制的坐标，第一个点
  ctx.lineTo(50, 50); // 第二个点，自动连接第一个点
  ctx.lineTo(100, 40); // 第三个点，自动连接第二个点
  ctx.closePath(); // 闭合 第三个点和第一个点

  // 绘制
  ctx.stroke();
}
