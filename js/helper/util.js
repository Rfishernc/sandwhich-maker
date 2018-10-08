let buttList = [];
let price = 0;

function priceMaker() {
    let ingridient = ingredientEvent();
    let category = categoryEvent();
    
}

function writeToDom(div, string) {
    document.getElementById(div).innerHTML = string;
}

function addToDom(div, string) {
    document.getElementById(div).innerHTML += string;
}

function setButtList(category) {
    buttList.push(category[0]);   
}

function getButtList() {
    return buttList;
}

function domBuilder(category) {
    let string = '';
    string +=   `<div class='category' id='${category[0]}Container'>`
    string +=       `<button class='menuButt' id='${category[0]}Butt'>${category[0]}</button>`
    string +=       `<div class='scrollOverDiv' id='${category[0]}Scroll'>`
    for(let i = 1; i < category.length; i++) {
        let key = Object.keys(category[i]);
        string +=           `<button id='${key}' class='scrollButt ingredient'>${key}</button>`
    }
    string +=       `</div>`
    string +=   `</div>`;
    addToDom('categoriesDiv', string);
}

function menu(buttlist) {
    for(let i = 0; i < buttList.length; i++) {    
        document.getElementById(buttlist[i]+'Butt').addEventListener('mouseover', function() {
            document.getElementById(buttlist[i]+'Scroll').style.display = 'inline';
        });
        document.getElementById(buttlist[i]+'Container').addEventListener('mouseout', function() {
            document.getElementById(buttlist[i]+'Scroll').style.display = 'none';
        });
    }
}

function ingredientEvent() {
    let ingredient;
    document.getElementById('categoriesDiv').addEventListener('click', function() {  
        if(event.target.classList.contains('ingredient') === true) {
            ingredient = event.target.id;
        }
    })
    return ingredient;
}

function categoryEvent() {
    let category;
    document.getElementById('categoriesDiv').addEventListener('click', function() { 
        if(event.target.classList.contains('ingredient') === true) {
            category = event.target.parentNode.id;
        }
    })
    return category;
}

export {writeToDom, addToDom, ingredientEvent, categoryEvent, domBuilder, menu, setButtList, getButtList};