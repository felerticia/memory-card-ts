import { shuffle } from "./helper";

describe("shuffle", () => {
  const result = shuffle();
  it("should return an array of length 16", () => {
    expect(result).toHaveLength(16);
  });

  it("should return an array with objects containing 'src' and 'revealed' properties", () => {
    result.forEach((item) => {
      expect(item).toHaveProperty("src");
      expect(item).toHaveProperty("revealed");
    });
  });

  it("should return an array with 'revealed' property set to false for all items", () => {
    result.forEach((item) => {
      expect(item.revealed).toBe(false);
    });
  });

  it("should contain exactly 8 unique image sources repeated twice", () => {
    const srcSet = new Set(result.map((item) => item.src));
    expect(srcSet.size).toBe(8);

    const srcCount = result.reduce((count: Record<string, number>, item) => {
      count[item.src] = (count[item.src] || 0) + 1;
      return count;
    }, {});

    Object.values(srcCount).forEach((count) => {
      expect(count).toBe(2);
    });
  });

  it("should return a shuffled array with different order on multiple calls", () => {
    const result1 = shuffle();
    const result2 = shuffle();

    // Since shuffling is random, there's a small chance they could be the same,
    // but it should be extremely rare
    expect(result1).not.toEqual(result2);
  });
});
