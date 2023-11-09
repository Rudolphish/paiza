//var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");
// システムに入力される文字列によって会社に入れる場合
// YES
// と出力してください。そうでない場合
// NO
// と出力してください。出力の最後に改行を入れ、余計な文字、空行を含んではいけません。
const N = lines[0];
const M = lines[1];
if (checkPass(N, M)) {
  console.log("YES");
} else {
  console.log("NO");
}
function checkPass(N, M) {
  if (N == M) {
    return false;
  }
  let NList = N.split("").sort().toString();
  let MList = M.split("").sort().toString();

  if (NList != MList) {
    return false;
  } else {
    return true;
  }
}
