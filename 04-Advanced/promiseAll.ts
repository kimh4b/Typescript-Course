function getProducts(): Promise<string> {
    return Promise.resolve("Products loaded");
}

function getCustomers(): Promise<string> {
    return Promise.resolve("Customers loaded");
}

function getOrders(): Promise<string> {
    return Promise.resolve("Orders loaded");
}

async function loadDashboard(): Promise<void> {
    try {
        const [getProduct, getCustomer, getOrder] = await Promise.all([
            getProducts(),
            getCustomers(),
            getOrders(),
        ]);
        console.log(getProduct);
        console.log(getCustomer);
        console.log(getOrder);
    } catch (error) {
        console.log(error);
    }
}

loadDashboard();
