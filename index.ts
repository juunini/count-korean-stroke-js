export function countKoreanStroke(이름: string, strict = true): number {
  let 전체획수 = 0;

  const 자음획수 = get자음획수(strict);
  const 모음획수 = [
    2 /* ㅏ */, 3 /* ㅐ */, 3 /* ㅑ */, 4 /* ㅒ */, 2 /* ㅓ */, 3 /* ㅔ */,
    3 /* ㅕ */, 4 /* ㅖ */, 2 /* ㅗ */, 4 /* ㅘ */, 5 /* ㅙ */, 3 /* ㅚ */,
    3 /* ㅛ */, 2 /* ㅜ */, 4 /* ㅝ */, 5 /* ㅞ */, 3 /* ㅟ */, 3 /* ㅠ */,
    1 /* ㅡ */, 2 /* ㅢ */, 1 /* ㅣ */,
  ];
  const 받침획수 = get받침획수(strict);

  const 가 = 0xac00;
  const 힣 = 0xd7a3;

  for (const 글자 of 이름) {
    const charCode = 글자.charCodeAt(0);

    if (charCode >= 가 && charCode <= 힣) {
      const offset = charCode - 가;
      const 자음인덱스 = Math.floor(offset / 588);
      const 모음인덱스 = Math.floor((offset % 588) / 28);
      const 받침인덱스 = offset % 28;

      let 획수 = 0;
      획수 += 자음획수[자음인덱스];
      획수 += 모음획수[모음인덱스];
      획수 += 받침획수[받침인덱스];

      전체획수 += 획수;
    } else if (글자 === "ㅇ") {
      전체획수 += 1;
    }
  }

  return 전체획수;
}

function get자음획수(strict = false) {
  if (strict) {
    return [
      1 /* ㄱ */, 2 /* ㄲ */, 1 /* ㄴ */, 2 /* ㄷ */, 4 /* ㄸ */, 3 /* ㄹ */,
      3 /* ㅁ */, 4 /* ㅂ */, 8 /* ㅃ */, 2 /* ㅅ */, 4 /* ㅆ */, 1 /* ㅇ */,
      2 /* ㅈ */, 4 /* ㅉ */, 3 /* ㅊ */, 2 /* ㅋ */, 3 /* ㅌ */, 4 /* ㅍ */,
      3 /* ㅎ */,
    ];
  }

  return [
    2 /* ㄱ */, 4 /* ㄲ */, 2 /* ㄴ */, 3 /* ㄷ */, 6 /* ㄸ */, 5 /* ㄹ */,
    4 /* ㅁ */, 4 /* ㅂ */, 8 /* ㅃ */, 2 /* ㅅ */, 4 /* ㅆ */, 1 /* ㅇ */,
    3 /* ㅈ */, 6 /* ㅉ */, 4 /* ㅊ */, 3 /* ㅋ */, 4 /* ㅌ */, 4 /* ㅍ */,
    3 /* ㅎ */,
  ];
}

function get받침획수(strict = false) {
  if (strict) {
    return [
      0, 1 /* ㄱ */, 2 /* ㄲ */, 3 /* ㄳ */, 1 /* ㄴ */, 3 /* ㄵ */, 4 /* ㄶ */,
      2 /* ㄷ */, 3 /* ㄹ */, 4 /* ㄺ */, 6 /* ㄻ */, 7 /* ㄼ */, 5 /* ㄽ */,
      6 /* ㄾ */, 7 /* ㄿ */, 5 /* ㅀ */, 3 /* ㅁ */, 4 /* ㅂ */, 6 /* ㅄ */,
      2 /* ㅅ */, 4 /* ㅆ */, 1 /* ㅇ */, 2 /* ㅈ */, 3 /* ㅊ */, 2 /* ㅋ */,
      3 /* ㅌ */, 4 /* ㅍ */, 3 /* ㅎ */,
    ];
  }

  return [
    0, 2 /* ㄱ */, 4 /* ㄲ */, 4 /* ㄳ */, 2 /* ㄴ */, 5 /* ㄵ */, 5 /* ㄶ */,
    3 /* ㄷ */, 5 /* ㄹ */, 7 /* ㄺ */, 9 /* ㄻ */, 9 /* ㄼ */, 7 /* ㄽ */,
    9 /* ㄾ */, 9 /* ㄿ */, 8 /* ㅀ */, 4 /* ㅁ */, 4 /* ㅂ */, 6 /* ㅄ */,
    2 /* ㅅ */, 4 /* ㅆ */, 1 /* ㅇ */, 3 /* ㅈ */, 4 /* ㅊ */, 3 /* ㅋ */,
    4 /* ㅌ */, 4 /* ㅍ */, 3 /* ㅎ */,
  ];
}
