import {setMeat, getMeat} from '../comp/meat';
import {writeToDom, domBuilder} from '../helper/util.js';

function postLoad() {
    let data = JSON.parse(this.responseText);
    setMeat(data.Meat);
    domBuilder(getMeat());
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