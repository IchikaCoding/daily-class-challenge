class Human {
  happy = 1000;
  happyTurnPowder = 100;
  skills = ["泣く", "笑う", "食べる"];

  constructor(name) {
    this.name = name;
  }
  happyPower(someone) {
    someone.happy += this.happyTurnPowder;
  }
}

const happyIchika = new Human("ハッピーいちか");
const ichikadon = new Human("いちかどん");

console.log(happyIchika);
console.log(ichikadon);
