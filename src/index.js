import "./styles/styles.css";
import { homeModule } from "./home.js";
import { aboutModule } from "./about.js";
import { menuModule } from "./menu.js";
import { locationsModule } from "./locations.js";

const content = document.querySelector("#content");
const homeBtn = document.querySelector(".homeBtn");
const aboutBtn = document.querySelector(".aboutBtn");
const menuBtn = document.querySelector(".menuBtn");
const locationsBtn = document.querySelector(".locationsBtn");


homeModule();

let currentModule = homeModule; //Solves the getter issue with modules

function navHandler(module) {
    content.textContent = "";
    module();
    currentModule = module;
}

homeBtn.addEventListener("click", () => {navHandler(homeModule)});
aboutBtn.addEventListener("click", () => {navHandler(aboutModule)});
menuBtn.addEventListener("click", () => {navHandler(menuModule)});
locationsBtn.addEventListener("click", () => {navHandler(locationsModule)})
