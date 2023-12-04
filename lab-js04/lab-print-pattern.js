function createStaircase(symbol, rows) {
    for (var i = 1; i <= rows; i++) {
      console.log(symbol.repeat(i));
    }
  }
  createStaircase('*', 4);