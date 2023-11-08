//var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");
const [H, W] = lines[0].split(" ").map((num) => Number(num));
let tempLine = "";
for (let i = 1; i < H + 1; i++) {
  tempLine = tempLine != "" ? tempLine + lines[i] : lines[i];
}
let scores = [];
for (let j = H + 1; j < H + H + 1; j++) {
  lines[j].split(" ").map((k) => scores.push(k));
}
let result = 0;
for (p in tempLine) {
  if (tempLine[p] == "o") {
    result += Number(scores[p]);
  }
}

console.log(result);
