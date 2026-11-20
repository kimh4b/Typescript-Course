type Drink = {
    name: string,
    price: number,
    category: string,
}

function getProperty<T, K extends keyof T>(object: T, key: K){
    return object[key];
}

const drink: Drink = {
    name: "Latte",
    price: 3.5,
    category: "Coffee",
}

console.log(getProperty(drink, "name"));
console.log(getProperty(drink, "price"));

//=======================================
interface Product {
    name: string;
    price: number;
    stock: number;
}

type ProductKeys = keyof Product;

//keyof Product → get property names.
//Product["price"] → the type of the price property, which is number.
//T[K] represents the type of the selected property, not the property's name.
//=======================================

export{}
