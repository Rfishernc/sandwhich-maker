function writeToDom(div, string) {
    document.getElementById(div).innerHTML = string;
}

function addToDom(div, string) {
    document.getElementById(div).innerHTML += string;
}

let id = '';

function setId(cat) {
    id=cat[0];
}

function getId() {
    return id;
}

function domBuilder(category) {
    let string = '';
    setId(category);
    string +=   `<div class='category' id='${category[0]}Container'>`
    string +=       `<button class='menuButt' id='${category[0]}Butt'>${category[0]}</button>`
    string +=       `<div class='scrollOverDiv' id='${id}Scroll'>`
    for(let i = 1; i < category.length; i++) {
        string +=           `<button>${category[Object.keys(category)[i]]}</button>`
    }
    string +=       `</div>`
    string +=   `</div>`;
    addToDom('categoriesDiv', string);
}

function menu() {
    getId();
    document.getElementById(id+'Butt').addEventListener('mouseover', function() {
        document.getElementById(id+'Scroll').classList.toggle('show');
    });
    document.getElementById(id+'Container').addEventListener('mouseout', function() {
        document.getElementById(id+'Scroll').classList.toggle('show');
    });
}

function ingredientEvent() {
    let ingredient;
    document.getElementById('categoriesDiv').addEventListener('mouseup', function() {  
        if(event.target.classList.contains('ingredient') === true) {
            ingredient = event.target.id;
        }
    })
    return ingredient;
}

function categoryEvent() {
    let category;
    document.getElementById('categoriesDiv').addEventListener('mouseup', function() { 
        if(event.target.classList.contains('ingredient') === true) {
            category = event.target.parentNode.id;
        }
    })
    return category;
}

export {writeToDom, addToDom, ingredientEvent, categoryEvent, domBuilder, menu, getId};