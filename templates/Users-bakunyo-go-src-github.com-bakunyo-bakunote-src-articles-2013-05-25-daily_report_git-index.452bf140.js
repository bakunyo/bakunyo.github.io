(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{85:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),p=a(22),o=a.n(p),l=a(62),r=a.n(l),b=a(199),u={},j="wrapper";function O(e){var t=e.components,a=r()(e,["components"]);return Object(b.a)(j,o()({},u,a,{components:t,mdxType:"MDXLayout"}),Object(b.a)("p",null,"いつも業務後に日報を書いてるんですけど、今日開発した部分を",Object(b.a)("span",{style:{color:"#ff0000"}},Object(b.a)("strong",{parentName:"p"},"Git logを参照して")),"ぱぱっとつくれないかな？ と思い調べてみたら、",Object(b.a)("strong",{parentName:"p"},"ありました。")),Object(b.a)("h2",null,"やり方。"),Object(b.a)("p",null,Object(b.a)("inlineCode",{parentName:"p"},"--pretty"),"というオプションで、フォーマットを指定できるみたいです。という訳で、"),Object(b.a)("pre",null,Object(b.a)("code",o()({parentName:"pre"},{}),'C:\\workspace\\test>git log --pretty=format:"%cd %s"\nThu May 23 21:57:36 2013 +0900 change file ext from Text to Markdown\nThu May 23 21:56:18 2013 +0900 modify content\nThu May 23 21:54:39 2013 +0900 create README file\n')),Object(b.a)("p",null,"こんな感じでできました！  "),Object(b.a)("p",null,"このやり方だと",Object(b.a)("strong",{parentName:"p"},Object(b.a)("span",{style:{color:"#ff0000"}},"1コミット1行")),"になるので、どこからが本日分の作業だったのかが一目瞭然です！  "),Object(b.a)("p",null,"ちなみに、",Object(b.a)("inlineCode",{parentName:"p"},"format:"),"の部分を省略して"),Object(b.a)("pre",null,Object(b.a)("code",o()({parentName:"pre"},{}),'git log --pretty="%cd %s"\n')),Object(b.a)("p",null,"でもうまく結果が表示されました〜！  "),Object(b.a)("h4",null,"参考URL"),Object(b.a)("p",null,Object(b.a)("a",o()({parentName:"p"},{href:"http://git-scm.com/book/ja/Git-%E3%81%AE%E5%9F%BA%E6%9C%AC-%E3%82%B3%E3%83%9F%E3%83%83%E3%83%88%E5%B1%A5%E6%AD%B4%E3%81%AE%E9%96%B2%E8%A6%A7"}),"Git の基本 - コミット履歴の閲覧")))}O.isMDXComponent=!0;var m=a(200);t.default=function(){return c.a.createElement(m.a,null,c.a.createElement(O,null))}}}]);