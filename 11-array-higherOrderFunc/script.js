const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index, array) => {
  console.log(`インデックス：${index},値：${number},配列全体：${array}`);
});

/**
 * find()メソッドを練習する
 * アロー関数バージョンと通常の関数を使用してみる✨️
 */

const found = numbers.find((number) => number > 3);
console.log("foundの結果：", found);

// 通常の関数バージョン
