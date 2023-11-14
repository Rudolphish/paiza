//var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");
const N = Number(lines[0]);
let prodacts = {};
for (let n = 0; n < N; n++) {
  prodacts[n] = false;
}
for (let i = 1; i < lines.length; i++) {
  let num = Number(lines[i]);
  prodacts[num] = true;
}
let cnt = 0;
for (let index in prodacts) {
  if (!prodacts[index]) {
    cnt++;
  }
}
console.log(cnt);
