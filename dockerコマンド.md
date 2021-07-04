# Dockerコマンド

# docker-compose

## 用途別
- [起動中のコンテナ内でコマンドを実行](https://docs.docker.jp/engine/reference/commandline/exec.html#exec)
    - `docker exec [オプション] コンテナ コマンド [引数...]`
    - [`docker-compose exec サービス名 bash`](https://matsuand.github.io/docs.docker.jp.onthefly/compose/reference/exec/)

- [Dockerファイルやビルドディレクトリの変更を反映したい](https://docs.docker.jp/compose/reference/build.html)
    - `docker-compose build`
    - `docker-compose run --build`