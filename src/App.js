import { Console } from "@woowacourse/mission-utils";
import { validateEmptyInput } from "./validators.js";

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
    } catch (error) {
      Console.print(error.message);
      throw error; // Calculator에서 발생할 에러 감지용
    }
  }
}

export default App;
