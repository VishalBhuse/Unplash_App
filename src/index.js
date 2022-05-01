import { getinput, sort, show, show2 ,navbar} from "../component/navbar.js";
import "../styles/style.css";


document.querySelector('#nav').innerHTML=navbar();

let nav1 = document.querySelector("#childrens").children;

for (let el of nav1) {
  el.addEventListener("click", show);
}

let nav2 = document.querySelector("#filtersoption1").children;
for (let el of nav2) {
  el.addEventListener("click", show2);
}

document.getElementById("sort-select").addEventListener("change", sort);
document.getElementById("inputq").addEventListener("keydown", getinput);