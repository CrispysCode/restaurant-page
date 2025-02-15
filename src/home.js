import logoImg from "../images/tokyo.png";
export function homeModule() {
    const headerEl = document.querySelector("header");
    const content = document.querySelector("#content");
    const header = document.createElement("div");

    content.appendChild(header);
    header.classList.add("header");

    const headerText = document.createElement("h1");
    header.appendChild(headerText);
    headerText.textContent = "Tokyo Hibachi";

    
    const body = document.createElement("div");
    const logo = document.createElement("img");
    logo.classList.add('logo');
    logo.src = logoImg;
    content.appendChild(body);
    body.appendChild(logo);
}