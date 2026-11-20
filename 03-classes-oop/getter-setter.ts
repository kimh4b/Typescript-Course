//Getter and Setter

class MenuItem{
    private _price : number


    constructor(price:number){
        this._price = price;

    }



    get price(){
        return this._price;
    }

    set price(price: number){
        if(price> 0){
            this._price = price
        }
    }

    
}


let latte = new MenuItem(2.5);

latte.price = 3;
console.log(latte.price);

latte.price = -5;
console.log(latte.price);

class Account{
    
    private _balance : number

    constructor(balance: number){
        this._balance = balance;
    }

    get balance(){
        return this._balance;
    }

    set balance(newBalance: number){
        if(newBalance >= 0){
            this._balance = newBalance;
        }
    }

}

let newAccount = new Account(500);
newAccount.balance = 800;
console.log(newAccount.balance);
newAccount.balance = -100;
console.log(newAccount.balance);

//inherence extends

class MenuItem1{

    constructor(public name: string, public price:number){}
}

class Dessert extends MenuItem1{

    public isSweet: boolean;

    constructor(name: string, price: number, isSweet: boolean){
        super(name, price);
        this.isSweet = isSweet;
    }
}

let cheesecake = new Dessert("Cheesecake", 4.5, true);

console.log(cheesecake.name);
console.log(cheesecake.price);
console.log(cheesecake.isSweet);


class Dessert1 extends MenuItem1{
    
    constructor( name: string, price: number, public isSweet: boolean  ){
        super(name, price);
    }
}

let brownie = new Dessert1("Brownie", 3, true);

console.log(brownie.name);
console.log(brownie.price);
console.log(brownie.isSweet);

//Exercise

class MenuItem2{
    private _price: number = 5
    get price(){
        return this._price;
    }

    set price(newPrice: number){
        if(newPrice > 0 && newPrice <= 100){
            this._price = newPrice;
        }
    }
}

const Menu = new MenuItem2();
Menu.price= 8;
console.log(Menu.price);
Menu.price= -8;
console.log(Menu.price);
export{}