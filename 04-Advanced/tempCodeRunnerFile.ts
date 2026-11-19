interface HasPrice {
    price: number,
}

function getTotalPrice<T extends HasPrice>(products: T[]): number{
    return products.reduce((sum, product) => {
        return sum + product.price;
    }, 0)
}

const items = [
    {name: "Coffee", price: 3.5},
    {name: "Latte", price: 2.5},
    {name: "Tea", price: 4.5},
]

const result = getTotalPrice(items);