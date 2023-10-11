import { Price } from "./price";

export type Installment = {
  months: number;
  amount: Price.Model;
};
