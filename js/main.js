import { breadGetter } from "./data/breaddata.js";
import { cheeseGetter } from "./data/cheesedata.js";
import { condimentsGetter } from "./data/condimentsdata.js";
import { meatGetter } from "./data/meatdata.js";
import { veggiesGetter } from "./data/veggiesdata.js";
import { ingredientEvent, categoryEvent } from "./helper/util.js";

function init() {
    breadGetter();
    // cheeseGetter();
    // condimentsGetter();
    // meatGetter(); 
    // veggiesGetter();
    ingredientEvent();
    categoryEvent();
}

init();