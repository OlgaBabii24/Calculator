export class View {

    constructor() {
        this.screen = document.getElementById('display');
        this.screen.value = "0";
        this.operations = document.querySelectorAll('.operation');
        this.clearBtn = document.getElementById('AC');
        this.keys = document.querySelectorAll('.key');
        this.equal = document.getElementById('eq');
        this.changeSignBtn = document.getElementById('plusm');
        this.percentageBtn = document.getElementById('percent');
    }

    displayResult(value) {
        this.screen.value = value;
    }

    clearScreen() {
        this.screen.value = "0";
    }

    getDisplayResult() {
        return this.screen.value;
    }
}
