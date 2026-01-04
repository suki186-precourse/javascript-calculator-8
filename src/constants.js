export const INPUT_MESSAGES = Object.freeze({
  START: "덧셈할 문자열을 입력해 주세요.\n",
});

export const OUTPUT_MESSAGES = Object.freeze({
  RESULT: (sum) => `결과 : ${sum}`,
});

export const DELIMITERS = Object.freeze({
  DEFAULT: [",", ":"],
  CUSTOM_START: "//",
  CUSTOM_END: "\\n",
});

// ===== 예외 처리
export const ERROR_PREFIX = "[ERROR]";

export const ERROR_MESSAGES = Object.freeze({
  // 1. 양수
  INVALID_NUMBER: `${ERROR_PREFIX} 양수만 입력 가능합니다.`,
  EMPTY_NUMBER: `${ERROR_PREFIX} 더할 숫자들을 입력해 주세요.`,

  // 2. 구분자
  INVALID_DELIMITER: `${ERROR_PREFIX} 숫자는 구분자로 사용할 수 없습니다.`,
  DUPLICATE_DELIMITER: `${ERROR_PREFIX} 구분자를 연속으로 사용할 수 없습니다.`,
});
