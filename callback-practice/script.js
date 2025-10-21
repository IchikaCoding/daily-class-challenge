// function callLater(cbFunc) {
//   const result = cbFunc(10); // ← ( )を付けることで、「引数」で渡された位置にある関数を「実行」
//   console.log("結果:", result);
// }

// function timesTwo(n) {
//   return n * 2;
// }

// callLater(timesTwo); // 関数（の位置情報）をそのまま渡す

// // timesTwo という名前を付けてない無名関数
// callLater(function (n) {
//   return n * 2;
// });

/**
 * Q1 for文3回
 */
// function callLater(cbFunc) {
//   for (const i = 0; i < 3; i++) {
//     const result = cbFunc(i);
//     console.log(`結果${i}：`, result);
//   }
// }

// function timesTwo(n) {
//   return n * 2;
// }

// callLater(timesTwo);

// ------Q3---------------------------

function callLater(cbFunc) {
  const arr = [10, 20, 30]; // ← 配列を用意！
  const resultArr = []; // ← 結果を入れる配列を用意！ resultArrは赤い🟥の位置情報

  for (const n of arr) {
    const result = cbFunc(n); // ← 配列の要素を順に関数へ
    resultArr.push(result); // ← 結果を配列にためる！
  }

  return resultArr; // ← resultArrという名前が付いた位置情報を返す！ resultArrは赤い🟥の位置情報
}

function timesTwo(n) {
  return n * 2;
}

const outputArr = callLater(timesTwo); // outputArrが受け取ったのは、赤い🟥の位置情報
console.log("結果まとめ:", outputArr);

/**
 * 6章-1
 * @param {number} n
 * @returns
 */

// function funcDouble(n) {
//   return n * 2;
// }

// const nums = [1, 2, 3];
// const doubled = nums.map(funcDouble); // map に関数を渡す
// console.log("6章-1：", doubled); // [2, 4, 6]

/**
 * 6章-2
 */

// const nums = [1, 2, 3];
// const doubled = nums.map((n) => n * 2);
// console.log("6章-2：", doubled); // [2, 4, 6]

/**
 * 7章目-Q1-for文で書く
 */
// const srcArray = [10, 2, 4, 5, 8, 3, 7, 2, 7];
// const dstArray = [];

// for (let i = 0; i < srcArray.length; i++) {
//   if (srcArray[i] % 2 === 0) {
//     dstArray.push(srcArray[i]);
//   }
//   console.log(`結果${i}：`, dstArray);
// }
// console.log("最終結果", dstArray);

/**
 * 7章目-Q2-for ofで書く
 */

// const srcArray = [10, 2, 4, 5, 8, 3, 7, 2, 7];
// const dstArray = [];

// for (const n of srcArray) {
//   if (n % 2 === 0) {
//     dstArray.push(n);
//   }
// }

// console.log("7章目-Q1の答え：", dstArray);

/**
 * 7章目-Q3-関数を外に出す
 */

// const srcArray = [10, 2, 4, 5, 8, 3, 7, 2, 7];
// const dstArray = [];

// function isEven(n) {
//   return n % 2 === 0;
// }

// for (const n of srcArray) {
//   if (isEven(n)) {
//     dstArray.push(n);
//   }
// }
// console.log("最終結果", dstArray);

/**
 * 8章 - filter を使う
 */

// function isEven(n) {
//   console.log(n % 2 === 0);
//   return n % 2 === 0;
// }

// const srcArray = [10, 2, 4, 5, 8, 3, 7, 2, 7];
// const dstArray = srcArray.filter(isEven);

// console.log(dstArray); // [10, 2, 4, 8, 2]

// const srcArray = [10, 2, 4, 5, 8, 3, 7, 2, 7];
// function isEven(n, idx, arr) {
//   console.log(`value=${n}, index=${idx}, src=${arr}`);
//   return n % 2 === 0;
// }

// const dstArray = srcArray.filter(isEven);

// console.log(dstArray); // [10, 2, 4, 8, 2]

/**
 * Q5 filterをアロー関数で書いてみる✨️
 */

const srcArray = [10, 2, 4, 5, 8, 3, 7, 2, 7];
const dstArray = srcArray.filter((n) => n % 2 === 0);
console.log(`Q5：`, dstArray);

// -----ここから下がアロー関数の練習

/**
 * 奇数の配列を取り出す練習
 */

// const ichikaArray = [14, 25, 49, 77, 88, 93, 103, 180, 279];
// const oddArray = ichikaArray.filter((n) => n % 2 !== 0);
// console.log("奇数の配列：", oddArray);

/**
 * 3桁の数字を取り出す処理
 *
 */
// const ichikaArray = ["14", "25", "49", "77", "88", "93", "103", "180", "279"];
// const oddArray = ichikaArray.filter((n) => n.length === 3);
// console.log("3桁の配列：", oddArray);

/**
 * タルトという文字を含んでいるかチェック
 */
const ichikaArray = [
  "紅芋タルト",
  "プリン",
  "フルーツタルト",
  "シフォンケーキ",
];
const tartArray = ichikaArray.filter((n) => n.includes("タルト"));
console.log("タルトを含む配列：", tartArray);

const array = [1, 2, 3];
console.log(array.filter((n) => n === 2));
// 予想される結果: [2]

// これ自力で書けたえらい✨️
const numArray = [1, 2, 3];
String(numArray);
const stringArray = numArray.map((n) => String(n));
console.log("できた？", stringArray);
// 予想される結果: [2]
