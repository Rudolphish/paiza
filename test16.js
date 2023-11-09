//var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");
// 投入しようとしている寿司を指定された順に並べることができる場合は "Yes" を、そうでない場合は "No" を出力してください。
const [N, M] = lines[0].split(" ").map((num) => Number(num));
function checkList(listA_, listB_) {
  if (listA_ == listB_) {
    return true;
  }
  let listAstr = listA_.sort().toString();
  let listBstr = listB_.sort().toString();
  if (listAstr != listBstr) {
    return false;
  } else {
    return true;
  }
}
let listA = [];
let listB = [];
for (let i = 1; i < M + 1; i++) {
  listA.push(lines[i]);
}
for (let j = M + 1; j < M + M + 1; j++) {
  listB.push(lines[j]);
}
if (checkList(listA, listB)) {
  console.log("Yes");
} else {
  console.log("No");
}
