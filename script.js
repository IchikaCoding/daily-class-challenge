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

const happyIchika = new Human("ぽちぽちフレンズ");
const ichikadon = new Human("いちかどん");

// console.log(happyIchika);
// console.log(ichikadon);

// お家生成のためのクラス
class House {
  furnishings = ["PC", "Laundry"];
  meals = {
    さつまいも: 3,
    "キャラメル ポップコーン": 1,
    "いちか うどん": 1,
  };
  houseplants = "cactus";

  constructor(houseName, locationName) {
    this.name = houseName;
    this.location = locationName;
    // TODO sweetPotatoesを減らす方法を考える
    // delete this.meals.sweetPotatoes;
    // this.removeMeals("さつまいも");
  }

  // /**
  //  * meals配列の中から消したい文字列を削除する処理
  //  * 逆イテレーションで複数同じ要素があっても削除できるようにしている
  //  * @param {string} targetMeal
  //  */
  // removeMeals(targetMeal) {
  //   for (let i = this.meals.length; i >= 0; i--) {
  //     if (this.meals[i] === targetMeal) {
  //       this.meals.splice(i, 1);
  //       console.log(this.meals);
  //     }
  //   }
  // }

  addMeals(mealName) {
    this.meals.push(mealName);
  }
  render() {
    const article = document.createElement("article");
    // console.log(Object.entries(this.meals));
    const mealsText = Object.entries(this.meals)
      .map(([key, value]) => `${key}: ${value}個`)
      .join(", ");
    article.className = "card house";
    article.innerHTML = `
      <h2 class="card__title">${this.name}</h2>
      <p>所在地: ${this.location}</p>
      <p>家具: ${this.furnishings.join(" / ")}</p>
      <p>ごはん: ${mealsText}</p>
      <p>観葉植物: ${this.houseplants}</p>
    `;
    console.log(Object.keys(this.meals).join(", "));
    return article;
  }
}

/** --Houseのインスタンスを生成する処理-- */
const ichikaHouse = new House("ぽちぽちフレンズのお家", "さつまいもの里1番地");
const ichikadonHouse = new House("いちかどんのお家", "親子丼の里1番地");

// console.log(ichikaHouse);
// console.log(ichikadonHouse);

/** ケーキ屋さんクラス */
class CakeShop {
  horeizai = ["2個", "3個"];
  // items = [
  //   "モンブラン",
  //   "チーズケーキ",
  //   "フルーツタルト",
  //   "モモムース",
  //   "マカロン",
  //   "シュークリーム（カスタード，シューはパリパリ）",
  // ];
  items = {
    モンブラン: 1,
    チーズケーキ: 1,
    フルーツタルト: 1,
    モモムース: 1,
    マカロン: 1,
    "シュークリーム（カスタード，シューはパリパリ）": 1,
  };

  constructor(cakeShopName, cakeShopLocationName) {
    this.name = cakeShopName;
    this.location = cakeShopLocationName;
    // this.removeItems();
  }

  // removeItems() {
  //   this.items.pop();
  //   return this;
  // }
  // addItems() {
  //   this.items.push();
  //   return this;
  // }
  render() {
    const article = document.createElement("article");
    const itemsText = Object.entries(this.items)
      .map(([key, value]) => `${key}: ${value}個`)
      .join(", ");
    article.className = "card cakeShop";
    article.innerHTML = `
      <h2 class="card__title">${this.name}</h2>
      <p>住所: ${this.location}</p>
      <p>保冷剤: ${this.horeizai.join(" / ")}</p>
      <p>商品: ${itemsText}</p>
    `;
    return article;
  }
}

const ichikaCake = new CakeShop("いちかのケーキ屋さん", "親子丼の里2番地");

const app = document.querySelector("#app");
[happyIchika, ichikadon, ichikaHouse, ichikadonHouse, ichikaCake]
  .map((instance) => instance.render())
  .forEach((element) => app.appendChild(element));
