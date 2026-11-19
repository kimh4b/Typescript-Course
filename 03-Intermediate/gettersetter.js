"use strict";
//Getter and Setter
class MenuItem {
    _price;
    constructor(price) {
        this._price = price;
    }
    get price() {
        return this._price;
    }
    set price(price) {
        if (price > 0) {
            this._price = price;
        }
    }
}
let latte = new MenuItem(2.5);
latte.price = 3;
console.log(latte.price);
latte.price = -5;
console.log(latte.price);
class Account {
    _balance;
    constructor(balance) {
        this._balance = balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(newBalance) {
        if (newBalance >= 0) {
            this._balance = newBalance;
        }
    }
}
let newAccount = new Account(500);
newAccount.balance = 800;
console.log(newAccount.balance);
newAccount.balance = -100;
console.log(newAccount.balance);
