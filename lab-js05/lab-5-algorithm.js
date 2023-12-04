function showPrimesUpTo(limit) {
    for (let number = 2; number <= limit; number++) {
        if (isPrime(number)) {
            console.log(number);
        }
    }
}
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
showPrimesUpTo(30);