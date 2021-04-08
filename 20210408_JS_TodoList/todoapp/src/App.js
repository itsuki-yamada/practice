import { TodoListModel } from "./model/TodoListModel.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
import { TodoListView } from "./view/TodoListView.js";
import { render } from "./view/html-util.js";

export class App {
  constructor() {
    this.todoListView = new TodoListView();
    this.todoListModel = new TodoListModel();
  }

  /**
   * Todoを追加するときに呼ばれるリスナー関数
   * @param { string } title
   */
  handleAdd(title) {
    this.todoListModel.addTodo(new TodoItemModel({ title, completed: false }));
  }

  /**
   * Todoの状態を更新した時に呼ばれるリスナー関数
   * @param {{ id: number, completed: boolean }}
   */
  handleUpdate({ id, completed }) {
    this.todoListModel.updateTodo({ id, completed });
  }

  /**
   * Todoを削除した時に呼ばれるリスナー関数
   * @param {{ id: number }}
   */
  handleDelete({ id }) {
    this.todoListModel.deleteTodo({ id });
  }

  mount() {
    const formElement = document.getElementById("js-form");
    const inputElement = document.getElementById("js-form-input");
    const containerElement = document.getElementById("js-todo-list");
    const todoItemCountElement = document.getElementById("js-todo-count");

    this.todoListModel.onChange(() => {
      const todoItems = this.todoListModel.getTodoItems();
      const todoListElement = todoListView.createElement(todoItems, {
        onUpdateTodo: ({ id, completed }) => {
          this.handleUpdate({ id, completed });
        },
        onDeleteTodo: ({ id }) => {
          this.handleDelete({ id });
        },
      });
      // containerElementの中身をtodoListElementで上書きする
      render(todoListElement, containerElement);
      // アイテム数の表示を更新
      todoItemCountElement.textContent = `Todoアイテム数: ${this.todoListModel.getTotalCount()}`;
    });

    formElement.addEventListener("submit", (event) => {
      //   submitイベント本来の動作を止める
      event.preventDefault();

      this.handleAdd(inputElement.value);

      // 入力欄を空文字にしてリセットする
      inputElement.value = "";
    });
  }
}
