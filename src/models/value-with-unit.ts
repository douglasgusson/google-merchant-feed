import { Unit } from "./unit";

export namespace ValueWithUnit {
  export type Model = {
    value: number;
    unit: Unit.Model;
  };

  export function formatter(valueWithUnit: Model): string {
    return `${valueWithUnit.value} ${Unit.formatter(valueWithUnit.unit)}`;
  }

  export function formatterWithoutSpace(valueWithUnit: Model): string {
    return `${valueWithUnit.value}${Unit.formatter(valueWithUnit.unit)}`;
  }
}
