/* ===== 공백 처리 ====== */

// 문자열의 모든 공백 제거
export const removeAllSpaces = (str) => {
  if (typeof str !== "string" || str === null || str === undefined) return "";
  return str.replace(/\s+/g, "");
};
