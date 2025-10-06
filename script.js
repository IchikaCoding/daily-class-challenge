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

/** ケーキ屋さんクラス */
class CakeShop {
  horeizai = ["2個", "3個"];
  items = [
    "モンブラン",
    "チーズケーキ",
    "フルーツタルト",
    "モモムース",
    "マカロン",
    "シュークリーム（カスタード，シューはパリパリ）",
  ];
  constructor(cakeShopName, cakeShopLocationName) {
    this.name = cakeShopName;
    this.location = cakeShopLocationName;
    this.removeItems();
  }

  removeItems() {
    this.items.pop();
    return this;
  }
  addItems() {
    this.items.push();
    return this;
  }
  render() {
    const article = document.createElement("article");
    article.className = "card cakeShop";
    article.innerHTML = `
      <h2 class="card__title">${this.name}</h2>
      <p>住所: ${this.location}</p>
      <p>保冷剤: ${this.horeizai.join(" / ")}</p>
      <p>商品: ${this.items.join(" / ")}</p>
    `;
    return article;
  }
}

const ichikaCake = new CakeShop("いちかのケーキ屋さん", "親子丼の里2番地");

const app = document.querySelector("#app");
[happyIchika, ichikadon, ichikaHouse, ichikadonHouse, ichikaCake]
  .map((instance) => instance.render())
  .forEach((element) => app.appendChild(element));
