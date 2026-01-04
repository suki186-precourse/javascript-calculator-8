import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGES } from "../constants.js";

export const OutputView = {
  // 계산 결과 출력
  printNumberSum(sum) {
    Console.print(OUTPUT_MESSAGES.RESULT(sum));
  },

  // 에러메세지 출력
  //   printError(error) {
  //     Console.print(error.message);
  //   },
};
