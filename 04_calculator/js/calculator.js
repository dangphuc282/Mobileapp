"use strict";

// DOM要素の取得
const elementSelect = document.getElementById("calcType");
const elementNum1 = document.getElementById("num1");
const elementNum2 = document.getElementById("num2");
const elementResult = document.getElementById("result");
const elementBtnEqual = document.getElementById("btnEqual");

// 値が変わるたびに結果クリア
elementSelect.addEventListener("change", clear);
elementNum1.addEventListener("change", clear);
elementNum2.addEventListener("change", clear);

// 「＝」ボタンクリックで計算実行
elementBtnEqual.addEventListener("click", update);

function update() {
  const num1 = Number(elementNum1.value);
  const num2 = Number(elementNum2.value);
  const calcType = elementSelect.value;

  const result = calculate(num1, num2, calcType);
  elementResult.innerHTML = result;
}

function calculate(num1, num2, calcType) {
  let result;

  switch (calcType) {
    case "type-add":
      result = num1 + num2;
      break;
    case "type-subtract": // ✅ Đã sửa đúng
      result = num1 - num2;
      break;
    case "type-multiply":
      result = num1 * num2;
      break;
    case "type-divide":
      // Xử lý chia cho 0
      result = num2 !== 0 ? (num1 / num2) : "エラー (÷0)";
      break;
    default:
      result = "エラー";
  }

  return result;
}

function clear() {
  elementResult.innerHTML = "";
}
