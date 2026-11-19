// Literal type

let paymentStatus: "unpaid" | "paid" | "refunded" = "unpaid";

paymentStatus = "paid";

// Type Aliases

type PaymentStatus = "unpaid" | "paid" | "refunded";

let payment1: PaymentStatus = "paid";
let payment2: PaymentStatus = "unpaid";
let payment3: PaymentStatus = "refunded";

type OrderStatus =
    | "pending"
    | "confirmed"
    | "shipped"
    | "delivered"
    | "cancelled";

let order1: OrderStatus = "pending";
let order2: OrderStatus = "shipped";

type Order = {
    orderId: number,
    customerName: string,
    status: OrderStatus,
    totalPrice: number,
}

const myOrder: Order = {
    orderId: 1001,
    customerName: "Alex",
    status: "pending",
    totalPrice: 25.5
}

function updateOrderStatus (order: Order, newStatus: OrderStatus): void{
     order.status = newStatus;
}

updateOrderStatus(myOrder, "shipped");