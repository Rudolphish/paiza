//var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");
//n 日間の始値、終値、高値、安値を 1 つの半角スペース区切りで1行に出力してください。
const N = Number(lines[0]);
let priceList = [];
for (i = 1; i < N + 1; i++) {
  lines[i].split(" ").map((p) => priceList.push(Number(p)));
}
const startPrice = priceList[0];
const endPrice = priceList[priceList.length - 3];
priceList.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});
const minPrice = priceList[0];
const maxPrice = priceList[priceList.length - 1];
console.log(startPrice + " " + endPrice + " " + maxPrice + " " + minPrice);
