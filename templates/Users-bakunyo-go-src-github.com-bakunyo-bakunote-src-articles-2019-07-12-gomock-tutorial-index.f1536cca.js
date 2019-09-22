(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{88:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),c=n(22),o=n.n(c),p=n(62),r=n.n(p),m=n(193),s={},j="wrapper";function b(e){var a=e.components,n=r()(e,["components"]);return Object(m.a)(j,o()({},s,n,{components:a,mdxType:"MDXLayout"}),Object(m.a)("p",null,Object(m.a)("a",o()({parentName:"p"},{href:"https://golang.org/"}),"Go"),"でモックを使うテストを書く時に利用する",Object(m.a)("a",o()({parentName:"p"},{href:"https://github.com/golang/mock"}),"gomock"),"について簡単に整理しておく"),Object(m.a)("h2",null,"使い方"),Object(m.a)("p",null,"大まかに3ステップ"),Object(m.a)("ol",null,Object(m.a)("li",{parentName:"ol"},"Install"),Object(m.a)("li",{parentName:"ol"},"Generate"),Object(m.a)("li",{parentName:"ol"},"Test")),Object(m.a)("h2",null,"Install"),Object(m.a)("p",null,"テストの際に使うパッケージとGenerateコマンドのためのパッケージをそれぞれインストール"),Object(m.a)("pre",null,Object(m.a)("code",o()({parentName:"pre"},{className:"hljs language-bash"}),"go get github.com/golang/mock/gomock\ngo install github.com/golang/mock/mockgen")),Object(m.a)("h2",null,"Generate"),Object(m.a)("p",null,Object(m.a)("inlineCode",{parentName:"p"},"source mode")," と ",Object(m.a)("inlineCode",{parentName:"p"},"reflect mode")," の2種類の使い方がある"),Object(m.a)("h3",null,"source mode"),Object(m.a)("p",null,"ソースファイルを指定"),Object(m.a)("pre",null,Object(m.a)("code",o()({parentName:"pre"},{}),"mockgen -source={filepath} [options]\n")),Object(m.a)("p",null,Object(m.a)("inlineCode",{parentName:"p"},"-destination")," を指定しないと標準出力に出力される"),Object(m.a)("h3",null,"reflect mode"),Object(m.a)("p",null,"Import pathと対象のシンボルを指定"),Object(m.a)("pre",null,Object(m.a)("code",o()({parentName:"pre"},{}),"mockgen {import path} {symbol[,...]}\n")),Object(m.a)("ul",null,Object(m.a)("li",{parentName:"ul"},"複数のシンボルを指定する際はカンマ区切り指定"),Object(m.a)("li",{parentName:"ul"},Object(m.a)("inlineCode",{parentName:"li"},"reflect mode")," は reflection によって interface を理解するプログラムをビルドして mock を生成するらしいが、イマイチ違いは理解できてない(単純なケースなら ",Object(m.a)("inlineCode",{parentName:"li"},"source mode")," で十分とある)")),Object(m.a)("h2",null,"Test"),Object(m.a)("p",null,"READMEには Mocks と Stubs の2通りの使い方がある\nとはいえ、使い方はほぼ同じなのでここではMockの方だけメモを残しておく"),Object(m.a)("p",null,"テストの中で登場する ",Object(m.a)("inlineCode",{parentName:"p"},"Controller")," は、 ",Object(m.a)("inlineCode",{parentName:"p"},"Mock")," で起きたことを監視する役割を持つと思っておけば良い"),Object(m.a)("pre",null,Object(m.a)("code",o()({parentName:"pre"},{className:"hljs language-golang"}),Object(m.a)("span",o()({parentName:"code"},{className:"hljs-keyword"}),"type")," Foo ",Object(m.a)("span",o()({parentName:"code"},{className:"hljs-keyword"}),"interface")," {\n  Bar(x ",Object(m.a)("span",o()({parentName:"code"},{className:"hljs-keyword"}),"int"),") ",Object(m.a)("span",o()({parentName:"code"},{className:"hljs-keyword"}),"int"),"\n}\n\n",Object(m.a)("span",o()({parentName:"code"},{className:"hljs-function"}),Object(m.a)("span",o()({parentName:"span"},{className:"hljs-keyword"}),"func")," ",Object(m.a)("span",o()({parentName:"span"},{className:"hljs-title"}),"SUT"),Object(m.a)("span",o()({parentName:"span"},{className:"hljs-params"}),"(f Foo)"))," {\n ",Object(m.a)("span",o()({parentName:"code"},{className:"hljs-comment"}),"// ..."),"\n}\n\n",Object(m.a)("span",o()({parentName:"code"},{className:"hljs-function"}),Object(m.a)("span",o()({parentName:"span"},{className:"hljs-keyword"}),"func")," ",Object(m.a)("span",o()({parentName:"span"},{className:"hljs-title"}),"TestFoo"),Object(m.a)("span",o()({parentName:"span"},{className:"hljs-params"}),"(t *testing.T)"))," {\n  ctrl := gomock.NewController(t)\n\n  ",Object(m.a)("span",o()({parentName:"code"},{className:"hljs-comment"}),"// Assert that Bar() is invoked."),"\n  ",Object(m.a)("span",o()({parentName:"code"},{className:"hljs-keyword"}),"defer")," ctrl.Finish()\n\n  m := NewMockFoo(ctrl)\n\n  ",Object(m.a)("span",o()({parentName:"code"},{className:"hljs-comment"}),"// Asserts that the first and only call to Bar() is passed 99."),"\n  ",Object(m.a)("span",o()({parentName:"code"},{className:"hljs-comment"}),"// Anything else will fail."),"\n  m.\n    EXPECT().\n    Bar(gomock.Eq(",Object(m.a)("span",o()({parentName:"code"},{className:"hljs-number"}),"99"),")).\n    Return(",Object(m.a)("span",o()({parentName:"code"},{className:"hljs-number"}),"101"),")\n\n  SUT(m)\n}")),Object(m.a)("p",null,"上からざっくり解説"),Object(m.a)("ol",null,Object(m.a)("li",{parentName:"ol"},"mockに渡すための Controller を生成する"),Object(m.a)("li",{parentName:"ol"},"最後に Controller の ",Object(m.a)("inlineCode",{parentName:"li"},"Finish()")," を呼ぶことで、Mock に期待したメソッド呼び出しのチェックをする(ここではBar)"),Object(m.a)("li",{parentName:"ol"},"Mockに対して ",Object(m.a)("inlineCode",{parentName:"li"},"EXPECT()")," の後に、呼ばれることが期待される関数と引数を指定する"),Object(m.a)("li",{parentName:"ol"},"Mockに返して欲しい返り値を指定する")),Object(m.a)("h4",null,"その他メモ"),Object(m.a)("ul",null,Object(m.a)("li",{parentName:"ul"},Object(m.a)("p",{parentName:"li"},"Mockが用意した ",Object(m.a)("inlineCode",{parentName:"p"},"EXPECT()")," メソッドが全て大文字なのは、 interface に定義されるかもしれない ",Object(m.a)("inlineCode",{parentName:"p"},"Expect()")," などとの名前衝突を避けるため")),Object(m.a)("li",{parentName:"ul"},Object(m.a)("p",{parentName:"li"},"上記の例ではMockに対して ",Object(m.a)("inlineCode",{parentName:"p"},"Bar")," が引数1つ(",Object(m.a)("inlineCode",{parentName:"p"},"99"),")で呼び出されることを期待している")),Object(m.a)("li",{parentName:"ul"},Object(m.a)("p",{parentName:"li"},"引数のMatcherはいくつか種類があるが、例えば ",Object(m.a)("inlineCode",{parentName:"p"},"Bar(99)")," とそのまま値を渡してもgomock 側でよしなに ",Object(m.a)("inlineCode",{parentName:"p"},"Bar(gomock.Eq(99)")," と解釈してくれる")),Object(m.a)("li",{parentName:"ul"},Object(m.a)("p",{parentName:"li"},"Matcher は自作できる"))),Object(m.a)("h4",null,"順序について"),Object(m.a)("p",null,Object(m.a)("inlineCode",{parentName:"p"},"EXPECT()")," を複数書いた場合、何もしなければ呼び出し順序までは期待できない。\n順序を指定したい場合は ",Object(m.a)("inlineCode",{parentName:"p"},"After")," か ",Object(m.a)("inlineCode",{parentName:"p"},"InOrder")," を使う"),Object(m.a)("pre",null,Object(m.a)("code",o()({parentName:"pre"},{}),"# Bar1 -> Bar2の順に呼び出されることを期待する\ngomock.InOrder(\n  m.EXPECT().Bar1(99),\n  m.EXPECT().Bar2(100),\n)\n")),Object(m.a)("h2",null,"Reference"),Object(m.a)("p",null,Object(m.a)("a",o()({parentName:"p"},{href:"https://blog.codecentric.de/en/2017/08/gomock-tutorial/"}),"https://blog.codecentric.de/en/2017/08/gomock-tutorial/")))}b.isMDXComponent=!0;var i=n(194);a.default=function(){return l.a.createElement(i.a,null,l.a.createElement(b,null))}}}]);