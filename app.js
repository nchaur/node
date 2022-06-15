const rect = require("./rectangle");

function solveRect(l, w) {
  console.log(`${l} hihihihi, ${w}`);

  if (l <= 0 || w <= 0) {
    console.log(`must be higher than 0 ${w}, ${l}`);
  } else {
    console.log(`first hi ${rect.area(l, w)}`);
    console.log(rect.perimeter(l, w));
  }
}

solveRect(3, 4);
solveRect(2, 8);
solveRect(8, 0);
solveRect(-2, 8);
