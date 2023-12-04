var start = 2;
var end = 12;
for (var i = 1; i <= 12; i++) {
  for (var j = start; j <= end; j++) {
    var product = i * j;
    console.log(i + " * " + j + " = " + product);
  }
  console.log("\n");
}