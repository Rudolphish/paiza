//var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
//2つの円の中心の座標を (xc, yc)、半径をそれぞれ r_1, r_2
//n は与えられる人の数を表す整数で、x_i, y_i は i (1 ≦ i ≦ n) 番目の人の座標を表す整数です
//r_1^2 <= (x-xc)^2 + (y-yc)^2 <= r_2
var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");
const [xc, yc, r_1, r_2] = lines[0].split(" ").map((num) => Number(num));
const n = Number(lines[1]);
for (let i = 2; i < n + 2; i++) {
  const [x, y] = lines[i].split(" ").map((num) => Number(num));
  if (
    r_1 * r_1 <= (x - xc) * (x - xc) + (y - yc) * (y - yc) &&
    r_2 * r_2 >= (x - xc) * (x - xc) + (y - yc) * (y - yc)
  ) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
