//var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");
const N = Number(lines[0]);
class userName {
  constructor(name, number) {
    this.name = name;
    this.number = number;
  }
  getNumber() {
    return this.number;
  }
  getName() {
    return this.name;
  }
}

let users = [];
for (let i = 1; i < N + 1; i++) {
  let number = "";
  let name = "";
  lines[i].split("").map((str) => {
    if (isNaN(str)) {
      name += str;
    } else {
      number += str;
    }
  });
  let user = new userName(name, Number(number));
  users.push(user);
}
users.sort(function (a, b) {
  if (a.getNumber() > b.getNumber()) {
    return 1;
  } else {
    return -1;
  }
});
for (let u of users) {
  console.log(u.getName() + u.getNumber());
}
