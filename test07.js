//var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");
const N = Number(lines[1]);
const K = lines[0].split(" ").map((num) => Number(num));
let resultList = [];
for (let i = 2; i < lines.length; i++) {
  let result = 0;
  const CUR = lines[i].split(" ").map((num) => Number(num));
  for (let c of CUR) {
    if (K.includes(c)) {
      result++;
    }
  }
  resultList.push(result);
}
console.log(resultList.join("\n"));
