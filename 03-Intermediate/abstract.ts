abstract class PaymentMethod {
    constructor(public amount: number) {}

    abstract processPayment(): string;
}

class CashPayment extends PaymentMethod {
    processPayment(): string {
        return `Remaining amount: ${this.amount}`;
    }
}

const Cash = new CashPayment(10);

console.log(Cash.processPayment());

abstract class PaymentMethod1 {
    abstract processPayment(): string;
}

class CashPayment1 extends PaymentMethod1 {
    processPayment(): string {
        return "Cash payment processed";
    }
}

class QRPayment1 extends PaymentMethod1 {
    processPayment(): string {
        return "QR payment processed";
    }
}
const payments: PaymentMethod1[] = [
    new CashPayment1(),
    new QRPayment1(),
]

for(const payment of payments){
    console.log(payment.processPayment());
}

export{}