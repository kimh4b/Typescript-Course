// Type narrowing and optional properties

let price: number | string = 4.5;

if (typeof price === "number") {
    console.log(price * 2);
} else {
    console.log(price);
}

type MenuItem = {
    name: string,
    price: number,
    category?: string, // optional
};

let latte: MenuItem = {
    name: "Iced Latte",
    price: 2.5,
};

let mocha: MenuItem = {
    name: "Iced Mocha",
    price: 3,
    category: "Coffee",
};

export {};