export namespace Price {
  export type Model = {
    value: number;
    currency: string;
  };

  export function formatter(price: Price.Model): string {
    return `${price.value.toFixed(2)} ${
      price.currency && price.currency.toUpperCase()
    }`;
  }
}
