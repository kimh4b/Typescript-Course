// object destructuring

let product = {
    id: 101,
    names: "iPhone 17",
    price: 999,
    stock: 15,
    category: "Phones"
};

const { names, price} = product;
console.log(names, price);

const { stock: availableStock } = product;

console.log(availableStock);

//array destructuring 
const products = [
    "iPhone 17",
    "Samsung S25",
    "MacBook Pro",
    "iPad Air"
];

const [firstProduct, secondProduct, thirdProduct] = products;
console.log(firstProduct,secondProduct,thirdProduct);