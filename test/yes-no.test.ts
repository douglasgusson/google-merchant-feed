import { YesNo } from "../src/models/yes-no";

describe("YesNo", () => {
  describe("formatter", () => {
    it("should return 'yes' when given true", () => {
      expect(YesNo.formatter(true)).toEqual("yes");
    });

    it("should return 'no' when given false", () => {
      expect(YesNo.formatter(false)).toEqual("no");
    });

    it("should return 'yes' when given 'yes'", () => {
      expect(YesNo.formatter("yes")).toEqual("yes");
    });

    it("should return 'no' when given 'no'", () => {
      expect(YesNo.formatter("no")).toEqual("no");
    });

    it("should throw an error when given an invalid value", () => {
      // @ts-ignore
      expect(() => YesNo.formatter("invalid")).toThrowError(
        'Invalid yes/no value: "invalid". Valid values are: yes, no',
      );
    });
  });
});
