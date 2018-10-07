import {setMeat, getMeat} from '../comp/meat.js';
import {writeToDom, domBuilder, menu, getId} from '../helper/util.js';

function postLoad() {
    let data = JSON.parse(this.responseText);
    setMeat(data.Meat);
    domBuilder(getMeat());
    menu();
}

function postFail() {
    console.log('shits fucked');    
}

function meatGetter() {
    let request = new XMLHttpRequest();
    request.addEventListener('load', postLoad);
    request.addEventListener('error', postFail);
    request.open('GET', '../db/meat.json');
    request.send();
}

export {meatGetter};