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
