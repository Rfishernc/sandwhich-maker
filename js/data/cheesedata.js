import {setCheese, getCheese} from '../comp/cheese.js';
import {writeToDom, domBuilder, menu, setButtList, getButtList} from '../helper/util.js';

function postLoad() {
    let data = JSON.parse(this.responseText);
    setCheese(data.Cheese);
    setButtList(data.Cheese);
    domBuilder(getCheese());
    menu(getButtList());
}

function postFail() {
    console.log('shits fucked');    
}

function cheeseGetter() {
    let request = new XMLHttpRequest();
    request.addEventListener('load', postLoad);
    request.addEventListener('error', postFail);
    request.open('GET', '../db/cheese.json');
    request.send();
}

export {cheeseGetter};