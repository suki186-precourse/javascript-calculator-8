import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../constants.js";

export const InputView = {
  // ===== 구분자와 양수 입력
  async readDelimiterAndNumberString() {
    const delimiterAndNumberString = await Console.readLineAsync(
      INPUT_MESSAGES.START
    );
    return delimiterAndNumberString;
  },
};
