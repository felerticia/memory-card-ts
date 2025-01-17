import { CardType } from "../types";

export const shuffle = (): CardType[] => {
  return new Array(16)
    .fill(0)
    .map((_, i) => ({
      src: `/pix/0${(i % 8) + 1}.jpg`,
      revealed: false,
    }))
    .sort(() => Math.random() - 0.5);
};
