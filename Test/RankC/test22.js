/**
N L
x_1
x_2
...
x_N
・1 行目に戦闘回数の N と、最初のあなたのレベル L が与えられます。
・続く N 行の各行には i 番目 (1 ≦ i ≦ N) の戦闘相手のレベルが x_i であるという情報が与えられます。
・入力は合計で N+1 行からなり、入力値最終行の末尾に改行が 1 つ入ります。

戦闘を起こした際、レベルが高い方が勝利となります。
勝利した側は相手のレベルの半分 (小数点以下切り捨て) だけレベルが上昇し、
敗北した側はレベルが半分 (小数点以下切り捨て) になります。
またレベルが同じ場合戦闘は引き分けとなり、レベルの変動は起きません。

期待する出力
N 回の戦闘後のあなたのレベルを出力してください。
期待する出力は 1 行からなります。
整数で出力してください。
末尾に改行を入れ、余計な文字、空行を含んではいけません。
 */

var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");
//var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
const [N, L] = lines[0].split(" ").map((num) => Number(num));
let level = Number(L);
lines.splice(0, 1);
lines.forEach((lv) => {
  let fightLevel = Number(lv);
  if (level !== fightLevel) {
    level =
      level > fightLevel
        ? (level += Math.floor(fightLevel / 2))
        : Math.floor(level / 2);
  }
});
console.log(level);
