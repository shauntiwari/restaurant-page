import {createHome} from "./home.js";

function initialLoad() {
    const body = document.querySelector("body");
    body.appendChild(createHome());
}

export {initialLoad};