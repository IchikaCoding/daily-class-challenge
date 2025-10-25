export class HelloCounter {
  constructor(interval = 1000) {
    this.count = 0;
    this.timer = setInterval(() => {
      this.count++;
      console.log(`こんちか～♪${this.count}回目`);
    }, interval);
    console.log("this.timerの中身チェック", this.timer);
    console.log("ファイル分割した結果の確認用🐤");
  }
  stop() {
    clearInterval(this.timer);
  }
}
