var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");
const joinN = lines[0].split("-").join("").split("");
console.log(joinN);
let result = 0;
for (let num of joinN) {
  switch (num) {
    case "1":
      result += 3;
      break;
    case "2":
      result += 4;
      break;
    case "3":
      result += 5;
      break;
    case "4":
      result += 6;
      break;
    case "5":
      result += 7;
      break;
    case "6":
      result += 8;
      break;
    case "7":
      result += 9;
      break;
    case "8":
      result += 10;
      break;
    case "9":
      result += 11;
      break;
    case "0":
      result += 12;
      break;
    default:
  }
  console.log(result * 2);
}
