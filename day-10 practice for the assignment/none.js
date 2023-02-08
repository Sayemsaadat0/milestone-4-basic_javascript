// problem 1 
/* var str = "50*3+10/2-5";
var calculation = str.match(/\d+|[^0-9]/g);
var result;

for (var a = 0; a < calculation.length; a++) {
  if (a == 0) {
    result = parseInt(calculation[a]);
  } else {
    if (!isNaN(calculation[a])) {
      switch (calculation[a - 1]) {
        case "-":
          result -= parseInt(calculation[a]);
          break;
        case "+":
          result += parseInt(calculation[a]);
          break;
        case "*":
          result *= parseInt(calculation[a]);
          break;
        case "/":
          result /= parseInt(calculation[a]);
          break;
      }
    }
  }
}
console.log(result); */

// problem 2
