console.log("App.js loaded");

export class App {
  constructor() {
    console.log("App initialized");
  }
  mount() {
    const formElement = document.getElementById("js-form");
    const inputElement = document.getElementById("js-form-input");
    formElement.addEventListener("submit", (event) => {
      //   submitイベント本来の動作を止める
      event.preventDefault();
      console.log(inputElement.value);
    });
  }
}
