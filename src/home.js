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
    body.classList.add('body-container');
    const logo = document.createElement("img");
    logo.classList.add('logo');
    logo.src = logoImg;
    content.appendChild(body);
    body.appendChild(logo);

    const homeMsg = document.createElement("p");
    homeMsg.textContent = "We are serving handmade burger and Japanese cuisine such as Hibachi, Lo mein noodle, fried rice and Sushi. We offer carry out service and catering only.";

    body.appendChild(homeMsg);

    const footer = document.createElement("footer");
    content.appendChild(footer);

    const footerMsg = document.createElement("p");
    footerMsg.textContent = "Copyright Tokyo Hibachi 2025";
    footerMsg.classList.add('footerMsg');
    footer.appendChild(footerMsg);

}