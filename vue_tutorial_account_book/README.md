# [VueとGASでつくる！サーバーレス家計簿](https://zenn.dev/matsu7089/books/gas-account-book)

STEP
1. プロジェクトの作成
```vue
➜  vue_tutorial_housekeeping_book [develop✔ ]vue create gas-account-book                                                                                                    [develop|✔ ]


Vue CLI v4.5.9
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, Router, Vuex, Linter
? Choose a version of Vue.js that you want to start the project with 2.x
? Use history mode for router? (Requires proper server setup for index fallback in production) No
? Pick a linter / formatter config: Basic
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? Yes
? Save preset as: .
? Pick the package manager to use when installing dependencies: Yarn

🎉  Preset . saved in /Users/yamadaitsuki/.vuerc


Vue CLI v4.5.9
✨  Creating project in /Users/yamadaitsuki/develop/Study/practice/vue_tutorial_housekeeping_book/gas-account-book.
⚙️  Installing CLI plugins. This might take a while...

yarn install v1.22.10
info No lockfile found.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...


success Saved lockfile.
✨  Done in 50.86s.
🚀  Invoking generators...
📦  Installing additional dependencies...

yarn install v1.22.10
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...

success Saved lockfile.
✨  Done in 10.05s.
⚓  Running completion hooks...

📄  Generating README.md...

🎉  Successfully created project gas-account-book.
👉  Get started with the following commands:

 $ cd gas-account-book
 $ yarn serve
```

2. [Vuetifyのインストール](https://vuetifyjs.com/en/introduction/why-vuetify/)
   vueのマテリアルデザインフレームワーク
```
➜  gas-account-book [develop✔ ]vue add vuetify                                                                                                                              [develop|✔ ]

📦  Installing vue-cli-plugin-vuetify...

yarn add v1.22.10
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 5 new dependencies.
info Direct dependencies
└─ vue-cli-plugin-vuetify@2.0.7
info All dependencies
├─ interpret@1.4.0
├─ null-loader@3.0.0
├─ rechoir@0.6.2
├─ shelljs@0.8.4
└─ vue-cli-plugin-vuetify@2.0.7
✨  Done in 3.67s.
✔  Successfully installed plugin: vue-cli-plugin-vuetify

? Choose a preset: Default (recommended)

🚀  Invoking generator for vue-cli-plugin-vuetify...
📦  Installing additional dependencies...

yarn install v1.22.10
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
✨  Done in 6.43s.
⚓  Running completion hooks...

✔  Successfully invoked generator for plugin: vue-cli-plugin-vuetify
 vuetify  Discord community: https://community.vuetifyjs.com
 vuetify  Github: https://github.com/vuetifyjs/vuetify
 vuetify  Support Vuetify: https://github.com/sponsors/johnleider
```

3. yarn serve サーバを起動する
```
➜  gas-account-book [develop) ✗ ]yarn serve                                                                                                                               [develop|+6… ]
yarn run v1.22.10
$ vue-cli-service serve
 INFO  Starting development server...
98% after emitting CopyPlugin

 DONE  Compiled successfully in 17061ms                                                                                                                                           3:31:29


  App running at:
  - Local:   http://localhost:8080/ 
  - Network: http://192.168.0.30:8080/

  Note that the development build is not optimized.
  To create a production build, run yarn build.
  ```
  `http://localhost:8080/`にアクセスできることを確認する

4. ファイル構成の確認  
asets : ロゴなどのアセット
compornents : 主に再利用するコンポーネント  
plugins : vuetifyなどのプラグイン  
store : Vuexストアの設定  
views : ページを設定するvueファイル  
App.vue : Vueアプリのメインファイル  
main.js : エントリポイントとなるファイル  


   