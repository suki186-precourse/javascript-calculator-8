import { getDelimiterAndNumber } from "./utils.js";
import {
  validateDelimiter,
  validateEmptyInput,
  validatePositiveInteger,
} from "./validators.js";

export default class Calculator {
  constructor(input) {
    this.input = input;
  }

  // 더하기 함수
  sum() {
    // 1. 빈 문자열 체크 -> 합계 0 처리
    if (validateEmptyInput(this.input)) return 0;

    // 2. 구분자 추출
    const { delimiter, numbersString } = getDelimiterAndNumber(this.input);

    // 3. 구분자 유효성 검사
    validateDelimiter(delimiter, numbersString);

    // 4. 구분자를 기준으로 문자열 분리
    const splitNumbers = numbersString.split(delimiter);

    // 5. 양의 정수 검증
    validatePositiveInteger(splitNumbers);

    // 6. 문자를 숫자로 변환 후 합 계산
    const numbers = splitNumbers.map(Number);
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);

    return sum;
  }
}
