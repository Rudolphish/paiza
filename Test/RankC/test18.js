//var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");
// 進化する条件を満たす進化先のモンスター名を出力してください。条件をみたすモンスターが複数ある場合、入力された順番に改行区切りで出力してください。
// また、進化条件をみたすモンスターがいない場合は "no evolution" と出力してください。

const [ATK, DEF, SPD] = lines[0].split(" ").map((num) => Number(num));
const N = Number(lines[1]);
let isEvolve = false;
for (let i = 2; i < N + 2; i++) {
  const [name, atkB, atkT, defB, defT, spdB, spdT] = lines[i]
    .split(" ")
    .map((num) => num);
  if (
    ATK >= Number(atkB) &&
    ATK <= Number(atkT) &&
    DEF >= Number(defB) &&
    DEF <= Number(defT) &&
    SPD >= Number(spdB) &&
    SPD <= Number(spdT)
  ) {
    isEvolve = true;
    console.log(name);
  }
}
if (!isEvolve) {
  console.log("no evolution");
}
