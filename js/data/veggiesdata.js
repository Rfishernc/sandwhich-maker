import {setVeggies, getVeggies} from '../comp/veggies';
import {writeToDom, domBuilder} from '../helper/util.js';

function postLoad() {
    let data = JSON.parse(this.responseText);
    setVeggies(data.Veggies);
    domBuilder(getVeggies);
}

function postFail() {
    console.log('shits fucked');    
}

function veggiesGetter() {
    let request = new XMLHttpRequest();
    request.addEventListener('load', postLoad);
    request.addEventListener('error', postFail);
    request.open('GET', '../db/veggies.json');
    request.send();
}

export {veggiesGetter};