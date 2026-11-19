"use strict";
class MenuItem {
    showInfo() {
        console.log("this is menu item.");
    }
}
class Coffee extends MenuItem {
    showPrice() {
        console.log("20$");
    }
    showInfo() {
        console.log("this is Coffee.");
    }
}
let latte = new Coffee();
let item = new Coffee();
item.showInfo();
latte.showInfo();
