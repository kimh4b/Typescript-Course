class MenuItem {
    showInfo(){
        console.log("this is menu item.")
    }
}

class Coffee extends MenuItem{
    showPrice(){
        console.log("20$")
    }
    showInfo(): void {
        console.log("this is Coffee.")
    }
}

//The variable's type determines which methods you can access, 
// while the actual object's class determines which overridden method runs.

let latte = new Coffee();
let item: MenuItem = latte;
item.showInfo();
latte.showInfo();
export {}
