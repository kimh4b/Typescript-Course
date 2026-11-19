interface Product {
    name: string;
    price: number;
    stock: number;
}

const products: Product[] = [
    { name: "Coffee", price: 3.5, stock: 20 },
    { name: "Latte", price: 4.5, stock: 15 },
    { name: "Tea", price: 2.5, stock: 30 },
    { name: "Mocha", price: 5.5, stock: 10 },
];

interface HasPrice {
    price: number;
}

interface HasStock {
    stock: number;
}

interface HasPriceAndStock {
    price: number;
    stock: number;
}
//=====================================================================================

function getHighestValue<T, K extends keyof T>(
    object: T[],
    key: K & (T[K] extends number ? K : never),
): T {
    return object.reduce((highest, current) => {
        if (highest[key] > current[key]) {
            return highest;
        } else {
            return current;
        }
    }, object[0]);
}

//=====================================================================================

function getLowestValue<T, K extends keyof T>(
    object: T[],
    key: K & (T[K] extends number ? K : never),
): T {
    return object.reduce((lowest, current) => {
        if (lowest[key] < current[key]) {
            return lowest;
        } else {
            return current;
        }
    }, object[0]);
}

getLowestValue(products, "price");

//=====================================================================================

function filterByPrice<T extends HasPrice>(
    products: T[],
    minPrice: number,
): T[] {
    return products.filter((product) => {
        return product.price >= minPrice;
    });
}

//=====================================================================================

function getTotalStock<T extends HasStock>(products: T[]): number {
    return products.reduce((sum, product) => {
        return sum + product.stock;
    }, 0);
}

//=====================================================================================

function getTotalStockAbovePrice<T extends HasPriceAndStock>(
    products: T[],
    minPrice: number,
): number {
    return products.reduce((sum, product) => {
        if (product.price >= minPrice) {
            return sum + product.stock;
        }
        return sum;
    }, 0);
}
getTotalStockAbovePrice(products, 4);
export{}