import { Channel } from "./channel";
import { Product } from "./product";

export type Feed = {
  channel: Channel;
  products: Product[];
};
