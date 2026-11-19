abstract class PaymentMethod{
}

class CashPayment extends PaymentMethod{
    countCash(): string{
        return "Counting Cash";
    }
}

class QRPayment extends PaymentMethod{
    scanQr(): string{
        return "Scanning QR code";
    }
}

function handlePayment(payment: PaymentMethod){
    if(payment instanceof CashPayment){
        console.log(payment.countCash());
    }else if(payment instanceof QRPayment){
        console.log(payment.scanQr());
    }
}

handlePayment(new CashPayment());
handlePayment(new QRPayment());