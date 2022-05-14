import Checkout from "../Checkout.js";

const checkout = new Checkout();

checkout.scan("C");
checkout.scan("A");
checkout.scan("D");
checkout.scan("A");
checkout.scan("A");

let price = checkout.total();
console.log("price", price);
