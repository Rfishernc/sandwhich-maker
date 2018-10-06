import {writeToDom} from '../helper/util.js';

let bread;

function getBread() {
    return bread;
}

function setBread() {
    bread = arguments;
}

export {getBread, setBread};