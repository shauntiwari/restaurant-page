import "./styles.css";
import {initialLoad} from "./initialLoad.js";
import {createHome} from "./home.js";

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");

function clearContent() {
    const content = document.getElementById("content");
    if (content) {
        content.remove();
    }
}

homeButton.onclick = function() {
    clearContent();
    document.querySelector("body").appendChild(createHome());
}

menuButton.onclick = function() {
    clearContent();
    //append menu page content here
}

contactButton.onclick = function() {
    clearContent();
    //append contact page content here
}

initialLoad();