const numbers = [-1, 0, 1, 2, 3, 4, 5];
numbers.forEach((number, index, array) => {
  console.log(`インデックス：${index},値：${number},配列全体：${array}`);
});

/**
 * find()メソッドを練習する
 * filterの応用だよ♪
 * アロー関数バージョンと通常の関数を使用してみる✨️
 */

// const found = numbers.find((number) => number > 3);
// console.log("foundの結果：", found);

// 通常の関数バージョン（ミスバージョン）
function conditionFunc(number) {
  if (number > -1) return number;
}

const found = numbers.find(conditionFunc);
// 0はfalsyだから「条件を満たさなかった」と解釈されてスキップされる
console.log("foundの結果：", found); // 1
console.log(conditionFunc(0)); // 0

// 通常の関数バージョン（正解バージョン）
// TODO　number > -1の時の結果を見てみる
// /**
//  *
//  * @param {number} number
//  * @returns {boolean}
//  */
// function conditionFunc(number) {
//   return number > -1;
// }

// const found = numbers.find(conditionFunc);
// console.log("foundの結果：", found);
// console.log(conditionFunc(1));

// 盗人から高級パン屋さんを守る
// stoleがtrueならそのnameのパンを奪う
// 1個しか盗人は盗んでいないとする

// const personPockets = [
//   { name: "カレーパン", isStolenBread: "false" },
//   { name: "塩バターパン", isStolenBread: "false" },
//   { name: "メロンパン", isStolenBread: "true" },
// ];

// function identifyFunc(personPocket) {
//   return personPocket.isStolenBread === "true";
// }

// const identifyBread = personPockets.find(identifyFunc);
// console.log("盗人が盗んだパンはこれ▶", identifyBread.name);

/**
 * filterで書いてみよう✨️
 */
const personPockets = [
  { name: "カレーパン", isStolenBread: "false" },
  { name: "塩バターパン", isStolenBread: "false" },
  { name: "メロンパン", isStolenBread: "true" },
  { name: "プリン", isStolenBread: "false" },
  { name: "フランスパン", isStolenBread: "false" },
];

function identifyFunc(personPocket) {
  return personPocket.isStolenBread === "true";
}

const identifyItems = personPockets.filter(identifyFunc);
console.log("identifyItemsの中身は？", identifyItems);
// TODO どうやったら一つ以上の要素のnameを取得できるかな？
// for文で繰り返す方法ならできそう？
// for (let i = 0; i < identifyItems.length; i++) {
//   console.log("盗人が盗んだ商品はこれ▶", identifyItems[i].name);
// }

// ガード節を追加したバージョン
if (identifyItems.length === 0) {
  console.log("盗人は何も盗みませんでした（盗人なのに）");
} else {
  identifyItems.forEach((identifyItem) =>
    console.log("盗人が盗んだ商品はこれ▶", identifyItem.name)
  );
}

// filter() のみバージョンを作る
// 18歳以上の人が1人でもいたら，trueを返す
// filterを使って書く

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 30 },
];

/**
 * ユーザーの年齢が18以上かどうかを判定する真偽判定処理
 * @param {{name: string, age: number}} user
 * @returns {boolean}
 */
function isAdultUser(user) {
  return user.age >= 18;
}

const adultUserArray = users.filter(isAdultUser);
console.log("成人たちはこの人▶", adultUserArray);
function checkAdultUsers(adultUserArray) {
  return adultUserArray.length >= 1;
}
console.log("全部の真偽を判定：", checkAdultUsers(adultUserArray));

/**
 * ーーーーーーreduce()メソッドの練習ーーーーーーー
 */

const numberArray = [10, 20, 30, 40];

function func(sum, newValue) {
  console.log(sum + newValue);
  return sum + newValue;
}
const total = numberArray.reduce(func, 0);
console.log(total);

/**
 * 果物の集計
 */

// const fruits = ["Apple", "Banana", "Apple", "Orange", "Banana", "Apple"];

// // 欲しい結果: { Apple: 3, Banana: 2, Orange: 1 }

// // 鍋（counts）に {} (空のオブジェクト) をセット
// function calucFruit(counts, fruitName) {
//   // 1. (counts) オブジェクトに、(fruitName) というキーが既にあるか？
//   if (counts[fruitName]) {
//     // 2. あれば、そのキーの値を +1 する
//     counts[fruitName] = counts[fruitName] + 1;
//   } else {
//     // 3. なければ、新しいキーとして 1 をセットする
//     counts[fruitName] = 1;
//   }
//   // 4. 次のループのために、更新した (counts) オブジェクトを返す
//   return counts;
// }

// const fruitCounts = fruits.reduce(calucFruit, {}); // 👈 初期値 (counts の最初の値) を {} (空のオブジェクト) に設定

// console.log(fruitCounts);
// // 実行結果: { Apple: 3, Banana: 2, Orange: 1 }

// ーーーーーーーーー練習ーーーーーーーーーーー
// 💡ヒント：fruitCounts[fruit] がすでにあるかどうかを if で確認。
// あれば +1、なければ 1 を代入。

/** @type {string[]} */
const fruits = ["Apple", "Banana", "Apple", "Orange", "Banana", "Apple"];
// TODO Recordの意味は？→動的にオブジェクトを生成している→レコードしている？
/** @type {Object.<string, number>} */
const fruitCounts = {}; // ← 空のオブジェクトでカウント開始！

for (const fruit of fruits) {
  // 👇 ここに処理を追記しよう
  if (fruitCounts[fruit] !== undefined) {
    fruitCounts[fruit] += 1;
  } else {
    fruitCounts[fruit] = 1;
  }
}

console.log(fruitCounts);
// 期待する結果: { Apple: 3, Banana: 2, Orange: 1 }

// ーーーーーーーーーーー🌸 sort() / toSorted() メソッド 🌸ーーーーーーーーーーーーーー
/**
 *
 */

const exArray = [10, 2, 20, 1];

// [0, 1, 2, 3] という「インデックス配列」を作る
const index = exArray.map((_, i) => i);
console.log("index", index);
console.table(index);
console.log("index", JSON.stringify(index));

// これから👇️を実行するとソートされるよ
const order = index.sort((a, b) => exArray[a] - exArray[b]);
console.log("order", order);
console.table(order);
console.log("order", JSON.stringify(order));
// [3, 1, 0, 2]

/** Array.from()の動作確認 */
console.log(Array.from("foo"));
// 予想される結果: Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], (x) => x + x));
// 予想される結果: Array [2, 4, 6]

/**
 * sortのお練習タイム
 */
const charArray = [
  { name: "リュウガ", hp: 120, mp: 30 },
  { name: "セイラ", hp: 80, mp: 90 },
  { name: "ゴーレム", hp: 200, mp: 10 },
  { name: "ミナト", hp: 95, mp: 60 },
  { name: "カゲロウ", hp: 70, mp: 110 },
  { name: "オロチ", hp: 150, mp: 40 },
];

const withPower = charArray.map((char, index) => {
  return {
    index: index,
    char: char,
    power: char.hp + char.mp,
  };
});

/**
 * withPowerのcharだけを一覧で確認したいです
 * 配列の中のcharのオブジェクトだけを指定する必要がある
 *
 */
console.log("総合パワー一覧（index付き）:");
console.table(withPower);
withPower.forEach((item) => console.log(item.char));

const sortedWithIndex = withPower.toSorted((a, b) => a.power - b.power);
console.log("弱い順（index付き）:");
console.table(sortedWithIndex);
