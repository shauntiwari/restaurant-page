import {createHome} from "./home.js";

function initialLoad() {
    const body = document.getElementsByTagName("body");
    body.appendChild(createHome());
}