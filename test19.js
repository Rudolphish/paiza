//var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");
/**
 * 希望する病室をそれぞれ1行に、入力された順番を崩すことなくすべて出力してください。
 * もし希望する部屋が1つもなければ"none" と出力してください。
 * n #嫌いな数字
 * m #病室の総数
 * r_1 #1個目の部屋番号
 * r_2 #2個目の部屋番号
 * ...
 * r_m #m個目の部屋番号
 */
const n = Number(lines[0]);
const m = Number(lines[1]);
let exist = false;
for (let i = 2; i < m + 2; i++) {
  const ROOM = lines[i].split("").map((num) => Number(num));
  if (!ROOM.includes(n)) {
    console.log(lines[i]);
    exist = true;
  }
}
if (!exist) {
  console.log("none");
}
