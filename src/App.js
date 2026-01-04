import { CalculatorController } from "./controller/CalculatorController.js";

class App {
  #controller;

  constructor() {
    this.#controller = new CalculatorController();
  }

  async run() {
    await this.#controller.run();
  }
}

export default App;
