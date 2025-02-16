import "./styles/about.css"
export function menuModule() {
    const content = document.querySelector("#content");

    const menuMsg = document.createElement("p");

    content.appendChild(menuMsg);

    menuMsg.textContent = "Coming Soon!";
    content.classList.add("main-container");

}