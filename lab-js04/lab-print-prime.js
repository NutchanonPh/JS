function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i =2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
function findPrimeInRange(start, end) {
    const primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}
const primeInRange = findPrimeInRange(1, 100);
console.log("จำนวนเฉพาะ 1 ถึง 100 = " + primeInRange);