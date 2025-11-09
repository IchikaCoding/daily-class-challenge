// 条件を見る→足す→条件不一致ならその時のnが表示される
let n1 = 0;
while (n1 < 3) {
  console.log("whileバージョン", n1);
  n1++;
}

// Expected output: 3

// 足す→条件を見る→不一致なら実行しない→そのときのｍが表示される

for (let m = 0; m < 3; m++) {
  console.log("forバージョン", m);
}

// ーーーーーーー1 から 3 まで数えるーーーーーーー
let i = 1;
while (i <= 3) {
  console.log(i);
  i++;
}
// ーーーーーーーーcontinueの練習ーーーーーーーー
/** 3の時だけ飛ばすループ処理 */
let nTwo = 1;
while (nTwo <= 5) {
  if (nTwo === 3) {
    nTwo++;
    continue;
  }
  console.log("nTwo", nTwo);
  nTwo++;
}

// ーーーーーーーbreak で途中終了ーーーーーーーーー

let nThree = 1;
while (nThree <= 5) {
  console.log(nThree);
  if (nThree === 3) {
    break;
  }
  nThree++;
}

// ーーーーーー7で""Lucky Seven!"ーーーーーーー
// 3 の倍数はスキップして出力しない
// continue は使わず、条件分岐で処理

/**
 * codexOneの初期値が1
 * codexOne <= 7
 * もし3で割って余りが0ならcodexOneに1を足す
 * もしcodexOneが7になったら"Lucky Seven!"＆break
 *　コンソールに数字を表示，codexOneに1を足す
 */

let codexOne = 1;
while (codexOne <= 7) {
  if (codexOne % 3 === 0) {
    codexOne++;
  }
  if (codexOne === 7) {
    console.log("7のとき：", codexOne);
    console.log("Lucky Seven!");
    break;
  }
  console.log("3でも7でもないとき", codexOne);
  codexOne++;
}

// ーーーーーーcontinue でスキップーーーーーー
let nFour = 1;
while (nFour <= 5) {
  if (nFour % 2 === 0) {
    nFour++;
    continue;
  }
  console.log({ nFour });
  nFour++;
}

// ーーーーーーprompt を使って正解するまで聞くーーーーーー

// const answer = "JS";
// let input = "";

// while (input !== answer) {
//   input = prompt("「JS」と入力すると正解です！");
//   /** キャンセルボタンを押したときに実行される処理 */
//   if (input === null) {
//     console.log("キャンセルで終了");
//     break;
//   }
// }

// if (input === answer) {
//   console.log("正解！おめでとう🎉");
// }

// ーーーーーーーー配列を while で回すーーーーーーーー

const fruitArray = ["🍋‍🟩", "🍊", "🍓"];
let idx = 0;

while (idx < fruitArray.length) {
  console.log(idx, fruitArray[idx]);
  idx++;
}

// TODO 無限ループ対策のコードを実践してみる

// ーーーーーーーー練習ドリル 💪ーーーーーーーー
// ーーーーーーーー1〜100 の合計ーーーーーーーー

/**
 * nFiveが1で初期化
 * nFive <= 100まで繰り返す
 * sum = nFive + sum
 * nFive++;
 * console.log({sum})
 */

let nFive = 1;
let sum = 0;

while (nFive <= 100) {
  sum += nFive;
  nFive++;
}
console.log({ sum }); // 5050

// ーーーーーーーー3 の倍数だけ表示 (〜15)ーーーーーーーー

/**
 * nSix = 1で初期化
 * nSix <= 15
 * もしnSix%3 === 0, コンソールにnSixを表示,nSix++
 * nSix++
 */

let nSix = 1;
let values = [];
while (nSix <= 15) {
  if (nSix % 3 === 0) {
    values.push(nSix);
    console.log("values", values);
    nSix++;
  }
  nSix++;
}
console.log("カンマ区切りの表示", values.join(","));

// ーーーーーーーーパスワード（最大 3 回）ーーーーーーーー

const answer = "ichika";
// TODO 状態管理フラグは-1,1で管理するのとfalseで管理するのとどっちがいいのか
let isAuthenticated = false;
let tries = 0;

/**
 * 3未満のとき繰り返す処理
 * promptの返り値をinputに代入する
 * キャンセルされたら終了，break
 * 失敗だったらisAuthenticated = false;
 * 成功だったらisAuthenticated = true;, break
 * tries++
 */
// while (tries < 3) {
//   // TODO どうして失敗のときの処理の中にプロンプトがあるの？
//   const input = prompt("パスワードを入力（最大3回）");
//   //   成功したときの処理
//   if (input === answer) {
//     isAuthenticated = true;
//     break;
//   }
//   //   if (input !== answer) {
//   //     console.log("失敗…また挑戦してね🐤");
//   //   }
//   //   キャンセルのときの処理
//   if (input === null) {
//     console.log("キャンセルで終了");
//     break;
//   }
//   if (input === "") {
//     console.log("なにか入力してください");
//   }
//   tries++;
// }

// // isAuthenticatedが真か偽かでコンソールの表示を変える
// // if (isAuthenticated) {
// //   console.log("成功: ログイン成功✨");
// // }
// // 三項演算子バージョンで書いてみる，失敗の処理を省略
// console.log(isAuthenticated ? "成功: ログイン成功✨" : "失敗…また挑戦してね🐤");

// ーーーーーーー11. 最後のチャレンジ ✍️ーーーーーーー

/**
 *
 * stepsが8000以下なら繰り返す
 * input = prompt()
 * 0 以下や数値以外の入力は無視して再入力を促す
 * もしinputがキャンセル→break
 * もし0より大きい数値なら→steps = steps+ input
 * stepsが8000以上ならOKが真
 * コンソールを三項演算子でかく（OKが真なら→達成！，偽→頑張って偉い！また明日めげずに頑張ろう！）
 */

const goal = 8000;
let steps = 0;

while (steps < goal) {
  const input = prompt(`現在の歩数は${steps}です。追加の歩数を入力してね♪`);
  //   キャンセルのときの処理
  //   キャンセルのときのOKの扱い方を考える
  if (input === null) {
    console.log("キャンセルで終了");
    break;
  }
  const number = Number(input);
  //   TODO 1以上かつ数値のときだけ実行する処理に変更
  if (typeof number === "number" && number >= 1) {
    steps += number;
  }
}

console.log("合計の歩数→", steps);
console.log(
  steps >= goal ? "達成🎉" : "頑張って偉い！また明日めげずに頑張ろう！"
);
