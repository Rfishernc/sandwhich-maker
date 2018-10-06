import {setCondiments, getCondiments} from '../comp/condiments';
import {writeToDom, domBuilder} from '../helper/util.js';

function postLoad() {
    let data = JSON.parse(this.responseText);
    setCondiments(data.Condiments);
    domBuilder(getCondiments());
}

function postFail() {
    console.log('shits fucked');    
}

function condimentsGetter() {
    let request = new XMLHttpRequest();
    request.addEventListener('load', postLoad);
    request.addEventListener('error', postFail);
    request.open('GET', '../db/condiments.json');
    request.send();
}

export {condimentsGetter};