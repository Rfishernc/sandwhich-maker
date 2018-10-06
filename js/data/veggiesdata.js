import {setVeggies} from '../comp/veggies';
import {writeToDom} from '../helper/util.js';

function postLoad() {
    let data = JSON.parse(this.responseText);
    setBread(data.Veggies);
}

function postFail() {
    console.log('shits fucked');    
}

function veggiesGetter() {
    let request = new XMLHttpRequest();
    request.addEventListener('load', postLoad);
    request.addEventListener('error', postFail);
    request.open('GET', './db/veggies.json');
    request.send();
}

export {veggiesGetter};