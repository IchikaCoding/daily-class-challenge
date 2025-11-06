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
 */
console.log("総合パワー一覧（index付き）:");
console.table(withPower);
withPower.forEach((item) => console.log(item.char));

const sortedWithIndex = withPower.toSorted((a, b) => a.power - b.power);
console.log("弱い順（index付き）:");
console.table(sortedWithIndex);

// ーーーーーーーーーー　ステップ3はここから　ーーーーーーーーーーーー
// 最弱キャラと最強キャラを表示
// それぞれ，元のindexとキャラ情報を表示する
const weakest = sortedWithIndex[0];
const strongest = sortedWithIndex.at(-1);

console.log("最弱キャラ：");
console.log("  元のindex:", weakest.index);
console.log("  キャラ情報:", weakest.char);

console.log("最強キャラ：");
console.log("  元のindex:", strongest.index);
console.log("  キャラ情報:", strongest.char);

console.log("もとの配列が壊れていないカナ？:", charArray);
/**
 * ーーーーーーーーーーーーーソートのお練習ーーーーーーーーーーーーーーーーー
 */

const posArray = [
  { x: 3, y: 10 },
  { x: 10, y: 3 },
  { x: 5, y: 5 },
  { x: 8, y: 1 },
  { x: 1, y: 8 },
  { x: 7, y: 7 },
];

const dist2Array = posArray.map((p) => p.x ** 2 + p.y ** 2);
console.log("距離²の配列:", dist2Array);

const withIndexDistance = posArray.map((p, i) => {
  return {
    index: i,
    pos: p,
    dist2: dist2Array[i],
  };
});
console.table(withIndexDistance);

const sortedDistance = withIndexDistance.toSorted((a, b) => a.dist2 - b.dist2);
console.log("結果：", sortedDistance);

console.log("最も近い点:");
console.log("  元のindex:", sortedDistance[0].index);
console.log("  座標:", sortedDistance[0].pos);

console.log("最も遠い点:");
console.log("  元のindex:", sortedDistance.at(-1).index);
console.log("  座標:", sortedDistance.at(-1).pos);

// 複数の最小・最大距離にも対応
const minDist2 = sortedDistance[0].dist2;
const maxDist2 = sortedDistance.at(-1).dist2;

const nearestPoints = sortedDistance.filter((p) => p.dist2 === minDist2);
const farthestPoints = sortedDistance.filter((p) => p.dist2 === maxDist2);

console.log("最も近い点（複数対応）:");
console.table(nearestPoints);

console.log("最も遠い点（複数対応）:");
console.table(farthestPoints);

// ーーーーーーーーー　ちょっと危険　ーーーーーーーーーーーー

const newXArray = posArray.map((p) => p.x);
const maxX = Math.max(...newXArray);
console.table(newXArray);
console.log("Xの最大は？:", maxX);
// const maxX = Math.max(...posArray.map((p) => p.x)); // Math.maxは渡した数値の最大値を返し、...は配列を個々の引数に展開し、map((p) => p.x)で各要素からx座標だけを抽出した配列を作る

// const maxY = Math.max(...posArray.map((p) => p.y)); // y座標版で、map((p) => p.y)でyだけを抽出し、その最大値で縦方向の範囲を決める
const newYArray = posArray.map((p) => p.y);
const maxY = Math.max(...newYArray);
console.table(newYArray);
console.log("Yの最大は？:", maxY);
// y軸を上向きに描くために、最大のyから0まで逆順で処理するという意図を説明するコメント

/** コンソールに表示される座標のｘ軸とY軸のデータを入れる配列 */
const rows = []; // ここで空の配列を用意し、後で1行ずつの文字列表現を追加していく
// TODO なぜか値が入ってる！！！
console.log("元データ:", JSON.stringify(rows));
for (let y = maxY; y >= 0; y--) {
  // for文でyを最大値から0まで1ずつ減らしながら処理する（y--は1を引く演算子）
  /** X軸のとんとんとんを意味する(row=行) */
  const row = Array(maxX + 1).fill(" ."); // Array(maxX + 1)でx座標の最大値に合わせた長さの配列を作り、fill(" .")で全要素を" ."という文字列で埋める
  console.log("rowの確認", structuredClone(row));
  // console.log("rowの確認", JSON.stringify(row));
  // p：配列の各要素，i：インデックス
  posArray.forEach((p, i) => {
    // forEachは配列の全要素に順番に処理を行うメソッドで、(p, i) => {...}は要素pとインデックスiを受け取るアロー関数
    /** ｙ軸が見ている行（y）がビーコンのｙ軸（p.y）の位置と同じか確認
     * 同じだったら，そこのX軸にインデックス番号を入力する処理を実行
     * 2桁の数字と揃うように，1桁の数字ではスペースを前側に入れる処理も同時に実行
     */
    if (p.y === y) {
      // ===は型と値を両方比較する厳密等価演算子で、点pのy座標が現在の行yと一致するかどうかを判定している
      row[p.x] = String(i).padStart(2, " "); // row[p.x]でx座標に対応する位置を指定し、String(i)で数字を文字列化し、padStart(2, " ")で文字数が2になるまで左側にスペースを足す
    } // if文のブロックをここで閉じる
  }); // forEachによる繰り返し処理をここで終了する
  rows.push(row.join("")); // join("")は配列を区切りなしで1つの文字列に連結し、pushでその行をrows配列の末尾に追加する
} // for文のブロックをここで閉じる
// console.log("rowsの中身▶", JSON.parse(JSON.stringify(rows)));

console.log("rowsの中身▶", structuredClone(rows));
console.log(rows.join("✨️")); // console.logで結果を表示し、join("\n")で各行を改行コード"\n"で繋げて複数行として出力する
console.log(rows.join("\n"));
