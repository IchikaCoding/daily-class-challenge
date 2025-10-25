// TODO ぽちぽちフレンズといちかどんのインスタンスのスキルを個別二追加できるようにしておく
// TODO 永住ビザを発行してぽちぽちフレンズがゲットできるようにしておく
// TODO 商品ではないものが入力されたときの削除の処理を追加

import { Human, House, CakeShop } from "./classes.js";

const happyIchika = new Human("ぽちぽちフレンズ");
const ichikadon = new Human("いちかどん");

// console.log(happyIchika);
// console.log(ichikadon);

/** --Houseのインスタンスを生成する処理-- */
const ichikaHouse = new House("ぽちぽちフレンズのお家", "さつまいもの里1番地");
const ichikadonHouse = new House("いちかどんのお家", "親子丼の里1番地");

// console.log(ichikaHouse);
// console.log(ichikadonHouse);

/**
 * addItemとremoveItemの検証用
 */
const ichikaCake = new CakeShop("いちかのケーキ屋さん", "親子丼の里2番地");
ichikaCake.addItem("季節のショートケーキ", 720, 5).removeItem("マカロン");
console.log(ichikaCake);

// TODO （仮）ここを修正してケーキ屋さんが複製されないようにする
/** 画面に表示するrenderが実行される */
const app = document.querySelector("#app");
[happyIchika, ichikadon, ichikaHouse, ichikadonHouse, ichikaCake]
  .map((instance) => instance.render())
  .forEach((element) => app.appendChild(element));

const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");

/**
 * ダイアログの処理（コピペ）
 * キャンセルボタンを押してもinputが送信されるようになっている
 */
// TODO キャンセルボタンを押したときにも送信されている問題
/** ダイアログ要素 */
const dialog = document.getElementById("dialog");
/** 削除確定ボタンの要素 */
const confirmToRemove = document.getElementById("confirmToRemove");
/** キャンセルボタンの要素 */
const closeBtn = document.getElementById("closeBtn");
/** 入力された削除したい商品の要素 */
const removeItemName = document.getElementById("removeItemName");
let confirmedRemoveItemName = "";
// ボタンの処理とイベントの内容を書く
// ここにDOM操作書く
// 追加ボタンでやりたいこと
// function addBtnHandler() {}

// 削除ボタンでやりたいこと
// 商品名を入力→実行→その商品が削除（CakeShop.removeItem）
// ダイアログを作成
// 削除ボタンを押したらダイアログが開くようにする
// クリックしたらダイアログが開くようにする
// ダイアログに入力された商品名をitemName = removeItem.valueという引数としてremoveItemに渡される
// 商品名を削除した画面をレンダーしたい
function removeBtnHandler() {
  dialog.showModal();
  console.log("removeButtonが押された");
}

/** 削除確定ボタンのハンドラ */
// inputの中身を取ってくる
// それを削除ボタンを押したときに引数として渡す
// クリックイベントが実行
function getRemoveItemName() {
  console.log({ value: removeItemName.value });
  console.log("removeItemNameをゲットした");
  return removeItemName.value;
}
/**
 *
 * @param {Event} e
 * @returns
 */
function confirmBtnHandler(e) {
  e.preventDefault();
  console.log(e);
  console.log(e.preventDefault);
  const confirmedRemoveItemName = getRemoveItemName();
  if (!confirmedRemoveItemName) {
    console.log("削除したい商品名を入力してから confirm を押してね。");
    return;
  }
  // TODO originalCakeShopを使わずにichikaCakeというインスタンスを使用して操作したほうがいいのか？
  ichikaCake.removeItem(confirmedRemoveItemName);
  let originalCakeShop = document.querySelector(".cakeShop");
  console.log(originalCakeShop);
  // itemsにはクラス名がcake-shop-itemsのp要素が入っている？

  const items = originalCakeShop.querySelector(".cake-shop-items");
  console.log(items);
  // TODO この処理は要復習！！！！！
  // 白のハイライト(price)がキー，オレンジのほうのpriceが値
  // TODO アロー関数の右側を波括弧で囲むと挙動わかるかも！
  items.textContent = `商品: ${Object.entries(ichikaCake.items)
    .map(
      ([name, { price: pricePram, stock: stockParam }]) =>
        `${name}: ${pricePram}円(${stockParam}個)`
    )
    .join("🤤")}`;
  console.log(items.textContent);
  console.log(`削除する商品：${confirmedRemoveItemName}`);
  console.log("削除確定ボタンが押されたよ♪");
  dialog.close(); // なぜここは書かないと閉じられないのか？
}
/** 削除確定ボタンのイベント */
confirmToRemove.addEventListener("click", confirmBtnHandler);

// addButton.addEventListener("click", addBtnHandler);
/** ダイアログを開くイベント */
removeButton.addEventListener("click", removeBtnHandler);

/** キャンセルボタンのイベント */
closeBtn.addEventListener("click", () => {
  console.log("closeBtnが押されました");
  dialog.close();
});

// // TODO 分割代入について学ぶ
// function fff({ b, a }) {
//   console.log(a); // 10
//   console.log(b); // 20
// }
// const obj = { a: 10, b: 20 };
// fff(obj);
