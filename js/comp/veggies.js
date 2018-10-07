import {writeToDom} from '../helper/util.js';

let veggies;

function getVeggies() {
    return veggies;
}

function setVeggies(list) {
    veggies = list;
}

export {getVeggies, setVeggies};