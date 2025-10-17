import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // 덧셈할 문자열 입력
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      Console.print(`입력 값: ${input}`);
    } catch (error) {
      Console.print(error.message);
      throw error; // 나중에 Calculator에서 발생한 에러 감지
    }
  }
}

export default App;
