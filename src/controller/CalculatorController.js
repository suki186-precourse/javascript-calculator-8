import Calculator from "../domain/Calculator.js";
import { InputView } from "../view/InputView.js";
import { OutputView } from "../view/OutputView.js";

export class CalculatorController {
  #calculator;

  constructor() {
    this.#calculator = new Calculator();
  }

  async run() {
    try {
      // 1. 입력
      const input = await InputView.readDelimiterAndNumberString();

      // 2. 계산 (Domain 호출)
      const result = this.#calculator.calculate(input);

      // 3. 출력
      OutputView.printNumberSum(result);
    } catch (error) {
      throw error;
    }
  }
}
