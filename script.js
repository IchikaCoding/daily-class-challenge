// 人間生成するためのクラス
// TODO ぽちぽちフレンズといちかどんのインスタンスのスキルを個別二追加できるようにしておく
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
      <h2 class="card_title">${this.name}</h2>
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
      <h2 class="card_title">${this.name}</h2>
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
  items = {
    モンブラン: { price: 650, stock: 4 },
    チーズケーキ: { price: 500, stock: 6 },
    フルーツタルト: { price: 680, stock: 4 },
    モモムース: { price: 440, stock: 2 },
    マカロン: { price: 200, stock: 10 },
    "シュークリーム（カスタード，シューはパリパリ）": { price: 250, stock: 10 },
  };

  constructor(cakeShopName, cakeShopLocationName) {
    this.name = cakeShopName;
    this.location = cakeShopLocationName;
  }

  addItem(itemName, price, stock) {
    // add a new cake or overwrite an existing one
    // priceとかくと，{"price": price}と書かれたことと同じで省略可能！
    this.items[itemName] = {
      price,
      stock: stock,
    };
    return this;
  }

  removeItem(itemName) {
    delete this.items[itemName];
    return this;
  }

  render() {
    const article = document.createElement("article");
    const itemsText = Object.entries(this.items)
      .map(
        ([key, { price: price, stock: stock }]) =>
          `${key}: ${price}円(${stock}個)`
      )
      .join(", ");
    console.log(itemsText);
    article.className = "card cakeShop";
    article.innerHTML = `
      <h2 class="card_title">${this.name}</h2>
      <p>住所: ${this.location}</p>
      <p>保冷剤: ${this.horeizai.join(" / ")}</p>
      <p>商品: ${itemsText}</p>
      <div class="button">
      <button id="addButton">追加</button>
      <button id="removeButton">削除</button>
    </div>
    `;

    return article;
  }
}

/**
 * addItemとremoveItemの検証用
 */
const ichikaCake = new CakeShop("いちかのケーキ屋さん", "親子丼の里2番地");
ichikaCake.addItem("季節のショートケーキ", 720, 5).removeItem("マカロン");
console.log(ichikaCake.itemsText);

/** 画面に表示するrenderが実行される */
const app = document.querySelector("#app");
[happyIchika, ichikadon, ichikaHouse, ichikadonHouse, ichikaCake]
  .map((instance) => instance.render())
  .forEach((element) => app.appendChild(element));

// ボタンの処理とイベントの内容を書く
// ここにDOM操作書く
// 追加ボタンでやりたいこと
function addBtnHandler() {}
// 削除ボタンでやりたいこと
// 商品名を入力→実行→その商品が削除（CakeShop.removeItem）
// ダイアログを作成
// 削除ボタンを押したらダイアログが開くようにする
// クリックしたらダイアログが開くようにする
// ダイアログに入力された商品名をitemName = removeItem.valueという引数としてremoveItemに渡される
// 商品名を削除した画面をレンダーしたい
function removeBtnHandler() {}

const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");

addButton.addEventListener("click", addBtnHandler);
removeButton.addEventListener("click", removeBtnHandler);

/**
 * ダイアログの処理（コピペ）
 */
const dialog = document.getElementById("dialog");
// TODO 削除ボタンとして修正する
const removeItem = document.getElementById("removeItem");
const confirmToRemove = document.getElementById("confirmToRemove");
console.log(removeItem.value);

removeButton.addEventListener("click", () => {
  dialog.showModal();
});
// TODO これの処理にCakeShop.removeItemにしたらOK
confirmToRemove.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

// // TODO 分割代入について学ぶ
// function fff({ b, a }) {
//   console.log(a); // 10
//   console.log(b); // 20
// }
// const obj = { a: 10, b: 20 };
// fff(obj);
