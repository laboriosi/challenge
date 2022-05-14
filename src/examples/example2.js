import Checkout from "../Checkout.js";

const checkout = new Checkout();

checkout.scan("B");
checkout.scan("A");
checkout.scan("B");
checkout.scan("A");
checkout.scan("A");

let price = checkout.total();
console.log("price", price);
