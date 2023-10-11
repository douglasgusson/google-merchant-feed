import { FeedBuilder } from "./feed-builder";

export { FeedBuilder } from "./feed-builder";
export * from "./models";

const feedBuilder = new FeedBuilder();

feedBuilder.withTitle("My Feed");
feedBuilder.withLink("https://example.com");
feedBuilder.withDescription("This is my feed");

feedBuilder.withProduct({
  id: "1",
  title: "My Product",
  availability: "out_of_stock",
  price: {
    currency: "BRL",
    value: 10,
  },
  additionalImageLinks: [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
  ],
  availabilityDate: new Date("2021-01-01"),
  costOfGoodsSold: {
    currency: "BRL",
    value: 10,
  },
  expirationDate: new Date("2021-01-01"),
  imageLink: "https://example.com/image.jpg",
  link: "https://example.com/product/1",
  mobileLink: "https://example.com/product/1?mobile",
  salePrice: {
    currency: "BRL",
    value: 10,
  },
  tax: {
    country: "BR",
    rate: 0.1,
    postalCode: "12345678",
    taxShip: "yes",
  },
  salePriceEffectiveDate: {
    dateFrom: new Date("2021-01-01"),
    dateTo: new Date("2021-01-03"),
  },
  installment: {
    amount: {
      currency: "BRL",
      value: 10,
    },
    months: 1,
  },
  subscriptionCost: {
    amount: {
      currency: "BRL",
      value: 10,
    },
    period: "month",
    periodLength: 1,
  },
  unitPricingBaseMeasure: {
    unit: "ct",
    value: 1,
  },
  unitPricingMeasure: {
    unit: "ct",
    value: 1,
  },
  loyaltyPoints: {
    name: "Programa A",
    pointsValue: 10,
    ratio: 0.5,
  },
  googleProductCategory: "Vestuário e acessórios > Roupas > Vestidos",
  productType: "Página inicial > Mulheres > Vestidos > Vestidos longos",
  brand: "Minha Marca",
  gtin: "1234567890123",
  identifierExists: true,
  mpn: "1234567890123",
  adult: true,
  condition: "new",
  multipack: 1,
  isBundle: "no",
  certification: {
    authority: "ABNT",
    code: "123456",
    name: "Certificado de Qualidade",
  },
  energyEfficiencyClass: "A",
  minEnergyEfficiencyClass: "D",
  maxEnergyEfficiencyClass: "A+++",
  ageGroup: "adult",
  color: "Explosão laranja de manga",
  gender: "unisex",
  material: "Leather [Couro]",
});

const xml = feedBuilder.buildXml();

console.log(xml);
