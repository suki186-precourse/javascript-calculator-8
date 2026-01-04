import Calculator from "./domain/Calculator.js";
import { InputView } from "./view/InputView.js";
import { OutputView } from "./view/OutputView.js";

class App {
  async run() {
    try {
      const calculator = new Calculator();
      const input = await InputView.readDelimiterAndNumberString();
      const result = calculator.calculate(input);
      OutputView.printNumberSum(result);
    } catch (error) {
      OutputView.printError(error.message);
      throw error;
    }
  }
}

export default App;
