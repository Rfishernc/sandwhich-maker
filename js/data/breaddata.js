import {setBread, getBread} from '../comp/bread.js';
import {writeToDom, domBuilder, menu, setButtList, getButtList} from '../helper/util.js';

function postLoad() {
    let data = JSON.parse(this.responseText);
    setBread(data.Bread);
    setButtList(data.Bread);
    domBuilder(getBread());
    menu(getButtList());
}

function postFail() {
    console.log('shits fucked');    
}

function breadGetter() {
    let request = new XMLHttpRequest();
    request.addEventListener('load', postLoad);
    request.addEventListener('error', postFail);
    request.open('GET', '../db/bread.json');
    request.send();
}

export {breadGetter};