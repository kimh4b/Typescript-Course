//If condition and type narrowing

let price : number | string = 4.5;

if(typeof price === "number"){
    console.log(price * 2);
}else{
    console.log(price);
}

//Optional and type

type MenuItem = {
    name: string,
    price: number,
    category?: string,
}

let latte : MenuItem = {
    name: "Iced Latte",
    price: 2.5,
}

let mocha : MenuItem = {
    name: "Iced Mocha",
    price: 3,
    category: "Coffee",
}

// type vs interface

interface Coffee {
    name: string,
    price: number,
    isAvailable: boolean,
}

let lattee : Coffee = {
    name: "Latte",
    price: 3,
    isAvailable: true,
}

// entended interface

interface MenuCoffee{
    name: string,
    price: number,
}

interface Dessert extends MenuCoffee{
    isSweet: boolean,
}

let cake: Dessert = {
    name: "Chocolate Cake",
    price: 3.5,
    isSweet: true,
}

export{}