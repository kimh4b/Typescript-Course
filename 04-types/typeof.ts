const products = [
    { name: "Latte", price: 3.5},
    { name: "Mocha", price: 4},
]

type Product = typeof products[number];

const newProduct: Product = {
    name: "Cappuccino",
    price: 4.5,
}

console.log(newProduct.name);
console.log(newProduct.price);