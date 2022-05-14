import Checkout from "./Checkout";

describe("Checkout", () => {
  it("should return zero when no items were scanned", () => {
    const checkout = new Checkout();

    expect(checkout.total()).toBe("$0");
  });

  it("should sum the prices when no promotions are available", () => {
    const checkout = new Checkout();

    checkout.scan("A");
    checkout.scan("B");
    checkout.scan("C");

    expect(checkout.total()).toBe("$100");
  });

  it("should contain the promotion of 3 items A for $75", () => {
    const checkout = new Checkout();

    checkout.scan("A");
    checkout.scan("A");
    checkout.scan("A");

    expect(checkout.total()).toBe("$75");
  });

  it("should contain the promotion of 2 items B for $35", () => {
    const checkout = new Checkout();

    checkout.scan("B");
    checkout.scan("B");

    expect(checkout.total()).toBe("$35");
  });

  it("should contain the promotion that greater than $150 has $20 discount", () => {
    const checkout = new Checkout();

    checkout.scan("C");
    checkout.scan("C");
    checkout.scan("C");
    checkout.scan("C");

    expect(checkout.total()).toBe("$180");
  });
});
