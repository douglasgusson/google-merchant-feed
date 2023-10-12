import { UNIT, Unit } from "./unit";

export namespace WeightWithUnit {
  export type Model = {
    value: number;
    unit: keyof Pick<typeof UNIT, "lb" | "oz" | "g" | "kg">;
  };

  export function formatter(valueWithUnit: Model): string {
    return `${valueWithUnit.value} ${Unit.formatter(valueWithUnit.unit)}`;
  }
}
