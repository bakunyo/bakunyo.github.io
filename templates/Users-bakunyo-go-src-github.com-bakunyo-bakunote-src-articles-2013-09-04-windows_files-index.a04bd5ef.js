(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{82:function(e,t,n){"use strict";n.r(t);var a=n(0),p=n.n(a),r=n(22),l=n.n(r),o=n(62),b=n.n(o),c=n(196),i={},s="wrapper";function j(e){var t=e.components,n=b()(e,["components"]);return Object(c.a)(s,l()({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h2",null,"Windowsでファイル名の一覧を取得するコマンド"),Object(c.a)("p",null,Object(c.a)("a",l()({parentName:"p"},{href:"http://d.hatena.ne.jp/keyword/UNIX"}),"UNIX"),"/",Object(c.a)("a",l()({parentName:"p"},{href:"http://d.hatena.ne.jp/keyword/Linux"}),"Linux"),"系のOSだと",Object(c.a)("inlineCode",{parentName:"p"},"ls"),"コマンドで出力できてしまうが、Windowsの",Object(c.a)("a",l()({parentName:"p"},{href:"http://d.hatena.ne.jp/keyword/%A5%B3%A5%DE%A5%F3%A5%C9%A5%D7%A5%ED%A5%F3%A5%D7%A5%C8"}),"コマンドプロンプト"),"でlsを実行すると日本語が文字化けすることが多く、困っていました。。",Object(c.a)("br",{parentName:"p"}),"\n","で、Windowsコマンドはあまり使っていなかったのですが、調べてみると",Object(c.a)("inlineCode",{parentName:"p"},"dir"),"が使えることが分かりました。",Object(c.a)("br",{parentName:"p"}),"\n","オプションは以下を使用。"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",l()({parentName:"tr"},{align:null}),"option"),Object(c.a)("th",l()({parentName:"tr"},{align:null}),"内容"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",l()({parentName:"tr"},{align:null}),"/s"),Object(c.a)("td",l()({parentName:"tr"},{align:null}),"サブディレクトリを含める")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",l()({parentName:"tr"},{align:null}),"/B"),Object(c.a)("td",l()({parentName:"tr"},{align:null}),"ファイル名のみ表示")))),Object(c.a)("p",null,"こんな感じで、出来ました〜"),Object(c.a)("pre",null,Object(c.a)("code",l()({parentName:"pre"},{}),"\\Desktop\\inbox>dir /B /s\n\\Desktop\\inbox\\file.xlsx\n\\Desktop\\inbox\\myfile.xls\n\\Desktop\\inbox\\shortcut\n\\Desktop\\inbox\\shortcut\\bill.lnk\n\\Desktop\\inbox\\shortcut\\ipmsg.lnk\n\\Desktop\\inbox\\shortcut\\[sublime](http://d.hatena.ne.jp/keyword/sublime).lnk\n")),Object(c.a)("h2",null,"参考"),Object(c.a)("p",null,Object(c.a)("a",l()({parentName:"p"},{href:"http://itpro.nikkeibp.co.jp/article/Windows/20051025/223349/"}),"Dir - ITPro Windowsコマンド集")))}j.isMDXComponent=!0;var u=n(197);t.default=function(){return p.a.createElement(u.a,null,p.a.createElement(j,null))}}}]);