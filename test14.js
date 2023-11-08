//var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");
//今月末にポイントカードにたまっているポイントの値を１行に出力してください。
const N = Number(lines[0]);
let points = 0;
for (let i = 1; i < N + 1; i++) {
  const [D, P] = lines[i].split(" ");
  let dateStrArr = [];
  if (D.length > 1) {
    D.split("").map((num) => {
      dateStrArr.push(num);
    });
  } else {
    dateStrArr.push(D);
  }
  if (dateStrArr.includes("3")) {
    points += Math.floor(Number(P) * 0.03);
  } else if (dateStrArr.includes("5")) {
    points += Math.floor(Number(P) * 0.05);
  } else {
    points += Math.floor(Number(P) * 0.01);
  }
}
console.log(points);
