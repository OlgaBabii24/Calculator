const operations = {
    'add': "+",
    'eq': "=",
    'mult': '*',
    'div': '/',
    'sub': '-'
};

export class Model {
    constructor() {
        this.operation = "";
        this.operand1 = "";
        this.operand2 = "";
        this.result = 0;
        this.isResult = false;
        this.resultString = "";
    }

    setChar(char) {
        if (this.isResult) {
            this.reset();
        }
        if (this.operation === "") {
            this.operand1 += char;
        } else {
            this.operand2 += char;
        }
        this.resultString += char;
    }

    getResultString() {
        return this.resultString;
    }

    setOperation(operation) {
        if (this.operand1 === "" && this.operand2 === "") {
            this.operand1 = 0;
            this.operation = operation;
            this.resultString = "0" + operations[this.operation];
        } else if (this.isResult) {
            this.operation = operation;
            this.operand1 = this.result;
            this.operand2 = "";
            this.isResult = false;
            this.resultString += operations[this.operation];
        } else if (this.operation === "") {
            this.operation = operation;
            this.resultString += operations[this.operation];
        } else if (this.operand1 !== "" && this.operand2 === "") {
            this.operation = operation;
            let tempString = this.resultString;
            this.resultString = tempString.substring(0, tempString.length - 1) + operations[this.operation];
        } else if (this.operand1 !== "" && this.operand2 !== "") {
            this.performExpression();
            if (this.resultString === "Division by 0") {
                this.reset();
                this.resultString = "Division by 0";
            } else {
                this.operand1 = this.result;
                this.operand2 = "";
                this.operation = operation;
                this.isResult = false;
                this.resultString += operations[this.operation];
            }
        }
    }

    getResult() {
        this.isResult = false;
        if (this.operand2 === "") {
            this.result = this.operand1;
        }
        return this.result;
    }

    setResult(value) {
        this.result = value;
        this.reset();
    }

    setChangeSign() {
        this.resultString = parseFloat(this.resultString) * (-1);
        return this.resultString;
    }

    setPercent() {
        this.resultString = parseFloat(this.resultString) / 100;
        return this.resultString;
    }

    reset() {
        this.operation = "";
        this.operand1 = "";
        this.operand2 = "";
        this.result = 0;
        this.isResult = false;
        this.resultString = "";
    }

    performExpression() {
        if (this.operand2 === "") {
            this.result = this.operand1;
        } else {
            switch (this.operation) {
                case 'add':
                    this.result = parseFloat(this.operand1) + parseFloat(this.operand2);
                    break;
                case 'mult':
                    this.result = parseFloat(this.operand1) * parseFloat(this.operand2);
                    break;
                case 'sub':
                    this.result = parseFloat(this.operand1) - parseFloat(this.operand2);
                    break;
                case 'div':
                    if (this.operand2 === '0') {
                        this.resultString = "Division by 0";
                        this.operand1 = "";
                        this.operand2 = "";
                        this.result = 0;
                    } else {
                        this.result = parseFloat(this.operand1) / parseFloat(this.operand2);
                    }
                    break;
                default:
                    this.result = this.operand1;
            }
        }
        this.isResult = true;
        this.resultString !== "Division by 0" ? this.resultString = this.result : this.resultString;
    }
}

