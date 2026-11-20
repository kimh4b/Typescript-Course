const latte = {
    name: "Latte",
    price: 3.5
};

const mocha = {
    name: "Mocha",
    price: 4,
    size: "Large"
};

function getProductName<T extends {name: string}>(product: T): string{
return product.name;
}

getProductName(mocha);

export{}