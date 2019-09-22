(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{81:function(t,e,a){"use strict";a.r(e);var l=a(0),n=a.n(l),b=a(22),r=a.n(b),c=a(62),p=a.n(c),j=a(193),O={},o="wrapper";function m(t){var e=t.components,a=p()(t,["components"]);return Object(j.a)(o,r()({},O,a,{components:e,mdxType:"MDXLayout"}),Object(j.a)("p",null,"Ruby認定技術者のSilverに",Object(j.a)("span",{style:{color:"#ff0000"}},Object(j.a)("strong",{parentName:"p"},"合格")),"してきました！  "),Object(j.a)("p",null,"得点は、92点（100点中）。"),Object(j.a)("p",null,"勉強の仕方については他のブログ等で多数解説されているので、ここではこれから勉強を始めるという方に役に立ちそうなメモを残しておきます。  "),Object(j.a)("p",null,"Ruby公式資格教科書には、",Object(j.a)("strong",{parentName:"p"},Object(j.a)("span",{style:{color:"#ff0000"}},"実は沢山の訂正箇所があります。")),"  "),Object(j.a)("p",null,"学習を始める際には、まず訂正箇所を一気に直しちゃいましょう！  "),Object(j.a)("p",null,"正誤表は、以下で公開されています。  "),Object(j.a)("p",null,Object(j.a)("a",r()({parentName:"p"},{href:"http://gihyo.jp/book/2012/978-4-7741-5001-7/support"}),"サポートページ - Ruby公式資格教科書 Ruby技術者認定試験Silver/Gold対応"),"  "),Object(j.a)("p",null,"また、サポートページで記載されてないけど、",Object(j.a)("span",{style:{color:"#ff0000"}},"ここも誤りでは？"),"と思った箇所があるので以下に記載します。  "),Object(j.a)("h4",null,"[1つ目]","p.210 Hashクラスの説明"),Object(j.a)("p",null,"ハッシュは連想配列とも呼ばれ、配列でのインデックスにあたるキーとして、数値以外の任意のRubyオブジェクトを利用できます。"),Object(j.a)("p",null,"これは誤りとはいえないかもしれませんが、何か違和感を覚えました。。  "),Object(j.a)("p",null,"まるで、",Object(j.a)("strong",{parentName:"p"},Object(j.a)("span",{style:{color:"#ff0000"}},"連想配列は数値をキーに使用できない")),"かのような言い回しに感じませんか？  "),Object(j.a)("p",null,"僕の日本語読解能力が乏しいだけですかね？ そうかもしれないです。。。笑  "),Object(j.a)("h4",null,"[2つ目]","p.228 表5-4 ファイルをテストするメソッド"),Object(j.a)("table",null,Object(j.a)("thead",{parentName:"table"},Object(j.a)("tr",{parentName:"thead"},Object(j.a)("th",r()({parentName:"tr"},{align:null})),Object(j.a)("th",r()({parentName:"tr"},{align:null})))),Object(j.a)("tbody",{parentName:"table"},Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:null}),"誤"),Object(j.a)("td",r()({parentName:"tr"},{align:null}),"File.exits?")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:null}),"正"),Object(j.a)("td",r()({parentName:"tr"},{align:null}),"File.exist?")))),Object(j.a)("p",null,"単なるスペルミスですね。  "),Object(j.a)("p",null,"こちらはサポートページへお問い合わせ済です。  "),Object(j.a)("h4",null,"実は破壊的なメソッド一覧"),Object(j.a)("p",null,"公式問題集でかなりの割合を占める、破壊的・非破壊的メソッドの問題。"),Object(j.a)("span",{style:{color:"#ff0000"}},"**！（エクスクラメーションマーク）**"),"が付いてればわかりやすいですが、無くても破壊的である場合が厄介です。",Object(j.a)("p",null,"ということで、！ の付いていない破壊的メソッド、通称",Object(j.a)("strong",{parentName:"p"},Object(j.a)("span",{style:{color:"#ff0000"}},"「実は破壊的なメソッド」")),"を一覧にしてみました。"),Object(j.a)("h4",null,"Stringクラス"),Object(j.a)("table",null,Object(j.a)("thead",{parentName:"table"},Object(j.a)("tr",{parentName:"thead"},Object(j.a)("th",r()({parentName:"tr"},{align:"left"}),"実は破壊的なメソッド"))),Object(j.a)("tbody",{parentName:"table"},Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:"left"}),"insert")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:"left"}),"replace")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:"left"}),"<<")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:"left"}),"concat")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:"left"}),"［］=")))),Object(j.a)("h5",null,"おまけ"),Object(j.a)("p",null,"String#deleteは",Object(j.a)("strong",{parentName:"p"},"実は破壊的でない")),Object(j.a)("h4",null,"Arrayクラス"),Object(j.a)("table",null,Object(j.a)("thead",{parentName:"table"},Object(j.a)("tr",{parentName:"thead"},Object(j.a)("th",r()({parentName:"tr"},{align:"left"}),"実は破壊的なメソッド"))),Object(j.a)("tbody",{parentName:"table"},Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:"left"}),"<<")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:"left"}),"push")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:"left"}),"concat")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:"left"}),"insert")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:"left"}),"unshift")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:"left"}),"[]=")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:"left"}),"fill")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:"left"}),"replace")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:"left"}),"delete_at")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:"left"}),"delete_if")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:"left"}),"delete")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:"left"}),"clear")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:"left"}),"shift")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:"left"}),"pop")))),Object(j.a)("h4",null,"Hashクラス"),Object(j.a)("table",null,Object(j.a)("thead",{parentName:"table"},Object(j.a)("tr",{parentName:"thead"},Object(j.a)("th",r()({parentName:"tr"},{align:"left"}),"実は破壊的なメソッド"))),Object(j.a)("tbody",{parentName:"table"},Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:"left"}),"［］=")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:"left"}),"delete")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:"left"}),"delete_if")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:"left"}),"replace")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:"left"}),"shift")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:"left"}),"update")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",r()({parentName:"tr"},{align:"left"}),"clear")))),Object(j.a)("h4",null,"おまけ"),Object(j.a)("p",null,"実は破壊的じゃないメソッド merge、invert"),Object(j.a)("h4",null,"疑問…"),Object(j.a)("p",null,"String#deleteは非破壊的なのに、Array#deleteは破壊的なんですよね。  "),Object(j.a)("p",null,"このあたり、どう定義分けをしているのか気になって仕方ありません。  "),Object(j.a)("blockquote",null,Object(j.a)("p",{parentName:"blockquote"},"2013.7.17 追記  ")),Object(j.a)("blockquote",null,Object(j.a)("p",{parentName:"blockquote"},"破壊的メソッドの覚え方について以下の記事を参考にさせて頂いていました。  ")),Object(j.a)("blockquote",null,Object(j.a)("p",{parentName:"blockquote"},Object(j.a)("a",r()({parentName:"p"},{href:"http://jijixi.azito.com/gotow/widestudio/ruby_with_widestudio/1st_step_ruby_for_C_users.html"}),"C 言語ユーザのための Ruby 入門")),Object(j.a)("p",{parentName:"blockquote"},"以下は引用。破壊的メソッドは、基本的に以下の3つのどれかだそうです。  ")),Object(j.a)("blockquote",null,Object(j.a)("hr",{parentName:"blockquote"}),Object(j.a)("p",{parentName:"blockquote"},'1.末尾に "!" が付いているメソッド  ')),Object(j.a)("blockquote",null,Object(j.a)("p",{parentName:"blockquote"},"2.リスト的な構造を持つクラスにおいて特定の要素を追加・削除・変更するメソッド  ")),Object(j.a)("blockquote",null,Object(j.a)("p",{parentName:"blockquote"},"3.オブジェクトそのものを置換えたり、消去したり、属性を変更したりするメソッド  ")),Object(j.a)("blockquote",null,Object(j.a)("hr",{parentName:"blockquote"}),Object(j.a)("p",{parentName:"blockquote"},"たしかに、こう考えるとわかりやすいですね！")),Object(j.a)("h4",null,"Overrideできない演算子"),Object(j.a)("p",null,"最後に、Overrideできない演算子をご紹介しておきます。"),Object(j.a)("pre",null,Object(j.a)("code",r()({parentName:"pre"},{}),"= += ! not && and || or :? ::\n")),Object(j.a)("p",null,"これだけ見るとただの記号の羅列にしか見えなくて覚えられそうにありませんが、\n以下のように分類すると記憶しやすいです。"),Object(j.a)("ul",null,Object(j.a)("li",{parentName:"ul"},"代入演算子（自己代入を含む）"),Object(j.a)("li",{parentName:"ul"},"論理演算子"),Object(j.a)("li",{parentName:"ul"},"三項演算子"),Object(j.a)("li",{parentName:"ul"},"::")),Object(j.a)("p",null,"ということで、次はGold目指してがんばります！  "))}m.isMDXComponent=!0;var u=a(194);e.default=function(){return n.a.createElement(u.a,null,n.a.createElement(m,null))}}}]);