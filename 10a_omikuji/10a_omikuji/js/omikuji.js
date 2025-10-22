"use strict";

window.addEventListener("DOMContentLoaded", () => {
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
  setTimeout(() => alert("いらっしゃい！おみくじ引いてって！"), 5000);

  let soundEndflag = false;

  // おみくじボタンクリック時の処理
  const btn1 = document.getElementById("btn1");
  const omikujiText = document.getElementById("omikujiText");

  btn1.addEventListener("click", () => {
    if (soundEndflag) {
      soundControl("end");
    }

    const resultText = ["大吉!!!!!", "吉!!!!", "中吉!!!", "小吉!!", "末吉!", "凶。。"];
    const resultColor = ["#ff0000", "#cc7185", "#ff1493", "#ffb6b4", "#ff8c00", "#1e90ff"];
    const resultFontSize = ["90px", "80px", "70px", "60px", "50px", "40px"];
    const resultMaxSpeed = [10, 10, 8, 5, 5, 5];
    const resultMaxSize = [30, 30, 20, 15, 20, 20];
    const resultImage = [
      "img/star.png",
      "img/sakura_hanabira.png",
      "img/sakura_hanabira.png",
      "img/sakura_hanabira.png",
      "img/leaf.png",
      "img/snowflakes.png"
    ];
    const resultSound = [
      "sound/omikuji_sound1.mp3",
      "sound/omikuji_sound2.mp3",
      "sound/omikuji_sound2.mp3",
      "sound/omikuji_sound2.mp3",
      "sound/omikuji_sound2.mp3",
      "sound/omikuji_sound3.mp3"
    ];

    const n = Math.floor(Math.random() * resultText.length);

    // テキスト設定
    omikujiText.textContent = resultText[n];
    omikujiText.style.color = resultColor[n];
    omikujiText.style.fontSize = resultFontSize[n];

    w_sound = resultSound[n];
    soundControl("start", w_sound);
    soundEndflag = true;

    // snowfall 再起動
    $(document).snowfall("clear");
    $(document).snowfall({
      maxSpeed: resultMaxSpeed[n],
      minSpeed: 1,
      maxSize: resultMaxSize[n],
      minSize: 1,
      image: resultImage[n]
    });
  });
});

// sound control
let w_sound;
let music;

function soundControl(status, w_sound) {
  if (status === "start") {
    music = new Audio(w_sound);
    music.currentTime = 0;
    music.play();
  } else if (status === "end") {
    music.pause();
    music.currentTime = 0;
  }
}
