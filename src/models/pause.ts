export const PAUSE = {
  ads: "ads",
  all: "all",
} as const;

export namespace Pause {
  export type Model = keyof typeof PAUSE;

  export function formatter(pause: Pause.Model): string {
    const isValidPause = (value: string): value is Pause.Model => {
      return value in PAUSE;
    };

    if (!isValidPause(pause)) {
      throw new Error(
        `Invalid pause: "${pause}". Valid values are: ${Object.keys(PAUSE).join(
          ", ",
        )}`,
      );
    }

    return PAUSE[pause];
  }
}
