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

  // 덧셈 계산기 함수
  sum() {
    // 1. 빈 문자열 체크 -> 합계 0 처리
    if (validateEmptyInput(this.input)) return 0;

    // 2. 구분자 추출, 유효성 검사
    const { delimiter, numbersString } = this.#parseDelimiter();

    // 3. 구분자를 기준으로 문자열 분리, 양의 정수 검증
    const numbers = this.#parseNumbers(delimiter, numbersString);

    // 4. 합 계산
    const sum = this.#calculateSum(numbers);

    return sum;
  }

  // 구분자 추출, 유효성 검사 함수
  #parseDelimiter() {
    const { delimiter, numbersString } = getDelimiterAndNumber(this.input);
    validateDelimiter(delimiter, numbersString);

    return { delimiter, numbersString };
  }

  // 문자열 분리, 양의 정수 검증 함수
  #parseNumbers(delimiter, numbersString) {
    const splitNumbers = numbersString.split(delimiter);
    validatePositiveInteger(splitNumbers);

    return splitNumbers.map(Number);
  }

  // 합 계산 함수
  #calculateSum(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
}
