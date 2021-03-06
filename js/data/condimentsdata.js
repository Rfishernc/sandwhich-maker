import {setCondiments, getCondiments} from '../comp/condiments.js';
import {writeToDom, domBuilder, menu, setButtList, getButtList} from '../helper/util.js';

function postLoad() {
    let data = JSON.parse(this.responseText);
    setCondiments(data.Condiments);
    setButtList(data.Condiments);
    domBuilder(getCondiments());
    menu(getButtList());
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