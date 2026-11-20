interface ApiResponse<T>{
    success: boolean;
    data: T;
    message: string;
}

interface Product {
    name: string;
    price: number;
}

const response: ApiResponse<Product> = {
    success: true,
    data: {
        name: "Latte",
        price: 2,
    },
    message: "Product loaded successfully"
}

// Generic constraints with multiple types

interface HasPrice {
    price: number,
}

function getTotalPrice<T extends HasPrice>(products: T[]): number{
    return products.reduce((sum, product) => {
        return sum + product.price;
    }, 0)
}

const items = [
    {name: "Coffee", price: 3.5, stock: 1},
    {name: "Latte", price: 2.5},
    {name: "Tea", price: 4.5},
]

const result = getTotalPrice(items);
console.log(result);



export{}