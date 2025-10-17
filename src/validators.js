/* ===== 입력값 유효성 검증 ===== */

import { ERROR, POSITIVE_INTEGER } from "./constants.js";
import { removeAllSpaces } from "./utils.js";

// 빈 문자열 체크 (공백만 있는 경우 포함) -> Calculator에서 처리
export const validateEmptyInput = (input) => {
  if (input === undefined || input === null) return true;
  return removeAllSpaces(input).length === 0;
};

// 양의 정수 체크(음수, 숫자가 아닌 값, 소수 등 -> Error)
export const validatePositiveInteger = (values) => {
  for (const e of values) {
    const noSpacesInput = removeAllSpaces(e); // 공백 제거

    // 빈 문자열은 Calculator에서 처리
    if (noSpacesInput === "") continue;

    // 숫자가 아닌 값 체크
    if (isNaN(noSpacesInput)) {
      throw new Error(`${ERROR} 숫자가 아닌 값이 포함되어 있습니다.`);
    }

    // 양의 정수 정규식 체크
    if (!POSITIVE_INTEGER.test(noSpacesInput)) {
      throw new Error(`${ERROR} 양의 정수만 입력 가능합니다.`);
    }
  }
};
