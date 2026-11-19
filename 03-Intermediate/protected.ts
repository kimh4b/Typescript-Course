class Product {
   
    constructor(protected price: number){}
}

class Coffee extends Product{

    showPrice(){
        console.log(this.price);
    }

}

let coffee = new Coffee(5);
coffee.showPrice();

export{}