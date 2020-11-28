# jQuery
## jQueryとは
jQueryはJavaScriptのライブラリの1つです。
ユーザーのクリックに反応して表示されるフォームや、アニメーションなど、HTMLとCSSだけでは実現できなかった様々な動きを表現することができます。

## jQueryの書き方
jQueryの使い方は、①jQueryオブジェクトを作成し、②そのjQueryオブジェクトに対してメソッド（機能）を呼び出す、という2つが基本になります。jQueryはJavaScript（JS）なので、文末にセミコロンが必要です。またコメントもJS同様に//を用います。

## jQueryの読み込み
jQueryを使用するには、jQueryライブラリを読み込む必要があります。ライブラリは[インターネット経由](https://developers.google.com/speed/libraries#jquery)で読み込むのが一般的です。<head>タグの中で下図のようにURLを読み込むことで、jQueryが使用できるようになります。
jQueryは、.js形式のファイルにコードを書きます。 HTMLファイルで、`<script src="ファイルのURL"></script>`と書くことで、jQueryのコードを記述するファイルが読み込まれます。 `<script>`はCSSファイルの読み込みのように`<head>`タグの中にも書けますが、`</body>`の直前に書くことで、WEBページの表示速度をより早めることが出来ます。
```html:example
<head>
    // google url https://developers.google.com/speed/libraries#jquery
    <script src="https://...jquery.min.js"></script>
</head>
<body>
    <script src="script.js"></script>
</body>
```
## jQueryの型
jQueryはHTMLの中身を操作するため、HTMLの読み込みが完了してからjQueryによる操作を開始するようにします。 そのためにはreadyイベントを使用し、`$(document).ready()`の中身にjQueryの処理を書いていきます。 この構文には省略形も用意されており、`$(function(){ });`と書くことも出来ます。
```js:example
$(document).ready(function(){
    // HTMLの読み込みが完了してから実行する
})
//　readyファンクションの省略形
$(function(){
    // この中にjQueryを書く
})
```

### 変数を使う
同じjQueryオブジェクトを複数回使用する時は変数にしましょう。コードが見やすくなる上、jQueryの処理が高速化されます。 JavaScriptと同じく、jQueryで変数宣言にはvarを用います。変数には文字列や数値、jQueryオブジェクトなどを格納することができますが、**jQueryオブジェクトを格納する時は、わかりやすいように変数の頭に$を付けるのが慣例**となっています。
```js:変数
var $div = $('div');

$div.css('color','red');
$div.html('jQuery');
$div.fadeOut();
```

### メソッドチェーンを使う
同じjQueryオブジェクトを複数回使用する時は、メソッドチェーンを使うことでも処理速度を高速化できます。 メソッドチェーンとは1つのjQueryオブジェクトに連続してメソッドが利用できる構文です。$('セレクタ').メソッド().メソッド()...のように書くことで、それぞれのメソッドが適用されます
```js:example
// .に続けてメソッドを呼び出す
$('div').css('color','red').html('jQuery');
```

## イベント
### クリックイベント
```js
$('セレクタ').イベント名(function(){
    // イベント発生時に実行したい処理
    // 指定したセレクタはthisで呼べる
    $(this).show();
})
```

### hoverイベント
hoverイベントは、 $('セレクタ').hover(マウスをのせた時の処理, マウスをはずした時の処理);のように書きます。clickイベントと違い、引数を2つ書くことに注意しましょう。引数の間はコンマで区切ります。
```js
$('div').hover(
    function(){
        // マウスを乗せた時の処理
    },
    function(){
        // マウスを外した時の処理
    }
)
```

## メソッド

### 表示
#### モーダルウィンドウの表示
```css:example
.login-modal-wrapper{
    display:none;
}
```
```js:example
$('#login-show').click(function(){
    $('#login-modal').fadeIn();
})
```

#### 要素を隠す
##### hide,fadeOut,slideUp

```js:hide
// 要素を非表示にする
$('h1').hide();
```

```js:アニメーション付きで要素を隠す
$('h1').fadeOut(ミリ秒指定も可能);
$('h1').slideUp(ミリ秒指定も可能);
```

#### 要素を表示する
##### show,fadeIn,slideDown
```js:show
$('h1').show();
```

```js:アニメーション付きで表示
$('h1').fadeIn('slow');
$('h1').slideDown();
```

### css属性を操作する
#### css
```css:example
p{
    color:blue;
}
```
```js:example
$('p').css('color','red');
```
#### addClass
```js:addClass
$('.text-contents').addClass('text-active')
```
#### removeClass
```js:removeClass
$('.text-contents').removeClass('text-active')
```
#### hasClass
引数に指定したクラスを、オブジェクトが持っているか判定するときに使用します。オブジェクトがそのクラスを持っていればtrue、持っていなければfalseを返します。
```js:hasClass
$('.answer').hasClass('open');
$('.answer open').hasClass('open');
```
### HTMLを変更する
#### html
```html:example
<p>こんにちは</p>
```
```js:example1
$('p').text('こんばんは');
```
```js:example2
$('p').html('<span>こんばんは</span>);
```

### 子要素の取得
#### find
findメソッドは、**すべての子孫要素(自分よりも下の階層の要素すべて）**の中から、指定したセレクタを持つ要素を取得したいときに用います
```html:find
<div id="wrapper">
    <a href="#">リンク1</a>
    <p>
        <a href="#">リンク2</a>
    </p>
</div>
```
```js:find
$('#wrapper').find('a').css('color','red');
```
#### children
childrenメソッドは、**指定したセレクタが持つ子要素（一階層だけ下）**の中から指定したセレクタに合致した要素を取得したいときに用います。
```js:children
$('#wrapper').children('a').css('color','red');
```