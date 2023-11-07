//var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");
const [N, R] = lines[0].split(" ").map((num) => Number(num));
// n r　　　#箱の数n, ボールの半径r 表す整数
// h_1 w_1 d_1　　　#1個目の箱の高さ、幅、奥行きを表す整数
// h_2 w_2 d_2　　　#2個目の箱の高さ、幅、奥行きを表す整数
// ...
// h_n w_n d_n　　　#n個目の箱の高さ、幅、奥行きを表す整数

for (let i = 1; i < N + 1; i++) {
  const tempArr = lines[i].split(" ").map((num) => Number(num));
  const minNum = Math.min(...tempArr);
  if (R <= minNum) {
    console.log(i);
  }
}
