/**
入力は以下のフォーマットで与えられます。

S
N
T_1 ... T_N
・1 行目には、あなたの食べたい料理名を表す文字列 S が与えられます。
・2 行目には、与えられるメニューの単語数を表す整数 N が与えられます。
・3 行目には、メニュー名を表す単語の文字列 T_i (1 ≦ i ≦ N) が半角スペース区切りで与えられます。
・入力は全部で 3 行となり、最終行末尾に改行が一つ入ります。

あなたが食べたい料理の名前と、メニューに載っている料理名が 1 つ与えられるので、
食べたい料理に合致するメニューであれば "Yes" を、そうでなければ "No" を出力するプログラムを作成してください。
食べたい料理に合致するメニューとは、メニューの単語の中に食べたい料理名が入っていることを指します。

期待する出力
与えられたメニューがあなたの食べたい料理であれば "Yes" を、
そうでなければ "No" を出力してください。
出力最終行の末尾に改行を入れ、余計な文字、空行を含んではいけません。

<example>
hamburg
2
cheese hamburg
 */

var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");
//var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
const S = lines[0];
const N = lines[1];
const menues = lines[2].split(" ");
let isFine = false;
menues.forEach((menu) => {
  if (!isFine) {
    isFine = menu === S ? true : false;
  }
});
let result = isFine ? "Yes" : "No";
console.log(result);
