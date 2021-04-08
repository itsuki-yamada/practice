import { element } from "./view/html-util.js";

export class App {
  constructor() {
    console.log("App initialized");
  }
  mount() {
    const formElement = document.getElementById("js-form");
    const inputElement = document.getElementById("js-form-input");
    const containerElement = document.getElementById("js-todo-list");
    const todoItemCountElement = document.getElementById("js-todo-count");

    let todoItemCount = 0;

    formElement.addEventListener("submit", (event) => {
      //   submitイベント本来の動作を止める
      event.preventDefault();

      // 追加するToDoItemの要素を作成する。
      const todoItemElement = element`<li>${inputElement.value}</li>`;

      // ToDoアイテムをcontainerに追加する
      containerElement.appendChild(todoItemElement);

      // ToDoアイテム数を+1して、表示されているテキストを更新する
      todoItemCount += 1;
			todoItemCountElement.textContent = `ToDoアイテム数: ${todoItemCount}`;

      // 入力欄を空文字にしてリセットする
			inputElement.value = "";
    });
  }
}
