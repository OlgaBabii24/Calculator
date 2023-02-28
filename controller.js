export class Controller {

    constructor(Model, View) {
        this.model = Model;
        this.view = View;
    }

    keysListener() {
        console.log(this.view.keys);
        this.view.keys.forEach((e) => e.addEventListener('click', () => {
            this.model.setChar(e.getAttribute('data-key'));
            this.view.displayResult(this.model.getResultString());
        }));
    }

    operationsListener() {
        this.view.operations.forEach((e) => e.addEventListener('click', () => {
            let displayString = this.view.getDisplayResult();
            this.model.setOperation(e.getAttribute('data-op'));
            this.view.displayResult(this.model.getResultString());
        }));
    }

    equationListener() {
        this.view.equal.addEventListener('click', () => {
            this.model.performExpression();
            this.view.displayResult(this.model.getResultString());
        });
    }

    clearListener() {
        this.view.clearBtn.addEventListener('click', () => {
            this.model.reset();
            this.view.clearScreen();
        })
    }

    changeSignListener() {
        this.view.changeSignBtn.addEventListener('click', () => {
            this.view.displayResult(this.model.setChangeSign());
        })
    }

    percentListener() {
        this.view.percentageBtn.addEventListener('click', () => {
            this.view.displayResult(this.model.setPercent());
        })
    }
}