// Generic types = flexible types

function returnValue<T>(value: T): T{
    return value;
}

const id: number = 1;
const name1: string = "hello";

console.log(returnValue(id));
console.log(returnValue(name1));

function keepItem<T>(item: T): T{
    return item;
}
console.log(keepItem("Latte"));
console.log(keepItem(3.50));
console.log(keepItem(true));

type Box<T> = {
    value: T;
}

const coffeee: Box<string>= {
    value: "Latte"
};
const pricee: Box<number>= {
    value: 3.5,
}

type SelectedItem<T> = {
    item: T;
}

const selectedDrink: SelectedItem<string>= {
    item: "Latte",
}

const selectedPrice: SelectedItem<number>= {
    item: 3.5,
}

//=============================

function makeRecord<U>(key: string, value: U): [string, U]{
    return [key, value];
}


console.log(makeRecord("price", 3.5))

function makeDrinkInfo(drink: string, price: number): [string, number]{
    return [drink, price];
}

makeDrinkInfo("Latte", 3.5);

//==========

function printName<T extends string>(name: T): string{
return name
}

printName("Kim")
printName("Latte")

function getLength<T extends {length: number}>(value: T): number{
    return value.length;
}

getLength("Latte"); 
getLength(["Latte", "Mocha"]); 
getLength({ length: 10 }); 

function showDrink<T extends {name: string}>(drink: T): string{
    return drink.name;
}

showDrink({ name: "Latte", price: 3.5 });

function returnValue1<T>(value: T): T{
    return value;
}
export{}