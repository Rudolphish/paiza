//var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");
const [D, L, H] = lines[0].split(" ").map((num) => Number(num));
let profit = 0;
let amount = 0;
for (let i = 1; i < D; i++) {
  if (Number(lines[i] <= L)) {
    profit -= Number(lines[i]);
    amount++;
  } else if (Number(lines[i] >= H)) {
    profit += Number(lines[i]) * amount;
    amount = 0;
  }
}
profit += Number(lines[D]) * amount;
console.log(profit);
