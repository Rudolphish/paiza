//var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");
const N = lines[0].split(" ").map((num) => Number(num));
const SAMPLE = lines[1].split(" ");
const TARGET = lines[2].split(" ");
let arr = TARGET[0].split("");
let changed = "";
let same = false;
for (let i = 0; i < N; i++) {
  if (SAMPLE == TARGET) {
    same = true;
    break;
  }
  let move = arr.splice(0, 1)[0];
  arr = [...arr, move];
  changed = arr.join("");
  if (SAMPLE == changed) {
    same = true;
    break;
  }
}
if (same) {
  console.log("Yes");
} else {
  console.log("No");
}
