// Functions

function showMenu() {
    console.log('Welcome to Daily Brew!');
}
showMenu();

function showDrink(drinkName: string) {
    console.log(drinkName);
}
showDrink('Iced Latte');

function getTotal(drinkPrice: number, quantity: number): number {
    return drinkPrice * quantity;
}

let latte = 2.5;
let orderTotal = getTotal(latte, 3);
console.log(orderTotal);

export {};