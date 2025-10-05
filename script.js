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
  render() {
    const article = document.createElement("article");
    article.className = "card human";
    article.innerHTML = `
      <h2 class="card__title">${this.name}</h2>
      <p>しあわせゲージ: ${this.happy}</p>
      <p>しあわせ付与パウダー: +${this.happyTurnPowder}</p>
      <p>スキル: ${this.skills.join(" / ")}</p>
    `;
    return article;
  }
}

const happyIchika = new Human("ハッピーいちか");
const ichikadon = new Human("いちかどん");

// console.log(happyIchika);
// console.log(ichikadon);

// お家生成のためのクラス
class House {
  furnishings = ["PC", "Laundry"];
  meals = ["さつまいも", "キャラメルポップコーン", "いちかおうどん"];
  houseplants = "cactus";

  constructor(houseName, locationName) {
    this.name = houseName;
    this.location = locationName;
  }
  render() {
    const article = document.createElement("article");
    article.className = "card house";
    article.innerHTML = `
      <h2 class="card__title">${this.name}</h2>
      <p>所在地: ${this.location}</p>
      <p>家具: ${this.furnishings.join(" / ")}</p>
      <p>ごはん: ${this.meals.join(" / ")}</p>
      <p>観葉植物: ${this.houseplants}</p>
    `;
    return article;
  }
}

/** --Houseのインスタンスを生成する処理-- */
const ichikaHouse = new House("いちかのハッピーなお家", "さつまいもの里1番地");
const ichikadonHouse = new House("いちかどんのお家", "親子丼の里1番地");

// console.log(ichikaHouse);
// console.log(ichikadonHouse);

const app = document.querySelector("#app");
[happyIchika, ichikadon, ichikaHouse, ichikadonHouse]
  .map((instance) => instance.render())
  .forEach((element) => app.appendChild(element));
