// A Promise is an object that represents a result that may become available later.

// resolve(value) — fulfills the Promise with a successful result.

const price = new Promise<number>((resolve) => {
    resolve(3.50);
});

price.then((result) => {
    console.log(result);
})

// reject(error) — rejects the Promise because the operation failed.

const pricee = new Promise<number>((resolve, reject) => {
    reject(new Error("Database connection failed"));
});

pricee.catch((error) => {
    console.log(error.message);
})

// async means the function always returns a Promise.

async function getDrinkName(): Promise<string> {

    const drink = "Latte";

    if(!drink){
        throw new Error("Drinks Unavaliable!");
    }

    return drink;
}

async function main() {
    try{
        const drink = await getDrinkName();
        console.log(drink);
    } catch(error){
        if(error instanceof Error){
            console.log(error.message);
        }
    } 
}

main()
export{}