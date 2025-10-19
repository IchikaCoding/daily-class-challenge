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
function callLater(cbFunc) {
  for (const i = 0; i < 3; i++) {
    const result = cbFunc(i);
    console.log(`結果${i}：`, result);
  }
}

function timesTwo(n) {
  return n * 2;
}

// callLater(timesTwo);

// function callLater(cbFunc) {
//   const arr = [10, 20, 30]; // ← 配列を用意！
//   const resultArr = []; // ← 結果を入れる配列を用意！ resultArrは赤い🟥の位置情報

//   /**
//    * constでnが宣言できる理由は？
//    */
//   for (const n of arr) {
//     const result = cbFunc(n); // ← 配列の要素を順に関数へ
//     resultArr.push(result); // ← 結果を配列にためる！
//   }

//   return resultArr; // ← resultArrという名前が付いた位置情報を返す！ resultArrは赤い🟥の位置情報
// }

// function timesTwo(n) {
//   return n * 2;
// }

// const outputArr = callLater(timesTwo); // outputArrが受け取ったのは、赤い🟥の位置情報
// console.log("結果まとめ:", outputArr);
