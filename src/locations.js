import "./styles/about.css"
export function locationsModule() {
    const content = document.querySelector("#content");

    const locationsMsg = document.createElement("p");

    content.appendChild(locationsMsg);

    locationsMsg.textContent = "Coming Soon!";
    content.classList.add("main-container");

}