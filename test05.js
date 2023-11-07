var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

const [MONEY, N] = lines[0].split(" ").map((num) => Number(num));
class budget {
  constructor(money, point) {
    this.money = money;
    this.point = point;
  }
  getMoney() {
    return this.money;
  }
  getPoint() {
    return this.point;
  }
  subMoney(fee) {
    this.money -= fee;
  }
  subPoint(fee) {
    this.point -= fee;
  }
  addPoint(fee) {
    this.point += fee * 0.1;
  }
}
let budgets = new budget(MONEY, 0);
for (let i = 1; i < N + 1; i++) {
  const fee = Number(lines[i]);
  if (Number(budgets.getPoint()) < fee && Number(budgets.getMoney()) < fee) {
    break;
  }
  if (Number(budgets.getPoint()) > fee) {
    budgets.subPoint(fee);
  } else if (Number(budgets.getMoney()) >= fee) {
    budgets.subMoney(fee);
    budgets.addPoint(fee);
  }
  console.log(budgets.getMoney() + " " + budgets.getPoint());
}
