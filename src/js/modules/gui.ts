import GUI from "lil-gui";

const style: { [key: string]: string } = {
  "--clock-num": "#6f2dbd",
  "--clock-bg": "#000",
  "--body-bg": "#fff",
};

function applyStyle(target: HTMLElement, style: { [key: string]: string }): void {
  Object.keys(style).forEach((key) => {
    target.style.setProperty(key, style[key]);
  });
}

const initGUI = () => {
  const body = document.body;

  applyStyle(body, style);

  const gui = new GUI();

  gui.addColor(style, "--clock-num").onChange(() => {
    applyStyle(body, style);
  });
  gui.addColor(style, "--clock-bg").onChange(() => {
    applyStyle(body, style);
  });
  gui.addColor(style, "--body-bg").onChange(() => {
    applyStyle(body, style);
  });
};

export default initGUI;
