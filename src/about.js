import "./styles/about.css"
export function aboutModule() {
    const content = document.querySelector("#content");

    const aboutMsg = document.createElement("p");

    content.appendChild(aboutMsg);

    aboutMsg.textContent = "Coming Soon!";
    content.classList.add("main-container");

}