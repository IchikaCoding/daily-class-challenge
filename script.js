// 人間生成するためのクラス
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

// お家生成のためのクラス
class House {
  furnishings = ["PC", "Laundry"];
  meals = ["さつまいも", "キャラメルポップコーン", "いちかおうどん"];
  houseplants = "cactus";

  constructor(houseName, locationName) {
    this.name = houseName;
    this.location = locationName;
  }
}
const ichikaHouse = new House("いちかのハッピーなお家", "さつまいもの里1番地");
const ichikadonHouse = new House("いちかどんのお家", "親子丼の里1番地");

console.log(ichikaHouse);
console.log(ichikadonHouse);
