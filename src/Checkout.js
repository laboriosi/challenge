import { sumAllItems } from "./utils/array.js";
import { ITEMS_PRICES } from "./constants/items.js";
import Discount from "./Discount.js";

export default class Checkout {
  constructor(rules) {
    this.stock = [];
    this.rules = rules;
  }

  scan(itemName) {
    const price = this.getItemPrice(itemName);
    this.addItemToStock({ name: itemName, price });
  }

  getItemPrice(itemName) {
    let price = ITEMS_PRICES[itemName];
    const discount = new Discount(this.stock, itemName);
    return price - discount;
  }

  getQuantityOfAItem(itemName) {
    return this.stock.filter((currentItemName) => currentItemName === itemName).length;
  }

  addItemToStock(newItem) {
    this.stock.push(newItem);
  }

  total() {
    return `$${sumAllItems(this.stock, "price")}`;
  }
}
