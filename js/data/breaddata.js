import {setBread} from '../comp/bread.js';

function postLoad() {
    let data = JSON.parse(this.responseText);
    setBread(data.Bread);
}

function postFail() {
    console.log('shits fucked');    
}

function breadGetter() {
    let request = new XMLHttpRequest();
    request.addEventListener('load', postLoad);
    request.addEventListener('error', postFail);
    request.open('GET', './db/bread.json');
    request.send();
}

export {breadGetter};