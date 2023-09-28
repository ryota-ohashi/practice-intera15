import '../scss/style.scss';
import clock from "./modules/clock";
import gui from "./modules/gui";

const main = () => {
  clock();
  gui();
}

window.addEventListener('DOMContentLoaded', () => {
  main();
});