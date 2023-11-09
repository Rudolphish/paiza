//var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");
// 最終的な残金を表す整数を 1 行で出力してください。
/**
 * N
 * a_1 ... a_N
 * T Q
 * x_1 k_1
 * ...
 * x_Q k_Q
 * ・1 行目には、道具の個数を表す整数 N が与えられます。
 * ・2 行目には、 N 個の各道具の単価が半角スペース区切りで与えられます。
 * 　・ここで、 a_i (1 ≦ i ≦ N) は i 番目の道具の単価を表します。
 * 　・3 行目には、最初の所持金を表す整数 T と注文回数を表す整数 Q が与えられます。
 * ・3 + j 行目 (1 ≦ j ≦ Q) には、 j 回目の注文の情報が以下の形式で与えられます。
 * 　・購入したい道具の番号を表す整数 x_j とその個数 k_j が半角スペース区切りで与えられます。
 * ・入力は合計で Q + 3 行となり、入力値最終行の末尾に改行が 1 つ入ります。
 */
class Item {
  constructor(index, price) {
    this.index = index;
    this.price = Number(price);
  }
  getIndex() {
    return this.index;
  }
  getPrice() {
    return this.price;
  }
}
const N = Number(lines[0]);
let [budget, cnt] = lines[2].split(" ").map((num) => Number(num));
let items = [];
let itemsMap = [];
lines[1].split(" ").map((val) => items.push(val));
items.forEach((price, index) => itemsMap.push(new Item(index + 1, price)));

for (let i = 3; i < cnt + 3; i++) {
  const [ind, amount] = lines[i].split(" ").map((num) => Number(num));
  if (budget >= itemsMap[ind - 1].getPrice() * amount) {
    budget -= itemsMap[ind - 1].getPrice() * amount;
  }
}
console.log(budget);
