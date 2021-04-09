import { App } from "./src/App.js";

const formElement = document.getElementById("js-form");
const inputElement = document.getElementById("js-form-input");
const containerElement = document.getElementById("js-todo-list");
const todoItemCountElement = document.getElementById("js-todo-count");

const app = new App({
  formElement,
  inputElement,
  containerElement,
  todoItemCountElement,
});

window.addEventListener("load", () => {
  app.mount();
});

window.addEventListener("unload", () => {
  app.unmount();
});
