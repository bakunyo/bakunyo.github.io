(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{94:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),p=a.n(c),l=a(62),o=a.n(l),s=a(199),i={},b="wrapper";function m(e){var t=e.components,a=o()(e,["components"]);return Object(s.a)(b,p()({},i,a,{components:t,mdxType:"MDXLayout"}),Object(s.a)("p",null,"このサイトを生成している静的サイトジェネレータを、",Object(s.a)("a",p()({parentName:"p"},{href:"https://middlemanapp.com/jp/"}),"middleman")," から ",Object(s.a)("a",p()({parentName:"p"},{href:"https://github.com/nozzle/react-static"}),"react-static")," へ移行しました :tada:",Object(s.a)("br",{parentName:"p"}),"\n","ただ、react-staticは静的サイトジェネレータであってもブログジェネレータではないので、欲しい機能やコマンドは自分で追加していくことになりました :sweat_smile: 。"),Object(s.a)("h2",null,"移行に際してやったこと"),Object(s.a)("h3",null,"テンプレートの生成"),Object(s.a)("p",null,"react-staticにいくつかテンプレートが用意されています。今回は、 ",Object(s.a)("inlineCode",{parentName:"p"},"Styled-Components")," を利用しました。"),Object(s.a)("pre",null,Object(s.a)("code",p()({parentName:"pre"},{className:"hljs language-bash"}),"$ yarn run react-static create\nyarn run v1.3.2\n\n? What should we name this project? my-static-site\n? Select a template below...\n  preact\n  redux\n  sass\n❯ styled-components\n  tailwindcss\n  typescript\n  basic")),Object(s.a)("p",null,"ルーティングやブログの設定は ",Object(s.a)("inlineCode",{parentName:"p"},"static.config.js")," に、 React Components は ",Object(s.a)("inlineCode",{parentName:"p"},"src/")," に生成されるのでよしなに編集します。\n記事の一覧や個別記事はComponentにpropsとして渡せるよう、以下で json として出力するようにします。"),Object(s.a)("h3",null,"記事の\b管理"),Object(s.a)("p",null,"記事は front-matter + markdown で書いていました。\n今まではmiddlemanが読み込んでくれていたのですが、今回は自分で管理することになります。  "),Object(s.a)("p",null,"front-matter は ",Object(s.a)("a",p()({parentName:"p"},{href:"https://github.com/jonschlinkert/gray-matter"}),"gray-matter")," 、 markdown は ",Object(s.a)("a",p()({parentName:"p"},{href:"https://github.com/markdown-it/markdown-it"}),"markdown-it")," でparseするようにしました。",Object(s.a)("br",{parentName:"p"}),"\n","記事の一覧と個別記事をそれぞれ別のjsonファイルとして出力しておきます。",Object(s.a)("br",{parentName:"p"}),"\n","あとは ",Object(s.a)("inlineCode",{parentName:"p"},"static.config.js")," で\b個々の Component に props として渡すようにすれば完了です。"),Object(s.a)("h2",null,"Before / After"),Object(s.a)("p",null,"ロードしているサイズが大幅に減ったのが大きいですが、表示速度が速くなりました。\n元々が Foundation5 + jQuery なのに対して、今回はCSSフレームワークを使ってないというのもあります。"),Object(s.a)("h4",null,"記事一覧"),Object(s.a)("p",null,"Before\n",Object(s.a)("img",p()({parentName:"p"},{src:"/2018/01/22-react-static/index-before.png",alt:"index-before"}))),Object(s.a)("p",null,"After\n",Object(s.a)("img",p()({parentName:"p"},{src:"/2018/01/22-react-static/index-after.png",alt:"index-after"}))),Object(s.a)("h4",null,"個別記事"),Object(s.a)("p",null,"Before\n",Object(s.a)("img",p()({parentName:"p"},{src:"/2018/01/22-react-static/post-before.png",alt:"post-before"}))),Object(s.a)("p",null,"After\n",Object(s.a)("img",p()({parentName:"p"},{src:"/2018/01/22-react-static/post-after.png",alt:"post-after"}))),Object(s.a)("p",null,"ページ遷移する際に必要なpropsはjsonとして\b出力してくれているので、react-staticが提供\bしている ",Object(s.a)("inlineCode",{parentName:"p"},"Link")," を使えば差分だけ更新されます。"),Object(s.a)("h2",null,"感想"),Object(s.a)("p",null,Object(s.a)("inlineCode",{parentName:"p"},"preact")," や ",Object(s.a)("inlineCode",{parentName:"p"},"Prefetch")," など、まだいじれるところはありそうなので時間を見つけて試そうと思います。"))}m.isMDXComponent=!0;var j=a(200);t.default=function(){return r.a.createElement(j.a,null,r.a.createElement(m,null))}}}]);