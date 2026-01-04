import { DELIMITERS } from "../constants.js";

class Calculator {
  calculate(input) {
    // 빈 문자열 처리
    if (!input) return 0;

    // 문자열 분리, 숫자 배열 변환
    const numbers = this.#parseInput(input);

    // 합계 계산
    const sum = numbers.reduce((acc, cnt) => acc + cnt, 0);

    return sum;
  }

  #parseInput(input) {
    // 커스텀 구분자 추출
    const match = input.match(/^\/\/(.)\\n/); // 커스텀 구분자 있는지
    let customDelimiter;
    let targetString;

    // 분리할 문자열 확정
    if (match) {
      // 커스텀 구분자 있는 경우
      customDelimiter = match[1];
      targetString = input.split(`//${customDelimiter}\\n`)[1];
    } else {
      // 없는 경우
      customDelimiter = new RegExp(`[${DELIMITERS.DEFAULT.join("")}]`);
      targetString = input;
    }

    // 문자열 분리, 숫자 배열 변환 (기본, 커스텀 모두)
    const numbers = targetString.split(customDelimiter).map(Number);
    console.log(numbers);

    // 결과 배열 반환
    return numbers;
  }
}
export default Calculator;
