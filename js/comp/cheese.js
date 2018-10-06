import {writeToDom} from '../helper/util.js';

let cheese;

function getCheese() {
    return cheese;
}

function setCheese() {
    cheese = arguments;
}

export {getCheese, setCheese};