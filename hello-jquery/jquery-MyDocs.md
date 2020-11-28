# jQuery
## jQueryとは
jQueryはJavaScriptのライブラリの1つです。
ユーザーのクリックに反応して表示されるフォームや、アニメーションなど、HTMLとCSSだけでは実現できなかった様々な動きを表現することができます。

## jQueryの書き方
jQueryの使い方は、①jQueryオブジェクトを作成し、②そのjQueryオブジェクトに対してメソッド（機能）を呼び出す、という2つが基本になります。jQueryはJavaScript（JS）なので、文末にセミコロンが必要です。またコメントもJS同様に//を用います。


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