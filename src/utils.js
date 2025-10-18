import { DEFAULT_DELIMITERS } from "./constants.js";

/* ===== 공백 처리 ====== */

// 문자열의 모든 공백 제거
export const removeAllSpaces = (str) => {
  if (typeof str !== "string" || str === null || str === undefined) return "";
  return str.replace(/\s+/g, "");
};

/* ===== 구분자 처리 ====== */

// 커스텀 구분자 추출 (//$구분자\n)
export const extractCustomDelimiter = (input) => {
  const delimiter = input.match(/^\/\/(.)\\n/);

  // 커스텀 구분자가 있다면 (.)의 값 반환
  return delimiter ? delimiter[1] : null;
};

// 구분자와 숫자 분리 (['*', '1*2*3'])
export const getDelimiterAndNumber = (input) => {
  const customDelimiter = extractCustomDelimiter(input); // 커스텀 구분자

  // 1. 커스텀 구분자 존재
  if (customDelimiter) {
    const numbers = input.split(`//${customDelimiter}\\n`)[1];
    return { delimiter: customDelimiter, numbers };
  }

  // 2. 커스텀 구분자 없음
  return { delimiter: DEFAULT_DELIMITERS, numbers: input };
};
