import { Console } from "@woowacourse/mission-utils";
import { validateEmptyInput, validatePositiveInteger } from "./validators.js";
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
      // 양의 정수 검증 -> 구분자로 분리된 숫자 배열 검증 예정
      //validatePositiveInteger([input]);

      // === 3. 구분자 처리
      const { delimiter, numbers } = getDelimiterAndNumber(input);
      Console.print(`구분자: ${delimiter}, 숫자: ${numbers}`);

      // === 4. 구분자를 기준으로 문자열 분리
      const splitNumbers = numbers.split(delimiter);
      Console.print(splitNumbers);

      Console.print("입력값 검증 통과!");
    } catch (error) {
      Console.print(error.message);
      throw error; // Calculator에서 발생할 에러 감지용
    }
  }
}

export default App;
