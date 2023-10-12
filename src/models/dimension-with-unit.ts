import { UNIT, Unit } from "./unit";

export namespace DimensionWithUnit {
  export type Model = {
    value: number;
    unit: keyof Pick<typeof UNIT, "cm" | "in">;
  };

  export function formatter(valueWithUnit: Model): string {
    return `${valueWithUnit.value} ${Unit.formatter(valueWithUnit.unit)}`;
  }
}
