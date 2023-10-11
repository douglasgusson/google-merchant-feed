export const AVAILABILITY = {
  in_stock: "in_stock",
  out_of_stock: "out_of_stock",
  preorder: "preorder",
  backorder: "backorder",
} as const;

export namespace Availability {
  export type Model = keyof typeof AVAILABILITY;

  export function formatter(availability: Availability.Model): string {
    const isValidAvailability = (
      value: string,
    ): value is Availability.Model => {
      return value in AVAILABILITY;
    };

    if (!isValidAvailability(availability)) {
      throw new Error(
        `Invalid availability: "${availability}". Valid values are: ${Object.keys(
          AVAILABILITY,
        ).join(", ")}`,
      );
    }

    return AVAILABILITY[availability];
  }
}
