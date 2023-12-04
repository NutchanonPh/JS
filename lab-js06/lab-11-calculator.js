const calculator = {
    read() {
        this.input1 = +prompt('Number 1: ','');
        this.input2 = +prompt('Number 2: ','');
    },
    sum() {
        return this.input1 + this.input2;
    },
    mul() {
        return this.input1 * this.input2;
    }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());