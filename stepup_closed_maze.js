/**
 * N K S
 * a_1 r1_1 r2_1
 * ...
 * a_N r1_N r2_N
 * M_1
 * ...
 * M_K
 * ・ 1 行目では、地点の数 N と、移動の回数 K , 移動を開始する地点の番号 S が与えられます。
 * ・ 続く N 行のうち i 行目(1 ≦ i ≦ N)では、番号 i 地点に置いてあるアルファベット a_i と
 *    1 つめの道のつながっている地点の番号 r1_i , 2 つめの道のつながっている地点の番号 r2_i が与えられます。
 * ・ 続く K 行のうち i 行目(1 ≦ i ≦ K)では、 i 回目の移動で選んだ道の番号 M_i が与えられます。
 *
 * あなたが唱えるべき呪文となる文字列を 1 行で出力してください。
 */
var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");
//var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
///Users/tokitashota/Desktop/paiza/paizaStudy/paiza/stepup_closed_maze.js
class Maze {
  constructor(key, next_1, next_2) {
    this.key = key;
    this.next_1 = next_1;
    this.next_2 = next_2;
  }
  getKey() {
    return this.key;
  }
  getNext(next) {
    if (next == 1) {
      return this.next_1;
    } else {
      return this.next_2;
    }
  }
}
const [N, K, S] = lines[0].split(" ").map((num) => Number(num));
let mazeList = [];
let keyWord = "";
for (let i = 1; i <= N; i++) {
  const [KEY, NEXT_1, NEXT_2] = lines[i].split(" ");
  const maze = new Maze(KEY, NEXT_1, NEXT_2);
  mazeList.push(maze);
}
let next = 0;
for (let j = N + 1; j <= N + K + 1; j++) {
  if (j == N + 1) {
    keyWord += mazeList[S - 1].getKey();
    next = mazeList[S - 1].getNext(Number(lines[j]));
  } else {
    keyWord += mazeList[next - 1].getKey();
    next = mazeList[next - 1].getNext(Number(lines[j]));
  }
}
console.log(keyWord);
