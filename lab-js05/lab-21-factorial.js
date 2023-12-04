function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
let number = prompt('Enter Your Number');
let result = factorial(number);
alert(`Factorial of ${number} is ${result}`);