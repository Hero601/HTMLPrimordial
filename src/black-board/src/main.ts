import "./style.css";

class BlackBoard {
  constructor(
    public el: HTMLCanvasElement = document.querySelector<HTMLCanvasElement>(
      "#canvas"
    )!,
    private width: number = el.width,
    private height: number = el.height,
    public app = el.getContext("2d")!,
    public bgColor = "#000",
    public lineColor = "#fff"
  ) {
    this.initBackGround();
    this.initBindEvent();
  }

  // 绑定事件
  private initBindEvent() {
    // 保存 bind 之后的 drawLine，可以移除事件
    const callback = this.drawLine.bind(this);
    this.el.addEventListener("mousedown", () => {
      this.app.beginPath();
      this.app.strokeStyle = this.lineColor;
      this.el.addEventListener("mousemove", callback);
    });
    document.addEventListener("mouseup", () => {
      this.el.removeEventListener("mousemove", callback);
    });
  }

  // 初始化功能按钮
  public installClearBtn() {
    const btns = document.createElement("div");

    const clearButton = document.createElement("button");
    clearButton.innerText = "清屏";
    clearButton.addEventListener("click", () => {
      this.initBackGround();
    });

    btns.insertAdjacentElement("afterbegin", clearButton);
    document.body.appendChild(btns);

    return this;
  }

  // 初始化背景
  private initBackGround(color?: string) {
    this.app.fillStyle = color || this.bgColor;
    this.app.fillRect(0, 0, this.width, this.height);
  }

  // 截图
  public installScreenShot() {
    const screenShotBtn = document.createElement("button");
    screenShotBtn.innerText = "截图";
    document.body.appendChild(screenShotBtn);

    const img = document.createElement("img");
    img.width = 200;
    img.height = 150;
    screenShotBtn.addEventListener("click", () => {
      img.src = this.el.toDataURL("image/jpeg");
    });

    document.body.appendChild(img);

    return this;
  }

  // 形成选择颜色的色块
  public installColorsBtn() {
    const colors = ["#eccc68", "#ff6b81", "#7bed9f", "#ced6e0"];
    const box = document.createElement("div");

    colors.forEach((item) => {
      const btn = document.createElement("button");
      btn.innerText = item;
      btn.style.cssText = `background-color: ${item}; border: none; margin: 0 5px;`;

      btn.addEventListener("click", (event: MouseEvent) => {
        const color = (event.target as HTMLButtonElement).innerText;
        this.setLineColor(color);
      });

      box.appendChild(btn);
    });

    document.body.appendChild(box);

    return this;
  }

  // 划线
  private drawLine(event: MouseEvent) {
    this.app.lineTo(event.offsetX, event.offsetY);
    this.app.stroke();
  }

  // 清屏
  public clear() {
    this.initBackGround();

    return this;
  }

  public setBGColor(color: string) {
    this.bgColor = color;
    this.initBackGround();

    return this;
  }

  public setLineColor(color: string) {
    this.lineColor = color;
    return this;
  }
}

const bb = new BlackBoard();

bb.installClearBtn().installColorsBtn().installScreenShot();

setTimeout(() => {}, 3000);
