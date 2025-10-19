import { ERROR, POSITIVE_INTEGER } from "./constants.js";
import { removeAllSpaces } from "./utils.js";

/* ===== 입력값 유효성 검증 ===== */

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

// 구분자 관련 예외 처리
export const validateDelimiter = (delimiter, numberString) => {
  // 1. 값 없이 구분자만 입력한 경우
  if (!numberString || numberString.length === 0) {
    throw new Error(`${ERROR} 더해야할 값이 없습니다.`);
  }

  // 2. 구분자가 숫자인 경우
  if (!isNaN(delimiter)) {
    throw new Error(`${ERROR} 숫자는 구분자로 사용할 수 없습니다.`);
  }

  // 3. 연속 구분자
  if (
    numberString.includes(`${delimiter}${delimiter}`) ||
    numberString.includes("::") ||
    numberString.includes(",,")
  ) {
    throw new Error(`${ERROR} 구분자가 연속으로 사용되었습니다.`);
  }
};
