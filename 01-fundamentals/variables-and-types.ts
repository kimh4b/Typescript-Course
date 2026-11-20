// Lesson 1: TypeScript Basics

let drinkName: string = "Cappuccino";
let drinkPrice: number = 3.5;
let isAvailable: boolean = true;

console.log("Drink:", drinkName);
console.log("Price:", drinkPrice);
console.log("Available:", isAvailable);

// Type inference: TypeScript guesses the type from the value
let productName = "Iced Latte"; // string
let productPrice = 2.5; // number
let inStock = true; // boolean

let price = 2.5;
price = 1.5; // OK, still a number

// Array
let availableDrinks = ["Ice latte", "Ice Mocha", "Americano"];

export {};