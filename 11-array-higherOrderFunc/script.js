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
];

function identifyFunc(personPocket) {
  return personPocket.isStolenBread === "true";
}

const identifyBread = personPockets.filter(identifyFunc);
console.log("盗人が盗んだパンはこれ▶", identifyBread[0].name);
