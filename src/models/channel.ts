import { Product } from "./product";

export type Channel = {
  title?: string;
  link?: string;
  description?: string;
  item?: Record<string, Product>[];
};
