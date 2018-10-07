import {writeToDom} from '../helper/util.js';

let meat;

function getMeat() {
    return meat;
}

function setMeat(list) {
    meat = list;
}

export {getMeat, setMeat};