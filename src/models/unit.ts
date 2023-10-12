export const UNIT = {
  oz: "oz",
  lb: "lb",
  mg: "mg",
  g: "g",
  kg: "kg",
  floz: "floz",
  pt: "pt",
  qt: "qt",
  gal: "gal",
  ml: "ml",
  cl: "cl",
  l: "l",
  cbm: "cbm",
  in: "in",
  ft: "ft",
  yd: "yd",
  cm: "cm",
  m: "m",
  sqft: "sqft",
  sqm: "sqm",
  ct: "ct",
} as const;

export namespace Unit {
  export type Model = keyof typeof UNIT;

  export function formatter(value: Model): string {
    const isValidUnit = (value: string): value is Model => {
      return Object.values(UNIT).includes(value as Model);
    };

    if (!isValidUnit(value)) {
      throw new Error(
        `Invalid unit: "${value}". Valid values are: ${Object.keys(UNIT).join(
          ", ",
        )}`,
      );
    }

    return value;
  }
}
