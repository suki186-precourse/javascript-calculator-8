/* ===== 입력값 유효성 검증 ===== */

import { removeAllSpaces } from "./utils.js";

// 빈 문자열 체크 (공백만 있는 경우 포함) -> Calculator에서 처리
export const validateEmptyInput = (input) => {
  if (input === undefined || input === null) return true;
  return removeAllSpaces(input).length === 0;
};
