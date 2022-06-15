const rect = require("./rectangle");

function solveRect(l, w) {
  console.log(`${l} hihihihi, ${w}`);

  rect(l, w, (err, rectangle) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(`Hi, ${l}, ${w}, ${rectangle.perimeter()}`);
      console.log(`bye ${rectangle.area()}`);
    }
  });
}

solveRect(3, 4);
solveRect(2, 8);
solveRect(8, 0);
solveRect(-2, 8);
