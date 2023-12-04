var sum = 0;
for (var i = 1; i <= 100; i++) {
  sum += i;
}
console.log("The sum of all numbers from 1 to 100 is: " + sum);

var sumeven = 0;
for (var j = 2; j <= 100; j += 2) {
  sumeven += j;
}
console.log("The sum of even numbers from 1 to 100 is: " + sumeven);

var sumodd = 0;
for (var k = 1; k <= 100; k += 2) {
  sumodd += k;
}
console.log("The sum of odd numbers from 1 to 100 is: " + sumodd);

