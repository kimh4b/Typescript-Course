// Partial<T> make type's property to optional

type Drink = {
    name: string;
    price: number;
    available: boolean;
};

type DrinkUpdate = Partial<Drink>;

function updateDrink(drink: Drink, newDrink: DrinkUpdate) {
    return {
        ...drink,
        ...newDrink,
    };
}

const coffee: Drink = {
    name: "Americano",
    price: 3,
    available: true,
};

console.log(updateDrink(coffee, { price: 3.5 }));

const mocha: Drink = {
    name: "Mocha",
    price: 4,
    available: true,
};

const updatedMocha = updateDrink(mocha, {
    price: 4.5,
    available: false,
});

console.log(updatedMocha);

// required<T> make type's property to required

type Drink1 = {
    name: string;
    price?: number;
    stock?: number;
};

type CompleteDrink = Required<Drink1>;

const latte1: CompleteDrink = {
    name: "Latte",
    price: 3.5,
    stock: 10,
};

console.log(latte1);

// readonly<T> make type's property to readyonly and present changing property
type Drink2 = {
    name: string;
    price: number;
};

type ReadonlyDrink = Readonly<Drink2>;

const latte2: ReadonlyDrink = {
    name: "Latte",
    price: 3.5,
};

console.log(latte2.name);
console.log(latte2.price);

//Pick<T, K> Pick<Type, "" | "" properties to select>
type Drink4 = {
    name: string;
    price: number;
    stock: number;
    category: string;
};

type DrinkInfo = Pick<Drink4, "name" | "price">;

const latte4: DrinkInfo = {
    name: "Latte",
    price: 3.5,
   
};

const cappuccino4: DrinkInfo = {
    name: "Cappuccino",
    price: 2,
};

// combine Partial and Pick

type Drink3 = {
    name: string;
    price: number;
    stock: number;
    category: string;
};

type DrinkUpdate2 = Partial<Pick<Drink3, "name" | "price">>;

function updateDrink3(currentDrink: Drink3, changes: DrinkUpdate2): Drink3 {
    return {
        ...currentDrink,
        ...changes,
    };
}

const latte: Drink3 = {
    name: "Latte",
    price: 3.5,
    stock: 10,
    category: "Coffee",
};

const updatedLatte = updateDrink3(latte, {
    price: 4,
});

// Omit<T, K> Omit<Type, "" | "" properties to remove>

type Drink5 = {
    name: string;
    price: number;
    stock: number;
};

type DrinkInfo2 = Omit<Drink5, "stock">;

function displayDrink(drink: DrinkInfo2): void {
    console.log(drink.name, drink.price);
}

const latte5: Drink5 = {
    name: "Latte",
    price: 3.5,
    stock: 10
};

displayDrink(latte);

// Record<K, T> Record<keys, value type>

//Parameters<T> get type of function and store as tuple type = Parameters<typeof someFunction>

function orderDrink(drinkName: string, quantity: number): void {
    console.log(drinkName, quantity);
}

type OrderParams = Parameters<typeof orderDrink>;
// type OrderParams = [name: string, quantity: number];

const order1 : OrderParams = ["Latte", 1];
orderDrink(...order1);

//ReturnType<T> to find out what type a function returns.
function getDrinksName(name: string): string{
    return name;
}

type getType = ReturnType<typeof getDrinksName>;

const firstDrinks : getType = "Iced Chocolate";

console.log(firstDrinks);

//Awaited<T> what type you get after a Promise resolves.

async function getDrinkName(): Promise<string>{
    // Imagine this gets the name from a database.
    return "Latte"; // = Promise<string>
}

type DrinkName = Awaited<Promise<string>>;

async function main() {
    // await gets the string from the Promise
    const secondDrink: DrinkName = await getDrinkName();
    console.log(secondDrink)
}
main();
export{}
