interface HasPrice {
    price: number;
}

function getPrice<T extends HasPrice>(item: T): number {
    return item.price;
}

// keyof extracts the property names of an object type.
interface Drink {
    name: string;
    price: number;
    category: string;
}

type DrinkKeys = keyof Drink;
// type DrinkKeys = "name" | "price" | "category";

// Combining keyof with generics

function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
    return object[key];
}

const latte = {
    name: "latte",
    price: 2.5,
    caetgory: "Coffee",
};

const drinkName = getProperty(latte, "name");
const drinkPrice = getProperty(latte, "price");

//======================================

const product = {
    name: "Coffee",
    price: 3.5,
    stock: 20
};

// Gets the type of the object.
typeof product;

//Extracts the property names from that type.
//keyof product;

//======================================


interface Drinkk {
    name: string;
    price: number;
    available: boolean;
}

const lattee: Drinkk = {
    name: "Latte",
    price: 4.5,
    available: true,
}

function getPropertyy<T, K extends keyof T>(object: T, key: K): T[K] {
    return object[key];
}
getProperty(lattee, "name");

//======================================
// Generic class

class Storagee<T>{

    constructor(public data: T){}

    getData(): T{
        return this.data;
    }

    updateData(newData: T): void {
         this.data = newData;
    }
}

const message = new Storagee<string>("Hello")
message.updateData("Typescript");
const updatedData = message.getData();
console.log(updatedData);

//======================================
// Generic array

function combineArray<T, U>(first: T[], second: U[]): [T, U][]{
    return first.map((item, index)=> {
        return [item, second[index]]
    })
}

export{}

