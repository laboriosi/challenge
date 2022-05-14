import { sumAllItems } from "./utils/array.js";
import { ITEMS_WITH_DISCOUNT, NAMES_OF_ITEMS_WITH_DISCOUNT, ITEMS_PRICES } from "./constants/items.js";

export default class Discount {
  constructor(stock, itemName) {
    this.stock = stock;
    this.itemName = itemName;
  }

  getQuantityOfCurrentItem() {
    return this.stock.filter((item) => item.name === this.itemName).length + 1;
  }

  getPossibleDiscount() {
    let discount = 0;

    if (NAMES_OF_ITEMS_WITH_DISCOUNT.includes(this.itemName)) discount = this.getPossibleDiscountItem();

    discount = this.increaseDiscountByAmount(discount);

    return discount;
  }

  getPossibleDiscountItem() {
    let discount = 0;

    const itemWithDiscount = ITEMS_WITH_DISCOUNT.find((item) => item.name === this.itemName);
    const quantityOfCurrentItem = this.getQuantityOfCurrentItem();
    const hasDiscount = !(quantityOfCurrentItem % itemWithDiscount.quantity);

    if (hasDiscount) discount = itemWithDiscount.discount;

    return discount;
  }

  increaseDiscountByAmount(currentDiscount) {
    let discount = currentDiscount;

    const total = sumAllItems(this.stock, "price");
    const price = ITEMS_PRICES[this.itemName];
    const totalWithNewItem = total + (price - currentDiscount);

    if (totalWithNewItem > 150) discount = 20;

    return discount;
  }

  valueOf() {
    return this.getPossibleDiscount();
  }
}
