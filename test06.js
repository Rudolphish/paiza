//var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");
const N = Number(lines[0]);
const KEY = lines[1];
let lineList = [];
for (let line in lines) {
  if (line > 1) {
    lineList.push(lines[line]);
  }
}
const result = lineList.filter((ln) => ln.includes(KEY));
if (result.length > 0) {
  console.log(result.join("\n"));
} else {
  console.log("None");
}
