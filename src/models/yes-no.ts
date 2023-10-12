export const YES_NO = {
  yes: "yes",
  no: "no",
} as const;

export namespace YesNo {
  export type Model = keyof typeof YES_NO;

  export function formatter(yesNo: YesNo.Model | boolean): string {
    const isValidYesNo = (value: string): value is YesNo.Model => {
      return value in YES_NO;
    };

    const yesNoString =
      typeof yesNo === "boolean" ? (yesNo ? "yes" : "no") : yesNo;

    if (!isValidYesNo(yesNoString)) {
      throw new Error(
        `Invalid yes/no value: "${yesNo}". Valid values are: ${Object.keys(
          YES_NO,
        ).join(", ")}`,
      );
    }

    return YES_NO[yesNoString];
  }
}
