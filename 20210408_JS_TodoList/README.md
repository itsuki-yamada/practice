# ピュアJSでToDoListを作成してみる。

# 要件
- ToDoの追加ができること
- ToDoの削除ができること
- ToDoの編集ができること
- ToDoのフィルタリングができること


| 機能 | 操作 | モデルの処理 | 表示 | 
| :--- | :--- | :--- | :--- |
| TodoItemの追加 | フォームに入力して送信 | ToDoListモデルに新しいToDoItemModelを追加 | ToDoListモデルをもとに表示を更新 |
| ToDoItemの更新 | チェックボックスをクリック | ToDoListモデルの指定したToDoItemModelの状態を更新 | ToDoListモデルをもとに表示を更新 |
| ToDoItemの削除 | 削除ボタンをクリック | ToDoListモデルから指定のToDoItemモデルを削除 | ToDoListモデルをもとに表示を更新 |


# 参考
[JSPrimer](https://jsprimer.net/use-case/todoapp/#todo-app)