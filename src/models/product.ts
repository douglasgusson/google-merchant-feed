import { AgeGroup } from "./age-group";
import { Availability } from "./availability";
import { Certification } from "./certification";
import { Condition } from "./condition";
import { DateRange } from "./date-range";
import { EnergyEfficiencyClass } from "./energy-efficiency-class";
import { Gender } from "./gender";
import { Installment } from "./installment";
import { LoyaltyPoints } from "./loyalty-points";
import { Price } from "./price";
import { SubscriptionCost } from "./subscription-cost";
import { Tax } from "./tax";
import { ValueWithUnit } from "./value-with-unit";
import { YesNo } from "./yes-no";

// {
//   "id": "",
//   "title": "",
//   "link": "",
//   "image_link": "",
//   "additional_image_links": [""],
//   "mobile_link": "",
//   "availability": "",
//   "availability_date": "",
//   "cost_of_goods_sold": 0.0,
//   "expiration_date": "",
//   "price": 0.0,
//   "sale_price": 0.0,
//   "salePrice_effective_date": "",
//   "unit_pricing_measure": 0.0,
//   "unit_pricing_base_measure": 0.0,
//   "installment": {
//       "number": 0,
//       "amount": 0.0
//   },
//   "subscription_cost": {
//       "period": "",
//       "period_length": 0,
//       "amount": 0.0
//   },
//   "loyalty_points": "",
//   "google_product_category": "",
//   "product_type": "",
//   "brand": "",
//   "gtin": "",
//   "mpn": "",
//   "identifier_exists": "",
//   "condition": "",
//   "adult": "",
//   "multipack": 0,
//   "is_bundle": "",
//   "certification": {
//       "authority": "",
//       "name": "",
//       "code": ""
//   },
//   "energy_efficiency_class": "",
//   "min_energy_efficiency_class": "",
//   "max_energy_efficiency": "",
//   "age_group": "",
//   "color": "",
//   "gender": "",
//   "material": "",
//   "pattern": "",
//   "size": "",
//   "size_type": "",
//   "size_system": "",
//   "item_group_id": "",
//   "product_length": 0,
//   "product_width": 0,
//   "product_height": 0,
//   "product_weight": 0,
//   "product_details": [
//       {
//           "section_name": "",
//           "attribute_name": "",
//           "attribute_value": ""
//       }
//   ],
//   "product_highlight": "",
//   "ads_redirect": "",
//   "custom_label_0": "",
//   "promotion_id": "",
//   "lifestyle_image_link": "",
//   "external_seller_id": "",
//   "excluded_destination": "",
//   "included_destination": "",
//   "shopping_ads_excluded_country": "",
//   "shopping_ads_excluded_destination": "",
//   "pause": "",
//   "shipping": {
//       "country": "",
//       "region": "",
//       "service": "",
//       "price": 0.0,
//       "min_handling_time": 0,
//       "max_handling_time": 0,
//       "min_transit_time": 0,
//       "max_transit_time": 0
//   },
//   "shipping_label": "",
//   "shipping_weight": 0.0,
//   "shipping_length": 0.0,
//   "shipping_width": 0.0,
//   "shipping_height": 0.0,
//   "ships_from_country": "",
//   "max_handling_time": 0,
//   "transit_time_label": "",
//   "min_handling_time": 0,
//   "tax": {
//       "rate": 0.0,
//       "country": "",
//       "postal_code": "",
//       "tax_ship": 0.0
//   },
//   "tax_category": "",
//   "attributes": [""]
// }
export type Product = {
  id?: string;
  title?: string;
  link?: string;
  imageLink?: string;
  additionalImageLinks?: string[];
  mobileLink?: string;
  availability?: Availability.Model;
  availabilityDate?: Date;
  costOfGoodsSold?: Price.Model;
  expirationDate?: Date;
  price?: Price.Model;
  salePrice?: Price.Model;
  salePriceEffectiveDate?: DateRange.Model;
  unitPricingMeasure?: ValueWithUnit.Model;
  unitPricingBaseMeasure?: ValueWithUnit.Model;
  installment?: Installment;
  subscriptionCost?: SubscriptionCost;
  loyaltyPoints?: LoyaltyPoints;
  googleProductCategory?: string;
  productType?: string;
  brand?: string;
  gtin?: string;
  mpn?: string;
  identifierExists?: YesNo | boolean;
  condition?: Condition;
  adult?: YesNo | boolean;
  multipack?: number;
  isBundle?: YesNo | boolean;
  certification?: Certification.Model;
  energyEfficiencyClass?: EnergyEfficiencyClass;
  minEnergyEfficiencyClass?: EnergyEfficiencyClass;
  maxEnergyEfficiencyClass?: EnergyEfficiencyClass;
  ageGroup?: AgeGroup.Model;
  color?: string;
  gender?: Gender;
  material?: string;
  pattern?: string;
  size?: string;
  sizeType?: string;
  sizeSystem?: string;
  itemGroupId?: string;

  tax?: Tax;
};
