import {setCheese} from '../comp/cheese.js';
import {writeToDom} from '../helper/util.js';

function postLoad() {
    let data = JSON.parse(this.responseText);
    setBread(data.Cheese);
}

function postFail() {
    console.log('shits fucked');    
}

function cheeseGetter() {
    let request = new XMLHttpRequest();
    request.addEventListener('load', postLoad);
    request.addEventListener('error', postFail);
    request.open('GET', './db/cheese.json');
    request.send();
}

export {cheeseGetter};