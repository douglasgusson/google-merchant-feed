export namespace DateRange {
  export type Model = {
    dateFrom: Date;
    dateTo: Date;
  };

  export function formatter(dateRange: DateRange.Model): string {
    return `${dateRange.dateFrom.toISOString()}/${dateRange.dateTo.toISOString()}`;
  }
}
