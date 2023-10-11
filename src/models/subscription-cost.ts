import { Price } from "./price";

export type SubscriptionCost = {
  period: "month" | "year";
  periodLength: number;
  amount: Price.Model;
};
