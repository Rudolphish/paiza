/**
A B N
x_1 y_1
x_2 y_2
...
x_N y_N
・1 行目に新幹線の片道の料金を表す整数 A、ホテルの一泊あたりの料金を表す整数 B、
  インターンシップの回数を表す整数 N がこの順で半角スペース区切りで与えられます。
・続く N 行のうちの i 行目 (1 ≦ i ≦ N) には、i 番目のインターンシップの初日を表す整数 x_i と
  最終日を表す整数 y_i がこの順で半角スペース区切りで与えられます。
・入力は合計で N + 1 行となり、入力値最終行の末尾に改行が 1 つ入ります。
 */

/**
 * 一番安く行動したときの宿泊費と交通費の合計の自己負担額を整数で出力してください。
 */

//var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");

const [A, B, N] = lines[0].split(" ").map((num) => Number(num));
let prevEnd = 0;
let result = 0;
for (let i = 1; i <= N; i++) {
  const [START, END] = lines[i].split(" ").map((num) => Number(num));
  if (i == 1 && START != 1) {
    result += A;
  }
  let interval = 0;
  if (prevEnd != 0) {
    interval = START - prevEnd;
    let train = A * 2;
    let hotel = B * interval;
    if (interval > 0) {
      if (interval >= 2 && train < hotel) {
        result += train;
      } else {
        result += hotel;
      }
    }
  }
  prevEnd = END;
}
console.log(result + A);
