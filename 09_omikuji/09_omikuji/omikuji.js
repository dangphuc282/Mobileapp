"use strict";

window.addEventListener("DOMContentLoaded", function () {
  // ヘッダーのアニメーション
  $("header").textillate({
    loop: false,
    minDisplayTime: 2000,
    initialDelay: 2000,
    autoStart: true,
    in: {
      effect: "fadeInLeftBig",
      delayScale: 1.5,
      delay: 50,
      sync: false,
      shuffle: true
    }
  });

  // おみくじボタンをスクロールで表示
  ScrollReveal().reveal("#btn1", { duration: 9000 });

  // 5秒後にアラート表示
  setTimeout(function () {
    let popMessage = "いらっしゃい！おみくじ引いてって！";
    window.alert(popMessage);
  }, 5000);

  // おみくじボタンクリック時の処理
  const btn1 = document.getElementById("btn1");

  btn1.addEventListener("click", function () {
    btn1.style.transition = "1s";

    const resultTexts = [
      "大吉!!!!!", "吉!!!!", "中吉!!!", "小吉!!", "末吉!", "凶。。"
    ];

    const resultColors = [
      "#ff0000", "#c71585", "#ff1493", "#ff69b4", "#ff8c00", "#1e90ff"
    ];

    const resultFontSizes = [
      "55px", "50px", "45px", "40px", "35px", "30px"
    ];
    
    const resultMaxSpeeds = [10, 10, 8, 5, 5, 5];
    const resultMaxSizes = [30, 30, 20, 15, 20, 20];

    const resultImages = [
      "img/star.png",
      "img/sakura_hanabira.png",
      "img/sakura_hanabira.png",
      "img/sakura_hanabira.png",
      "img/leaf.png",
      "img/snowflakes.png"
    ];

    // ランダムなインデックスを取得
    let n = Math.floor(Math.random() * resultTexts.length);

    // ボタンのテキスト、色、フォントサイズを変更
    btn1.textContent = resultTexts[n];
    btn1.style.color = resultColors[n];
    btn1.style.fontSize = resultFontSizes[n];

    // snowfall を一旦停止
    $(document).snowfall("clear");

    // snowfall を再スタート（結果に応じて）
    $(document).snowfall({
      maxSpeed: resultMaxSpeeds[n],
      minSpeed: 1,
      maxSize: resultMaxSizes[n],
      minSize: 1,
      image: resultImages[n]
    });
  });
});
