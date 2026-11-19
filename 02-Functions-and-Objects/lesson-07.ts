//Type aliases
// Union Type |

type Coffee = {
    name: string,
    price: number | string,
    isAvailable: boolean,
}

let latte : Coffee = {
    name: "Latte",
    price: 2.5,
    isAvailable: true,
}

let icedMocha : Coffee = {
    name: "Iced Mocha",
    price: 3.5,
    isAvailable: false,
}

let freeCoffee : Coffee = {
    name: "Free Coffee",
    price: "Free",
    isAvailable: true,
}


type PaymentMethod = "Cash" | "QR" | "Card";

let payment: PaymentMethod = "Cash";
payment = "QR";

//Bank transfer is not allow because the not define in paymentmethod type 
export{}


