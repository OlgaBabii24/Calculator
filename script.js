import { Controller } from "./controller.js";
import { View } from "./view.js";
import { Model } from "./model.js";

class Calculator {
    constructor(Controller, Model, View) {
        this.controller = new Controller(new Model(), new View());
    }

    init() {
        this.controller.keysListener();
        this.controller.clearListener();
        this.controller.equationListener();
        this.controller.operationsListener();
        this.controller.changeSignListener();
        this.controller.percentListener();
    }
}

const calculator = new Calculator(Controller, Model, View);
calculator.init();
