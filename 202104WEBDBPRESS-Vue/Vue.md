# [Vue.js](https://jp.vuejs.org/index.html)

Vue.jsは、ビュー層に特化したフレームワーク

# Vite 軽量かつ高速のVue開発環境
Viteは、Vue 3の開発後期に登場した新しい開発環境です。Vueプロジェク
トの実行、ビルドに加え、コードの変更が即座に画面へと反映されるHot Module Replacement（HMR）など、開発を助ける多くの機能を有しています。

セットアップ

'''
npm init vite-app [app名]
cd [app名]
npm install
npm run dev
'''

## 単一ファイルコンポーネント SFC Single File Components
SFC... コンポーネントのJavaScript,HTML,CSSを、<template>,<script>などのブロックを使用して単一ファイルに記述する。
そのため、分散されたファイルから必要なコードを探す手間がなく、コンポーネントに必要な関心ごとを1箇所に集約できる。

*src/componentsに配置する*
SFCを利用するときはsrc/App.vueでインポートする


## componentsの作成
src/components内に作成する
src/App.vueで<template>で使用できるようにimportする


'''vue
<template>
    <ul>
        <li>
            {{ todo }}  
            <!-- Mustache構文といわれる二重の波かっこを使用してJavaScriptを記述する方法-->
        </li>
    </ul>
</template>
<script>
    export default {
        // dataオプションのreturnに定義されたプロパティは、コンポーネントのプロパティとして状態を保持し、<template>で使用できる
        data() {
            return { todo: 'Go out to sea'}
        }
    }
</script>
'''

### 属性値のバインディング
属性の先頭に**v-bind:**とつけて、**v-bind:属性名**と記述すると属性の値にJavaScript式を記述できるようになり、属性に式の結果を与えることができる
'''vue
<template>
    <ul>
        <li v-bind:title="todo">
            {{ todo }}  
            <!-- Mustache構文といわれる二重の波かっこを使用してJavaScriptを記述する方法-->
        </li>
    </ul>
</template>
<script>
    export default {
        // dataオプションのreturnに定義されたプロパティは、コンポーネントのプロパティとして状態を保持し、<template>で使用できる
        data() {
            return { todo: 'Go out to sea'}
        }
    }
</script>
'''