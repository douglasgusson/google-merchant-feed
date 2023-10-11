export const AGE_GROUP = {
  newborn: "newborn",
  infant: "infant",
  toddler: "toddler",
  kids: "kids",
  adult: "adult",
} as const;

export namespace AgeGroup {
  export type Model = keyof typeof AGE_GROUP;

  export function formatter(ageGroup: AgeGroup.Model): string {
    const isValidAgeGroup = (value: string): value is AgeGroup.Model => {
      return value in AGE_GROUP;
    };

    if (!isValidAgeGroup(ageGroup)) {
      throw new Error(
        `Invalid age group: "${ageGroup}". Valid values are: ${Object.keys(
          AGE_GROUP,
        ).join(", ")}`,
      );
    }

    return AGE_GROUP[ageGroup];
  }
}
