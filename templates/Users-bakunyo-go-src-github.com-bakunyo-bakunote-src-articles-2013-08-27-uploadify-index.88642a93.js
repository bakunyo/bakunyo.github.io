(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{115:function(e,a,t){"use strict";t.r(a);var p=t(0),n=t.n(p),r=t(22),l=t.n(r),o=t(62),c=t.n(o),u=t(193),m={},b="wrapper";function h(e){var a=e.components,t=c()(e,["components"]);return Object(u.a)(b,l()({},m,t,{components:a,mdxType:"MDXLayout"}),Object(u.a)("h2",null,"複数ファイルのアップロードに特化した「Uploadify」"),Object(u.a)("p",null,Object(u.a)("a",l()({parentName:"p"},{href:"http://d.hatena.ne.jp/keyword/jQuery"}),"jQuery"),"のプラグインで、複数のファイルを選択しアップロードできる",Object(u.a)("a",l()({parentName:"p"},{href:"http://www.uploadify.com/"}),"uploadify"),"というのを使ってみました。"),Object(u.a)("p",null,Object(u.a)("a",l()({parentName:"p"},{href:"http://www.uploadify.com/"}),Object(u.a)("img",l()({parentName:"a"},{src:"http://capture.heartrails.com/150x130/shadow?http://www.uploadify.com/",alt:null}))),Object(u.a)("a",l()({parentName:"p"},{href:"http://www.uploadify.com/"}),"HTML5 File Upload Script, jQuery Multiple File Upload Plugin - Uploadify / UploadiFive - Uploadify"),Object(u.a)("a",l()({parentName:"p"},{href:"http://b.hatena.ne.jp/entry/http://www.uploadify.com/"}),Object(u.a)("img",l()({parentName:"a"},{src:"http://b.hatena.ne.jp/entry/image/http://www.uploadify.com/",alt:null}))),"  "),Object(u.a)("p",null,Object(u.a)("a",l()({parentName:"p"},{href:"http://www.uploadify.com/demos/"}),"デモはこちら")),Object(u.a)("h2",null,"使い方"),Object(u.a)("p",null,"以下の記事が大変参考になりました。"),Object(u.a)("p",null,Object(u.a)("a",l()({parentName:"p"},{href:"http://www.tinybeans.net/blog/2010/04/13-121311.html"}),"Ajax風にファイルをアップロードするjQueryプラグイン「Uploadify」の使い方 | かたつむりくんのWWW"),Object(u.a)("a",l()({parentName:"p"},{href:"http://b.hatena.ne.jp/entry/http://www.tinybeans.net/blog/2010/04/13-121311.html"}),Object(u.a)("img",l()({parentName:"a"},{src:"http://b.hatena.ne.jp/entry/image/http://www.tinybeans.net/blog/2010/04/13-121311.html",alt:null})))),Object(u.a)("p",null,Object(u.a)("a",l()({parentName:"p"},{href:"http://wataame.sumomo.ne.jp/archives/3370"}),"ファイルをまとめてアップロードする jQuery のプラグイン「Uploadify」の使い方。 | Wataame Frog"),Object(u.a)("a",l()({parentName:"p"},{href:"http://b.hatena.ne.jp/entry/http://wataame.sumomo.ne.jp/archives/3370"}),Object(u.a)("img",l()({parentName:"a"},{src:"http://b.hatena.ne.jp/entry/image/http://wataame.sumomo.ne.jp/archives/3370",alt:null})))),Object(u.a)("h2",null,"ファイル拡張子の限定"),Object(u.a)("p",null,Object(u.a)("strong",{parentName:"p"},"fileTypeExts"),"というオプションで選択できるファイルの拡張子を限定できます。",Object(u.a)("br",{parentName:"p"}),"\n",Object(u.a)("a",l()({parentName:"p"},{href:"http://www.uploadify.com/documentation/uploadify/filetypeexts/"}),"fileTypeExts - Uploadify Documentation")),Object(u.a)("p",null,Object(u.a)("a",l()({parentName:"p"},{href:"http://www.uploadify.com/documentation/uploadify/filetypeexts/"}),"デモはこちら")),Object(u.a)("h2",null,"指定外の拡張子が選ばれた場合の対応"),Object(u.a)("p",null,"ファイル選択のダイアログで「ファイルの種類」→「すべてのファイル」としてしまうと、他の拡張子も選択できてしまいます(キューには追加されない)。",Object(u.a)("br",{parentName:"p"}),"\n","選択後には、警告ダイアログが表示されます。",Object(u.a)("br",{parentName:"p"}),"\n","メッセージの内容は"),Object(u.a)("pre",null,Object(u.a)("code",l()({parentName:"pre"},{}),"Some files were not added to the queue:\n")),Object(u.a)("span",{itemScope:"",itemType:"http://schema.org/Photograph"},'![f:id:bakunyo:20130827203147p:plain](http://cdn-ak.f.st-hatena.com/images/fotolife/b/bakunyo/20130827/20130827203147.png "f:id:bakunyo:20130827203147p:plain")'),Object(u.a)("p",null,"英語…ちょっと不親切なので、日本語に変えたいですね。",Object(u.a)("br",{parentName:"p"}),"\n","このメッセージを変えるオプションがあっても良さそうなものですが、ありませんでした。",Object(u.a)("br",{parentName:"p"}),"\n","そこで、",Object(u.a)("span",{style:{color:"#ff0000"}},Object(u.a)("strong",{parentName:"p"},Object(u.a)("a",l()({parentName:"strong"},{href:"http://d.hatena.ne.jp/keyword/jquery"}),"jquery"),".uploadify.js")),"を編集します。",Object(u.a)("br",{parentName:"p"}),"\n","282行目と572行目にメッセージがありました。"),Object(u.a)("pre",null,Object(u.a)("code",l()({parentName:"pre"},{}),"...\n  uploadQueue        : [], // The files currently to be uploaded\n  errorMsg           : 'Some files were not added to the queue:'\n};\n...\n")),Object(u.a)("pre",null,Object(u.a)("code",l()({parentName:"pre"},{}),"...\n  // Reset some queue info\n  this.queueData.errorMsg       = 'Some files were not added to the queue:';\n  this.queueData.filesReplaced  = 0;\n...\n")),Object(u.a)("p",null,"上記2つを変更したら、メッセージを変えることができました！"))}h.isMDXComponent=!0;var i=t(194);a.default=function(){return n.a.createElement(i.a,null,n.a.createElement(h,null))}}}]);