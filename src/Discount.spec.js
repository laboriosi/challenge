import Discount from "./Discount";

describe("Discount", () => {
  it("should return zero when stock is empty", () => {
    const discount = new Discount([], "A");

    expect(+discount).toBe(0);
  });

  it("should return zero when don't find discounts", () => {
    const discount = new Discount(
      [
        { name: "D", price: 15 },
        { name: "D", price: 15 },
        { name: "D", price: 15 },
      ],
      "D"
    );

    expect(+discount).toBe(0);
  });

  it("should return 15 when is third item A", () => {
    const discount = new Discount(
      [
        { name: "A", price: 30 },
        { name: "A", price: 30 },
      ],
      "A"
    );

    expect(+discount).toBe(15);
  });

  it("should return 5 when is the second item B", () => {
    const discount = new Discount([{ name: "B", price: 20 }], "B");

    expect(+discount).toBe(5);
  });

  it("should return 20 when is over $150", () => {
    const discount = new Discount(
      [
        { name: "C", price: 50 },
        { name: "C", price: 50 },
        { name: "C", price: 50 },
      ],
      "C"
    );
    expect(+discount).toBe(20);
  });
});
