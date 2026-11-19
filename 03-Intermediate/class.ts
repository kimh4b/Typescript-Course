//class

class MenuItem{

    public name: string;
    public price: number;
    private cost: number;
    readonly id: number;

    constructor(id: number, name: string,price: number, cost: number){
        this.name = name;
        this.price = price;
        this.cost = cost;
        this.id = id;
    }

    showCost(): void{
        console.log(this.cost);
    }
}

let latte = new MenuItem (101, "Latte", 2.5, 1.2,);

console.log(latte.name);
latte.showCost();

class MenuItem1 {
    private cost: number;

    constructor(cost: number) {
        this.cost = cost;
    }

    showCost(){
        console.log(this.cost);
    }
}

let latte1 = new MenuItem1(1.2);

latte1.showCost();

class MenuItem2{
    name: string;
    price: number;
    private cost: number;
    readonly id: number;

    constructor(id: number, name: string, price: number, cost: number){

        this.name = name;
        this.price = price;
        this.cost = cost;
        this.id = id;
    }

    showCost(): void{
        console.log(this.cost);
    }
}

let lattee = new MenuItem2(101, "Latte", 2.5, 1.2);
console.log(lattee.name);
console.log(lattee.price);
lattee.showCost();

export{}

