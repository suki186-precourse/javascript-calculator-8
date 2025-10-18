import { Console } from "@woowacourse/mission-utils";
import Calculator from "./Calculator.js";

class App {
  async run() {
    try {
      // === 1. 사용자 입력 처리
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );

      // === 2. 계산기 생성 및 sum() 호출
      const calculator = new Calculator(input);
      const result = calculator.sum();

      // === 3. 결과 출력
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
      throw error; // Calculator에서 발생한 에러 다시 던지기
    }
  }
}

export default App;
