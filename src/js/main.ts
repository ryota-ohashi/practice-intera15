import '../scss/style.scss';
import clock from "./modules/clock";

const main = () => {
  clock();
}

window.addEventListener('DOMContentLoaded', () => {
  main();
});