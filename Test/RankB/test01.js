/**
A B
N
h_1 h_2 ... h_N

・1 行目に 単体攻撃力を表す整数 A と全体攻撃力を表す整数 B が半角スペース区切りで与えられます。
・続く 2 行目に出現したモンスターの数を表す整数 N が与えられます。
・続く 3 行目に出現したモンスターのHPを表す N 個の整数 h_1, h_2, ..., h_N が半角スペース区切りで与えられます。
・入力は合計で 3 行となり、末尾に改行が 1 つ入ります。

すべてのモンスターを倒すのに必要な最少の攻撃回数を出力してください。
末尾に改行を入れ、余計な文字、空行を含んではいけません。

入力例1
5 3
3
3 6 8
 */

var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");
//var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

const [A, B] = lines[0].split(" ").map((num) => Number(num));
const N = Number(lines[1]);
let monsters = lines[2].split(" ").map((num) => Number(num));
let allHp = monsters.reduce((a, b) => a + b, 0);
let cnt = 0;
while (allHp > 0) {
  cnt++;
  let tempMonsters = new Array();
  let strong = 0;
  monsters.forEach((val) => {
    strong = val > strong ? val : strong;
  });
  if (monsters.length * B > strong || A === B) {
    monsters = monsters.map((val) => sub(val));
  } else {
    monsters[monsters.indexOf(strong)] =
      monsters[monsters.indexOf(strong)] - A < 0
        ? 0
        : monsters[monsters.indexOf(strong)] - A;
  }
  tempMonsters = monsters.filter((val) => val > 0);
  monsters = tempMonsters;
  allHp = monsters.reduce((a, b) => a + b, 0);
}
console.log(cnt);

function sub(val) {
  return val - B < 0 ? 0 : val - B;
}
