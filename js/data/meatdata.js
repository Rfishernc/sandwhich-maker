import {setMeat} from '../comp/meat';

function postLoad() {
    let data = JSON.parse(this.responseText);
    setBread(data.Meat);
}

function postFail() {
    console.log('shits fucked');    
}

function meatGetter() {
    let request = new XMLHttpRequest();
    request.addEventListener('load', postLoad);
    request.addEventListener('error', postFail);
    request.open('GET', './db/meat.json');
    request.send();
}

export {meatGetter};