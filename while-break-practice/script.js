// 条件を見る→足す→条件不一致ならその時のnが表示される
let n = 0;
while (n < 3) {
  console.log("whileバージョン", n);
  n++;
}

// Expected output: 3

// 足す→条件を見る→不一致なら実行しない→そのときのｍが表示される

for (let m = 0; m < 3; m++) {
  console.log("forバージョン", m);
}
