function checkPayment(): Promise<string>{
    return new Promise((resolve, reject) => {
        const isPaid = false;

        if(isPaid){
            resolve("Payment Successful!");
        }else{
            reject("Payment failed");
        }
    });
}

async function processPayment(): Promise<void>{
    try{
        const success = await checkPayment();
        console.log(success);
    }catch(error){
        console.log(error);
    }
}

function getOrder(): Promise<string>{
    return new Promise((resolve, reject) => {
        const orderFound = false;

        if(orderFound){
            resolve("Order #1001 found");
        }else{
            reject("Order not found");
        }
    });
}

getOrder()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });



