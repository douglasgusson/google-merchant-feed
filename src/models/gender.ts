export const GENDER = {
  male: "male",
  female: "female",
  unisex: "unisex",
} as const;

export type Gender = keyof typeof GENDER;
