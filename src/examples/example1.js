import Checkout from "../Checkout.js";

const checkout = new Checkout();

checkout.scan("A");
checkout.scan("B");
checkout.scan("C");

let price = checkout.total();
console.log("price", price);
