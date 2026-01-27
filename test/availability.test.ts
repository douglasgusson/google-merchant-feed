import { Availability } from "../src/models/availability";

describe("Availability", () => {
  describe("formatter", () => {
    it("returns 'in stock' for 'in_stock'", () => {
      const result = Availability.formatter("in_stock");
      expect(result).toEqual("in_stock");
    });

    it("returns 'out of stock' for 'out_of_stock'", () => {
      const result = Availability.formatter("out_of_stock");
      expect(result).toEqual("out_of_stock");
    });

    it("returns 'preorder' for 'preorder'", () => {
      const result = Availability.formatter("preorder");
      expect(result).toEqual("preorder");
    });

    it("throws an error for invalid availability", () => {
      // @ts-ignore
      expect(() => Availability.formatter("invalid")).toThrow(
        'Invalid availability: "invalid". Valid values are: in_stock, out_of_stock, preorder',
      );
    });
  });
});
