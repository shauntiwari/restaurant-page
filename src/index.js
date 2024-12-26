import "./styles.css";
import { initialLoad } from "./initialLoad.js";
import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js";

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");

function clearContent() {
    const content = document.getElementById("content");
    if (content) {
        content.remove();
    }
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(btn => btn.classList.remove('active-tab'));
    button.classList.add('active-tab');
}

homeButton.onclick = function() {
    clearContent();
    document.querySelector("body").appendChild(createHome());
    setActiveButton(homeButton);
}

menuButton.onclick = function() {
    clearContent();
    document.querySelector("body").appendChild(createMenu());
    setActiveButton(menuButton);
}

contactButton.onclick = function() {
    clearContent();
    document.querySelector("body").appendChild(createContact());
    setActiveButton(contactButton);
}

initialLoad();
setActiveButton(homeButton);