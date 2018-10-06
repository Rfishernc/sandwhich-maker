function writeToDom(div, string) {
    document.getElementById(div).innerHTML = string;
}

function addToDom(div, string) {
    document.getElementById(div).innerHTML += string;
}

function domBuilder(category) {
    let string = '';
    string +=   `<div class='category'>`
    string +=       `<button class='menuButt'>${category[0]}</button>`
    string +=       `<div class='scrolloverDiv>`
    for(let i = 1; i < category.length; i++) {
        string +=           `<button>${category[Object.keys(category)[i]]}</button>`
    }
    string +=       `</div>`
    string +=   `</div>`;
    writeToDom('categoriesDiv', string);
}

function ingredientEvent() {
    document.getElementById('categoriesDiv').addEventListener('mouseup', function() {
        let ingredient;
        if(event.target.className.contains('ingredient') === true) {
            ingredient = event.target.id;
        }
    })
    return ingredient;
}

function categoryEvent() {
    document.getElementById('categoriesDiv').addEventListener('mouseup', function() {
        let category;
        if(event.target.className.contains('ingredient') === true) {
            category = event.target.parentNode.id;
        }
    })
    return category;
}

export {writeToDom, addToDom, ingredientEvent, categoryEvent, domBuilder};