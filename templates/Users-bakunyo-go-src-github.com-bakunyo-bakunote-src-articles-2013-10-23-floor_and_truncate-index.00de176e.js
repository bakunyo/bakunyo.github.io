(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{113:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(22),o=t.n(c),p=t(62),u=t.n(p),m=t(193),l={},b="wrapper";function i(e){var n=e.components,t=u()(e,["components"]);return Object(m.a)(b,o()({},l,t,{components:n,mdxType:"MDXLayout"}),Object(m.a)("h2",null,"Numeric#floorとNumeric#truncateの違い"),Object(m.a)("p",null,Object(m.a)("strong",{parentName:"p"},"floor"),"は自身以下で最大の整数を返し、",Object(m.a)("strong",{parentName:"p"},"truncate"),"は自身から0に近づくうち、最も近い整数を返します。",Object(m.a)("br",{parentName:"p"}),"\n","正の値では結果は同じですが、負の値で結果が異なります。"),Object(m.a)("pre",null,Object(m.a)("code",o()({parentName:"pre"},{}),"C:\\>irb\nirb(main):001:0> 1.2.floor\n=> 1\nirb(main):002:0> 1.2.truncate\n=> 1\nirb(main):003:0> -1.2.floor\n=> -2\nirb(main):004:0> -1.2.truncate\n=> -1\n")),Object(m.a)("h2",null,"公式リファレンス"),Object(m.a)("p",null,Object(m.a)("a",o()({parentName:"p"},{href:"http://doc.ruby-lang.org/ja/1.9.3/method/Numeric/i/truncate.html"}),"Numeric#truncate"),Object(m.a)("br",{parentName:"p"}),"\n",Object(m.a)("a",o()({parentName:"p"},{href:"http://doc.ruby-lang.org/ja/1.9.3/method/Numeric/i/floor.html"}),"Numeric#floor")))}i.isMDXComponent=!0;var j=t(194);n.default=function(){return r.a.createElement(j.a,null,r.a.createElement(i,null))}}}]);