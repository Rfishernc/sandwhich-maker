import {writeToDom} from '../helper/util.js';

let bread;

function setBread(list) {
    bread = list;
}

function getBread() {
    return bread;
}

export {getBread, setBread};