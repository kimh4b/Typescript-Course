//Union type
//Type narrowing means typeof check type before using it
// | means OR — one type or another.
// & means AND — combine the requirements of multiple types.

function displayValue(value: string | number): void{
    console.log(value);
}

function getLength(value: string | number |  number[]): number{
    
    if(typeof value === "number"){
        return value.toString.length;
    }

    return value.length;
}

type HasName = {
    name: string,
}

type HasEmail = {
    email: string,
}

type HasPhone = {
    phone: string | number;
};

type User = HasName & HasEmail;

const user: User = {
    name: "Alex",
    email: "alex@gmail.com"
}

type Customer = HasName & HasEmail & HasPhone;

const customer: Customer = {
    name: "jonh",
    email: "jonh@gmail.com",
    phone: 885123123
}





