import { DELIMITERS } from "../constants.js";

class Calculator {
  calculate(input) {
    // 빈 문자열 처리
    if (!input) return 0;

    // 문자열 분리
    // 숫자 배열 변환
    const regex = new RegExp(`[${DELIMITERS.DEFAULT.join("")}]`);
    const numbers = input.split(regex).map(Number);

    // 합계 계산
    const sum = numbers.reduce((acc, cnt) => acc + cnt, 0);

    return sum;
  }

  // #parseInput (input) {
  //     // 구분자 추출
  //     // 문자열 분리
  // }
}
export default Calculator;
