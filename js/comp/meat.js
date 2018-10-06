import {writeToDom} from '../helper/util.js';

let meat;

function getMeat() {
    return meat;
}

function setMeat() {
    meat = arguments;
}

export {getMeat, setMeat};