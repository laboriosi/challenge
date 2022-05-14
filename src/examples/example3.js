import Checkout from "../Checkout.js";

const checkout = new Checkout();

checkout.scan("C");
checkout.scan("B");
checkout.scan("A");
checkout.scan("A");
checkout.scan("D");
checkout.scan("A");
checkout.scan("B");

let price = checkout.total();
console.log("price", price);
