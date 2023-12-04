function Calculator() {
    this.input1 = 0;
    this.input2 = 0;
    this.read = function() {
        this.input1 = +prompt('Enter first number: ','');
        this.input2 = +prompt('Enter second number: ','');
    };
    this.sum = function() {
        return this.input1 + this.input2;
    };
    this.mul = function() {
        return this.input1 * this.input2; 
    };
}
const calculator = new Calculator();
calculator.read();
const sumResult = calculator.sum();
const mulResult = calculator.mul();
alert(`Sum = ${sumResult}`);
alert(`Mul = ${mulResult}`)