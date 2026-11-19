//Function
function showMenu(){
    console.log('Welcome to Daily Brew!');
}
showMenu();

function showDrink(drinkName: string){
    console.log(drinkName);
}
showDrink('Iced Latte');

function multiplyPrice(price: number, quantity: number): number{
    return price * quantity;
}
let total = multiplyPrice(4, 3);
console.log(total);


let latte = 2.5;

function getTotal(drinksPrice: number, quantity: number): number{
    return drinksPrice * quantity;
}

let orderTotal = getTotal(latte, 3);
console.log(orderTotal);
export{}