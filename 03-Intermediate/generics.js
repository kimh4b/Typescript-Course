"use strict";
function returnValue(value) {
    return value;
}
const id = 1;
const name1 = "hello";
console.log(returnValue(id));
console.log(returnValue(name1));
function keepItem(item) {
    return item;
}
console.log(keepItem("Latte"));
console.log(keepItem(3.50));
console.log(keepItem(true));
const coffeee = {
    value: "Latte"
};
const pricee = {
    value: 3.5,
};
const selectedDrink = {
    item: "Latte",
};
const selectedPrice = {
    item: 3.5,
};
//=============================
function makeRecord(key, value) {
    return [key, value];
}
console.log(makeRecord("price", 3.5));
