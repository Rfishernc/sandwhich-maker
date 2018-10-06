import { breadGetter } from "./data/breaddata";
import { cheeseGetter } from "./data/cheesedata";
import { condimentsGetter } from "./data/condimentsdata";
import { meatGetter } from "./data/meatdata";
import { veggiesGetter } from "./data/veggiesdata";
import { ingredientEvent, categoryEvent } from "./helper/util";

function init() {
    breadGetter();
    cheeseGetter();
    condimentsGetter();
    meatGetter(); 
    veggiesGetter();
    ingredientEvent();
    categoryEvent();
}

init();