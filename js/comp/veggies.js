import {writeToDom} from '../helper/util.js';

let veggies;

function getVeggies() {
    return veggies;
}

function setVeggies() {
    veggies = arguments;
}

export {getVeggies, setVeggies};