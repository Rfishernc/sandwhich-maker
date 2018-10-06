import {writeToDom} from '../helper/util.js';

let condiments;

function getCondiments() {
    return condiments;
}

function setCondiments() {
    condiments = arguments;
}

export {getCondiments, setCondiments};