import {writeToDom} from '../helper/util.js';

let condiments;

function getCondiments() {
    return condiments;
}

function setCondiments(list) {
    condiments = list;
}

export {getCondiments, setCondiments};