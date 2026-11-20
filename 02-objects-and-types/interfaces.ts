// Interfaces (type vs interface) and extending an interface

interface Coffee {
    name: string,
    price: number,
    isAvailable: boolean,
}

let latte: Coffee = {
    name: "Latte",
    price: 3,
    isAvailable: true,
};

// Extending an interface
interface MenuCoffee {
    name: string,
    price: number,
}

interface Dessert extends MenuCoffee {
    isSweet: boolean,
}

let cake: Dessert = {
    name: "Chocolate Cake",
    price: 3.5,
    isSweet: true,
};

export {};