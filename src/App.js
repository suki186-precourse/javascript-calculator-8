import { Console } from "@woowacourse/mission-utils";
import {
  validateDelimiter,
  validateEmptyInput,
  validatePositiveInteger,
} from "./validators.js";
import { getDelimiterAndNumber } from "./utils.js";

class App {
  async run() {
    try {
      // === 1. 사용자 입력 처리
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      Console.print(`입력 값: ${input}`);

      // === 2. 입력값 검증
      // 빈 문자열 체크 -> 합계 0 처리
      if (validateEmptyInput(input)) {
        Console.print("결과 : 0");
        return;
      }

      // === 3. 구분자 처리 및 유효성 검사
      const { delimiter, numbersString } = getDelimiterAndNumber(input);
      validateDelimiter(delimiter, numbersString);
      Console.print(`구분자: ${delimiter}, 숫자: ${numbersString}`);

      // === 4. 구분자를 기준으로 문자열 분리
      const splitNumbers = numbersString.split(delimiter);
      Console.print(splitNumbers);

      // === 5. 양의 정수 검증 및 문자를 숫자로 변환
      validatePositiveInteger(splitNumbers);

      const numbers = splitNumbers.map(Number);
      Console.print(numbers);

      // === 6. 모든 숫자의 합 계산
      const sum = numbers.reduce((acc, cur) => acc + cur, 0);

      // === 7. 계산된 합계 출력
      Console.print(`결과 : ${sum}`);
    } catch (error) {
      Console.print(error.message);
      throw error; // Calculator에서 발생할 에러 감지용
    }
  }
}

export default App;
