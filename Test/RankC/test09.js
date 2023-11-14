//var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");
const N = Number(lines[0]);

let allArr = [];
for (let i = 1; i < N + 1; i++) {
  allArr.push(Number(lines[i]));
}
for (let score of allArr) {
  let result = allArr.filter(function (value) {
    return value > score;
  });
  console.log(result.length + 1);
}
