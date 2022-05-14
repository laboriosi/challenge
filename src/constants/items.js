export const ITEMS_WITH_DISCOUNT = [
  { name: "A", quantity: 3, discount: 15 },
  { name: "B", quantity: 2, discount: 5 },
];

export const NAMES_OF_ITEMS_WITH_DISCOUNT = ITEMS_WITH_DISCOUNT.map(
  (item) => item.name
);

export const ITEMS_PRICES = {
  A: 30,
  B: 20,
  C: 50,
  D: 15,
};
