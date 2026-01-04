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
