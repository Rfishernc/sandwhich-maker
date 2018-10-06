function writeToDom(div, string) {
    document.getElementById(div).innerHTML = string;
}

function addToDom(div, string) {
    document.getElementById(div).innerHTML += string;
}

function domBuilder(category) {
    let string = '';
    string +=   `<div id=${category}>`
    string +=       `<`
    string +=
    string +=
    string +=
    string +=   `</div>`
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

export {writeToDom, addToDom, ingredientEvent, categoryEvent};