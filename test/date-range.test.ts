import { DateRange } from "../src/models/date-range";

describe("DateRange", () => {
  describe("formatter", () => {
    it("should format the date range correctly", () => {
      const dateRange: DateRange.Model = {
        dateFrom: new Date("2022-01-01T00:00:00.000Z"),
        dateTo: new Date("2022-01-31T23:59:59.999Z"),
      };
      const formattedDateRange = DateRange.formatter(dateRange);
      expect(formattedDateRange).toEqual(
        "2022-01-01T00:00:00.000Z/2022-01-31T23:59:59.999Z",
      );
    });
  });
});
