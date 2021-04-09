import { TodoListModel } from "./model/TodoListModel.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
import { TodoListView } from "./view/TodoListView.js";
import { render } from "./view/html-util.js";

export class App {
  constructor({
    formElement,
    inputElement,
    containerElement,
    todoItemCountElement,
  }) {
    this.todoListView = new TodoListView();
    this.todoListModel = new TodoListModel();
    // bind to Element
    this.formElement = formElement;
    this.formInputElement = inputElement;
    this.todoContainerElement = containerElement;
    this.todoItemCountElement = todoItemCountElement;
    // ハンドラ呼び出しでthisが常にAppのインスタンスを示すようにする
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  /**
   * フォーム送信時に呼ばれるリスナー関数
   * @param {Event} event
   */
  handleSubmit(event) {
    event.preventDefault();
    const inputElement = this.formInputElement;
    this.handleAdd(inputElement.value);
    inputElement.value = "";
  }

  /**
   * TodoListViewが変更されたときに呼ばれるリスナー関数
   */
  handleChange() {
    const todoCountElement = this.todoItemCountElement;
    const todoListContainerElement = this.todoContainerElement;
    const todoItems = this.todoListModel.getTodoItems();
    const todoListElement = this.todoListView.createElement(todoItems, {
      // Appに定義したリスナー関数を呼び出す
      onUpdateTodo: ({ id, completed }) => {
        this.handleUpdate({ id, completed });
      },
      onDeleteTodo: ({ id }) => {
        this.handleDelete({ id });
      },
    });
    // containerElementの中身をtodoListElementで上書きする
    render(todoListElement, todoListContainerElement);
    // アイテム数の表示を更新
    todoCountElement.textContent = `Todoアイテム数: ${this.todoListModel.getTotalCount()}`;
  }

  mount() {
    this.todoListModel.onChange(this.handleChange);
    this.formElement.addEventListener("submit", this.handleSubmit);
  }

  unmount() {
    this.todoListModel.offChange(this.handleChange);
    this.formElement.removeEventListener("submit", this.handleSubmit);
  }
}
