(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{84:function(e,a,s){"use strict";s.r(a);var n=s(0),c=s.n(n),t=s(22),l=s.n(t),m=s(62),p=s.n(m),r=s(196),o={},j="wrapper";function d(e){var a=e.components,s=p()(e,["components"]);return Object(r.a)(j,l()({},o,s,{components:a,mdxType:"MDXLayout"}),Object(r.a)("p",null,"メソッドとブロックの戻り値についてのメモ。  "),Object(r.a)("p",null,"yieldの前に変数を置いて、ブロックの戻り値を受け取ることができます。",Object(r.a)("br",{parentName:"p"}),"\n","ブロックの戻り値は、最後に評価された値です。"),Object(r.a)("pre",null,Object(r.a)("code",l()({parentName:"pre"},{className:"hljs language-ruby"}),Object(r.a)("span",l()({parentName:"code"},{className:"hljs-function"}),Object(r.a)("span",l()({parentName:"span"},{className:"hljs-keyword"}),"def")," ",Object(r.a)("span",l()({parentName:"span"},{className:"hljs-title"}),"my_method")),"\n  a = ",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-keyword"}),"yield"),"\n  puts a + ",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-string"}),'" received"'),"\n",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-keyword"}),"end"),"\n\nmy_method ",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-keyword"}),"do"),"\n  ",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-string"}),'"block message"'),"\n",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-keyword"}),"end"),"        ",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-comment"}),'# "block message received"と表示される'))),Object(r.a)("p",null,"ブロック内でbreakを使うと、引数に指定した値がメソッドの戻り値となります。"),Object(r.a)("pre",null,Object(r.a)("code",l()({parentName:"pre"},{className:"hljs language-ruby"}),Object(r.a)("span",l()({parentName:"code"},{className:"hljs-function"}),Object(r.a)("span",l()({parentName:"span"},{className:"hljs-keyword"}),"def")," ",Object(r.a)("span",l()({parentName:"span"},{className:"hljs-title"}),"my_method")),"\n  a = ",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-keyword"}),"yield"),"\n  puts a + ",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-string"}),'" received"'),"\n",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-keyword"}),"end"),"\n\nmy_method ",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-keyword"}),"do"),"\n  ",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-keyword"}),"break")," ",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-string"}),'"block message"'),"\n",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-keyword"}),"end"),"        ",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-comment"}),'# => "block message"'))),Object(r.a)("p",null,"メソッド内でreturnを使い、戻り値を指定することができます。"),Object(r.a)("pre",null,Object(r.a)("code",l()({parentName:"pre"},{className:"hljs language-ruby"}),Object(r.a)("span",l()({parentName:"code"},{className:"hljs-function"}),Object(r.a)("span",l()({parentName:"span"},{className:"hljs-keyword"}),"def")," ",Object(r.a)("span",l()({parentName:"span"},{className:"hljs-title"}),"my_method")),"\n  a = ",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-keyword"}),"yield"),"\n  ",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-keyword"}),"if")," a == ",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-string"}),'"block message"'),"\n    ",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-keyword"}),"return")," ",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-string"}),'"same"'),"\n  ",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-keyword"}),"end"),"\n  puts a + ",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-string"}),'" received"'),"\n",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-keyword"}),"end"),"\n\nmy_method ",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-keyword"}),"do"),"\n  ",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-string"}),'"block message"'),"\n",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-keyword"}),"end"),"        ",Object(r.a)("span",l()({parentName:"code"},{className:"hljs-comment"}),'# => "same"'))))}d.isMDXComponent=!0;var N=s(197);a.default=function(){return c.a.createElement(N.a,null,c.a.createElement(d,null))}}}]);