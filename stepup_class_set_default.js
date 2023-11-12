//class_primer__set_default/edit?language_uid=javascript
/**
 * 居酒屋で働きながらクラスの勉強をしていたあなたは、お客さんをクラスに見立てることで店内の情報を管理できることに気付きました。
 * 全てのお客さんは、ソフトドリンクと食事を頼むことができます。加えて 20 歳以上のお客さんはお酒を頼むことができます。
 * 20 歳未満のお客さんがお酒を頼もうとした場合はその注文は取り消されます。
 * また、お酒（ビールを含む）を頼んだ場合、以降の全ての食事の注文 が毎回 200 円引きになります。
 * 今回、この居酒屋でビールフェスをやることになり、ビールの注文が相次いだため、いちいちビールの値段である 500 円を書くのをやめ、
 * 伝票に注文の種類と値段を書く代わりに 0 とだけを書くことになりました。
 */
///Users/tokitashota/Desktop/paiza/paizaStudy/paiza/stepup_class_set_default.js
/**
 * N K
 * a_1
 * ...
 * a_N
 * n_1 o_1
 * ...
 * n_K o_K
 * ・ 1 行目では、お客さんの人数 N と注文の回数 K が与えられます。
 * ・ 続く N 行のうち i 行目(1 ≦ i ≦ N)では、i 番目のお客さんの年齢が与えられます。
 * ・ 続く K 行では、頼んだお客さんの番号 n_i , 注文を表す文字列 o_i が与えられます。
 * ・ o_i では、注文の種類 s_i と 値段 m_i (1 ≦ i ≦ K) を表す文字列 "s_i m_i" または、ビールの注文を表す "0" が与えられます。
 */
// sum_1
// ...
// sum_N
// i 番目のお客さんの会計 sum_i を N 人のお客さんについて以上の形式で出力してください。

//var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");
//var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

class Customers {
  discount = false;
  sum = 0;
  constructor(age) {
    this.age = age;
  }
  getAge() {
    return this.age;
  }
  getSum() {
    return this.sum;
  }
  calcSum(order, fee) {
    if (this.getAge() < 20 && (order == "beer" || order == "alcohol")) {
      this.sum = this.sum;
    } else {
      if (this.discount && order == "food") {
        fee -= 200;
      }
      this.sum += fee;
      if (order == "beer" || order == "alcohol") {
        this.discount = true;
      }
    }
  }
}
const [N, K] = lines[0].split(" ").map((num) => Number(num));
let customers = [];
for (let i = 1; i <= N; i++) {
  let customer = new Customers(Number(lines[i]));
  customers.push(customer);
}
for (let j = N + 1; j <= N + K; j++) {
  const NUM = Number(lines[j].split(" ")[0]);
  if (lines[j].split(" ")[1] == "0") {
    customers[NUM - 1].calcSum("beer", 500);
  } else {
    const ORDER = lines[j].split(" ")[1];
    const FEE = lines[j].split(" ")[2];
    customers[NUM - 1].calcSum(ORDER, Number(FEE));
  }
}
customers.map((customer) => {
  console.log(customer.getSum());
});
