import {writeToDom} from '../helper/util.js';

let cheese;

function getCheese() {
    return cheese;
}

function setCheese(list) {
    cheese = list;
}

export {getCheese, setCheese};