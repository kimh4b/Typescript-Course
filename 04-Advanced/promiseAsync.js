"use strict";
// A Promise is an object that represents a result that may become available later.
const price = new Promise((resolve) => {
    resolve(3.50);
});
price.then((result) => {
    console.log(result);
});
//reject 
const pricee = new Promise((resolve, reject) => {
    reject(new Error("Database connection failed"));
});
pricee.catch((error) => {
    console.log(error.message);
});
