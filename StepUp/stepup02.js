//var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");

class nonAdult {
  constructor(age) {
    this.age = age;
  }
  getAge() {
    return this.age;
  }
  setFee(fee) {
    this.fee = this.fee != null ? this.fee + Number(fee) : 0 + Number(fee);
  }
  getFee() {
    return this.fee != null ? this.fee : 0;
  }
}
class adult extends nonAdult {}

const [N, K] = lines[0].split(" ").map((num) => Number(num));

let customers = [];

for (let i = 1; i < N + 1; i++) {
  let age = Number(lines[i]);
  if (age >= 20) {
    let customer = new adult(age);
    customers.push(customer);
  } else {
    let customer = new nonAdult(age);
    customers.push(customer);
  }
}
for (let i = N + 1; i < lines.length; i++) {
  const [NUM, ORDER, FEE] = lines[i].split(" ");

  switch (ORDER) {
    case "food":
    case "softdrink":
      customers[NUM - 1].setFee(FEE);
      break;
    case "alcohol":
      if (customers[NUM - 1].getAge() >= 20) {
        customers[NUM - 1].setFee(FEE);
      }
      break;
    default:
      break;
  }
}
console.log(customers.length);
// for (let c of customers) {
//   console.log(c.getFee());
// }
