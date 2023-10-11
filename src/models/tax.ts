import { YesNo } from "./yes-no";

export type Tax = {
  rate?: number;
  country?: string;
  postalCode?: string;
  taxShip?: YesNo;
  region?: string;
  locationId?: string;
};
