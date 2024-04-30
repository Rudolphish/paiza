/**
N
A_1 B_1
A_2 B_2
...
A_N B_N
・1 行で過去に行われたじゃんけんの回数を表す整数 N が与えられます。
・続く N 行のうちの i 行目 (1 ≦ i ≦ N) には、(i 回目のじゃんけんにおいてアリスさんが出した手)、
(i 回目のじゃんけんにおいてボブさんが出した手) を表す文字列 A_i, B_i がこの順で半角スペース区切りで与えられます。
・入力は合計で N + 1 行となり、末尾に改行が 1 つ入ります。
・じゃんけんの手は「グー」、「チョキ」、「パー」の 3 種類のみであり、
それぞれ順番に 'G', 'C', 'P' というアルファベット 1 文字によって表現されます。

過去に行われたアリスさんとボブさんのじゃんけんの記録を元に、過去にアリスさんがボブさんに何回勝ったかを 1 行で出力してください。
末尾に改行を入れ、余計な文字、空行を含んではいけません。
 */

//var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");
var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
let wins = 0;
lines.forEach((line) => {
  if (line.length > 1) {
    checkWin(line[0], line[2]);
  }
});
console.log(wins);

function checkWin(me, you) {
  switch (me) {
    case "G":
      wins = you === "C" ? (wins += 1) : wins;
      break;
    case "C":
      wins = you === "P" ? (wins += 1) : wins;
      break;
    case "P":
      wins = you === "G" ? (wins += 1) : wins;
      break;
  }
}
