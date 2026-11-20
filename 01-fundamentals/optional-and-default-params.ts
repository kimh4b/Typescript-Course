// Lesson 5: Optional and Default Parameters

function showCoffee(name: string, size?: string) {
    console.log(name, size);
}

showCoffee('Iced Latte', 'Large');
showCoffee('Iced Mocha');

function calculatePrice(price: number, quantity: number = 1): number {
    return price * quantity;
}

let latte = calculatePrice(3.5);
console.log(latte);

export {};