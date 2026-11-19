"use strict";
class Product {
    name;
    static totalProducts = 0;
    constructor(name) {
        this.name = name;
        Product.totalProducts++;
    }
}
class MenuItem1 {
    name;
    price;
    static totalItems = 0;
    constructor(name, price) {
        this.name = name;
        this.price = price;
        MenuItem1.totalItems++;
    }
}
class MenuItem2 {
    name;
    price;
    static totalItems = 0;
    static totalValue = 0;
    constructor(name, price) {
        this.name = name;
        this.price = price;
        MenuItem2.totalItems++;
        MenuItem2.totalValue += this.price;
    }
    static showSummary() {
        console.log(`Total items: ${MenuItem2.totalItems}`);
        console.log(`Total value: ${MenuItem2.totalValue}`);
    }
}
const latte = new MenuItem2("Latte", 3);
const americano = new MenuItem2("Iced Americano", 2.5);
const mocha = new MenuItem2("Mocha", 4);
const tea = new MenuItem2("Tea", 1.5);
MenuItem2.showSummary();
const cappuccino = new MenuItem2("Cappuccino", 5);
MenuItem2.showSummary();
