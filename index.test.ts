import { test, expect, describe } from "bun:test";

import { countKoreanStroke } from ".";

describe("strict", () => {
  test("죠나단 죠스타", () => {
    expect(countKoreanStroke("죠나단")).toBe(13);
    expect(countKoreanStroke("죠스타")).toBe(13);
    expect(countKoreanStroke("죠나단 죠스타")).toBe(26);
  });

  test("디오 브란도", () => {
    expect(countKoreanStroke("디오")).toBe(6);
    expect(countKoreanStroke("브란도")).toBe(15);
    expect(countKoreanStroke("디오 브란도")).toBe(21);
  });

  test("지상 최강의 개발자 쥬니니", () => {
    expect(countKoreanStroke("지상")).toBe(8);
    expect(countKoreanStroke("최강의")).toBe(13);
    expect(countKoreanStroke("개발자")).toBe(17);
    expect(countKoreanStroke("쥬니니")).toBe(9);
    expect(countKoreanStroke("지상 최강의 개발자 쥬니니")).toBe(47);
  });
});

describe("non-strict", () => {
  test("죠나단 죠스타", () => {
    expect(countKoreanStroke("죠나단", false)).toBe(17);
    expect(countKoreanStroke("죠스타", false)).toBe(15);
    expect(countKoreanStroke("죠나단 죠스타", false)).toBe(32);
  });

  test("디오 브란도", () => {
    expect(countKoreanStroke("디오", false)).toBe(7);
    expect(countKoreanStroke("브란도", false)).toBe(19);
    expect(countKoreanStroke("디오 브란도", false)).toBe(26);
  });

  test("지상 최강의 개발자 쥬니니", () => {
    expect(countKoreanStroke("지상", false)).toBe(9);
    expect(countKoreanStroke("최강의", false)).toBe(15);
    expect(countKoreanStroke("개발자", false)).toBe(21);
    expect(countKoreanStroke("쥬니니", false)).toBe(12);
    expect(countKoreanStroke("지상 최강의 개발자 쥬니니", false)).toBe(57);
  });
});
