import {setCondiments} from '../comp/condiments';

function postLoad() {
    let data = JSON.parse(this.responseText);
    setBread(data.Condiments);
}

function postFail() {
    console.log('shits fucked');    
}

function condimentsGetter() {
    let request = new XMLHttpRequest();
    request.addEventListener('load', postLoad);
    request.addEventListener('error', postFail);
    request.open('GET', './db/condiments.json');
    request.send();
}

export {condimentsGetter};