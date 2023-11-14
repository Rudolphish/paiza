//var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
var lines = require("fs").readFileSync("test.txt", "utf8").split("\n");

class employee {
  constructor(number, name) {
    this.number = number;
    this.name = name;
  }
  getnumber() {
    return this.number;
  }
  getname() {
    return this.name;
  }
}

const N = Number(lines[0]);
let employees = [];
for (let i = 1; i < lines.length; i++) {
  const [ORDER, NUM, NAME] = lines[i].split(" ");
  switch (ORDER) {
    case "make":
      let tempEmployee = new employee(NUM, NAME);
      employees.push(tempEmployee);
      break;
    case "getnum":
      console.log(employees[NUM - 1].getnumber());
      break;
    case "getname":
      console.log(employees[NUM - 1].getname());
      break;
    default:
      break;
  }
}
