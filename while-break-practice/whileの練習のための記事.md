# 🐣 while をゼロからマスターしよう

いちごちゃん、ここは「ブラウザ + VSCode」だけで OK な、**while**入門コースだよ。  
HTML も CSS も Node も使わない。**Chrome などの開発者ツールの Console で実行**していくよ。  
VSCode は書く場所として使って、できたら**コンソールへコピペ**して実行すれば OK。

---

## 0. 準備 🎒

1. ブラウザを開く
2. 右クリック →「検証」→「Console」タブ
3. VSCode で `practice.js` に書いて、できたら**コンソールにコピペ**

---

## 1. while ってなに？🧭

> **条件が true のあいだ**、同じ処理を**くり返す**ための文法。

```js
while (条件) {
  // くり返したい処理
}
```

---

## 2. 最小の例：1 から 3 まで数える 🔢

```js
let i = 1;
while (i <= 3) {
  console.log(i);
  i = i + 1;
}
```

---

## 3. `break` で途中終了 🛑

```js
let n = 1;
while (n <= 5) {
  console.log(n);
  if (n === 3) {
    break;
  }
  n++;
}
```

---

## 4. `continue` でスキップ ⏭️

```js
let k = 1;
while (k <= 5) {
  if (k % 2 === 0) {
    k++;
    continue;
  }
  console.log(k);
  k++;
}
```

---

## 5. `prompt` を使って正解するまで聞く 📥

```js
const answer = "JS";
let input = "";

while (input !== answer) {
  input = prompt("「JS」と入力すると正解です！");
  if (input === null) {
    console.log("キャンセルで終了");
    break;
  }
}

if (input === answer) {
  console.log("正解！おめでとう🎉");
}
```

---

## 6. 配列を while で回す 🧺

```js
const fruits = ["🍓", "🍎", "🍌"];
let idx = 0;

while (idx < fruits.length) {
  console.log(idx, fruits[idx]);
  idx++;
}
```

---

## 7. 無限ループ対策 🛡️

```js
let count = 0;
const MAX = 1000;

while (true) {
  // ここに処理を書く
  count++;

  if (処理が終わった条件) break;
  if (count > MAX) break; // 安全弁
}
```

---

## 8. ありがちエラー 🩹

| エラー              | 原因                     | 対策                       |
| ------------------- | ------------------------ | -------------------------- |
| 無限ループになる    | `i++` を忘れた           | カウンタ更新を毎回確認     |
| 意図と逆の動作      | 条件が逆                 | `console.log()` で値を追う |
| `=` と `===` の違い | `=` は代入、`===` は比較 | `===` を使う               |

---

## 9. 練習ドリル 💪

### A：1〜100 の合計

```js
let sum = 0;
let x = 1;

while (x <= 100) {
  sum += x;
  x++;
}
console.log(sum);
```

### B：3 の倍数だけ表示 (〜15)

```js
let m = 1;
while (m <= 15) {
  if (m % 3 === 0) console.log(m);
  m++;
}
```

### C：パスワード（最大 3 回）

```js
const PASS = "ichika";
let tries = 0;
let ok = false;

while (tries < 3) {
  const p = prompt("パスワードを入力（最大3回）");
  if (p === null) break;
  if (p === PASS) {
    ok = true;
    break;
  }
  tries++;
}

console.log(ok ? "ログイン成功✨" : "失敗…また挑戦してね");
```

---

## 10. while と for の使い分け 🎯

| 状況                         | 選ぶ文  |
| ---------------------------- | ------- |
| 回数が決まっている           | `for`   |
| 条件が満たされるまで回したい | `while` |

---

## 11. 最後のチャレンジ ✍️

```js
const GOAL = 8000;
let total = 0;

while (total < GOAL) {
  const add = prompt(`現在 ${total} 歩。追加歩数は？`);
  if (add === null) break;

  const n = Number(add);
  if (Number.isNaN(n) || n <= 0) continue;

  total += n;
}

console.log(total >= GOAL ? "達成🎉" : "またあした👟");
```

---

## ✅ チェックリスト

- [ ] `while (条件) {}` が書ける
- [ ] カウンタの更新を忘れない
- [ ] `break / continue` の意味がわかる
- [ ] Console で実行できる ✨

---

🌈 **今日の積み重ね、ちゃんと力になってるよ。焦らず、でも止まらずいこう。**
