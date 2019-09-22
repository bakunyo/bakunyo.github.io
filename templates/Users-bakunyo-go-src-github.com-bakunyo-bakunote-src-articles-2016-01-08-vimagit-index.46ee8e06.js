(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{103:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(22),m=t.n(r),c=t(62),b=t.n(c),p=t(193),i={},j="wrapper";function s(e){var a=e.components,t=b()(e,["components"]);return Object(p.a)(j,m()({},i,t,{components:a,mdxType:"MDXLayout"}),Object(p.a)("p",null,"年末に知った",Object(p.a)("a",m()({parentName:"p"},{href:"https://github.com/jreybert/vimagit"}),"vimagit"),"ってvimのプラグインが使ってて気持ち良い。\nGitの差分をvimで開けて、行単位でStageしたりCommitできる。\n",Object(p.a)("inlineCode",{parentName:"p"},"git add -p"),"するvimmerには特におすすめ！"),Object(p.a)("p",null,"ちなみにEmacsプラグインの",Object(p.a)("a",m()({parentName:"p"},{href:"https://github.com/magit/magit"}),"magit"),"ってやつのコピー版らしい。\nインストール〜使い方、オススメ設定まで記載しておく。"),Object(p.a)("h1",null,"インストール"),Object(p.a)("pre",null,Object(p.a)("code",m()({parentName:"pre"},{className:"hljs language-vim"}),"NeoBundle ",Object(p.a)("span",m()({parentName:"code"},{className:"hljs-string"}),"'jreybert/vimagit'"))),Object(p.a)("h1",null,"使い方"),Object(p.a)("p",null,Object(p.a)("a",m()({parentName:"p"},{href:"https://github.com/jreybert/vimagit"}),"GitHubのリポジトリ"),"にリンクされてる",Object(p.a)("a",m()({parentName:"p"},{href:"https://asciinema.org/a/28761"}),"ビデオ"),"とかを見るとざっくりイメージできると思う。"),Object(p.a)("h3",null,"開き方"),Object(p.a)("p",null,Object(p.a)("inlineCode",{parentName:"p"},":Magit")," または ",Object(p.a)("inlineCode",{parentName:"p"},"<Leader>M"),"でbufferを開く。"),Object(p.a)("h3",null,"セクション"),Object(p.a)("p",null,"bufferは以下の5つのセクションに分かれている。\n後で記載するけど表示順などをオプションで指定できる。"),Object(p.a)("ul",null,Object(p.a)("li",{parentName:"ul"},Object(p.a)("strong",{parentName:"li"},"info"),": current branchやHEAD commitのメッセージなどが表示されている"),Object(p.a)("li",{parentName:"ul"},Object(p.a)("strong",{parentName:"li"},"Commit message"),": コミットする時に現れて、メッセージを入力する"),Object(p.a)("li",{parentName:"ul"},Object(p.a)("strong",{parentName:"li"},"Staged changes"),": そのままだけどStagingされた変更部分"),Object(p.a)("li",{parentName:"ul"},Object(p.a)("strong",{parentName:"li"},"Unstaged changes"),": まだStagingされてない変更部分。Untracked filesもここに表示される"),Object(p.a)("li",{parentName:"ul"},Object(p.a)("strong",{parentName:"li"},"Stash list"),": Stashのリスト")),Object(p.a)("h3",null,"コマンド"),Object(p.a)("p",null,Object(p.a)("a",m()({parentName:"p"},{href:"https://github.com/jreybert/vimagit/blob/master/README.md"}),"README"),"みれば丁寧に書いてあるけど、自分が普段使うものを記載しておく。"),Object(p.a)("table",null,Object(p.a)("thead",{parentName:"table"},Object(p.a)("tr",{parentName:"thead"},Object(p.a)("th",m()({parentName:"tr"},{align:"left"}),"command"),Object(p.a)("th",m()({parentName:"tr"},{align:"left"}),"description"))),Object(p.a)("tbody",{parentName:"table"},Object(p.a)("tr",{parentName:"tbody"},Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),":Magit または \\<Leader",">","M"),Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"magit bufferを開く。すべてはここから")),Object(p.a)("tr",{parentName:"tbody"},Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"S"),Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"Stage <-> Unstage の切り替え。ファイル名の上ならファイルごとStageされるし、vで行選択すればその行だけStageされる")),Object(p.a)("tr",{parentName:"tbody"},Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"DDD"),Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"Unstagedセクションでだけ使える。変更を破棄する")),Object(p.a)("tr",{parentName:"tbody"},Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"CC"),Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"Commitセクション以外にいるならCommitセクションを開く。CommitセクションにいるならCommitする(説明むずい)")),Object(p.a)("tr",{parentName:"tbody"},Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"CA"),Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"CCのcommit --amendバージョン。直前のcommitに含めるならこれ。")),Object(p.a)("tr",{parentName:"tbody"},Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"CF"),Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"commit --amendで、コミットメッセージを変更しない場合はこのコマンド一発で完了")),Object(p.a)("tr",{parentName:"tbody"},Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"R"),Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"bufferをrefreshする")),Object(p.a)("tr",{parentName:"tbody"},Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"q"),Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"bufferを閉じる")),Object(p.a)("tr",{parentName:"tbody"},Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"h"),Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"help表示のON/OFF")))),Object(p.a)("p",null,"他にもIやLとか色々あるけど、自分はほぼ使ってない。"),Object(p.a)("h3",null,"オプション"),Object(p.a)("p",null,"vimrcで指定できるオプション。"),Object(p.a)("table",null,Object(p.a)("thead",{parentName:"table"},Object(p.a)("tr",{parentName:"thead"},Object(p.a)("th",m()({parentName:"tr"},{align:"left"}),"option"),Object(p.a)("th",m()({parentName:"tr"},{align:"left"}),"description"),Object(p.a)("th",m()({parentName:"tr"},{align:"left"}),"default"))),Object(p.a)("tbody",{parentName:"table"},Object(p.a)("tr",{parentName:"tbody"},Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"g:magit_enabled"),Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"vimagitの有効","[1]","・無効","[0]"),Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"1")),Object(p.a)("tr",{parentName:"tbody"},Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"g:magit_show_help"),Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"ヘルプの表示","[1]","・非表示","[0]"),Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"1")),Object(p.a)("tr",{parentName:"tbody"},Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"g:magit_default_show_all_files"),Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"bufferを開いた時にdiffを閉じておく","[0]","・modified filesのdiffだけ表示","[1]","・全ファイルのdiffを表示","[2]"),Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"1")),Object(p.a)("tr",{parentName:"tbody"},Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"g:magit_default_fold_level"),Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"上記のdiff表示の詳細設定。ファイル名だけ表示する","[0]","・ファイル名とhunkの一覧だけ表示","[1]","・hunkの中身のdiffも表示","[2]"),Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"1")),Object(p.a)("tr",{parentName:"tbody"},Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"g:magit_default_sections"),Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"各セクションの表示/非表示と順番"),Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"['info', 'global_help', 'commit', 'staged', 'unstaged']")),Object(p.a)("tr",{parentName:"tbody"},Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"g:magit_warning_max_lines"),Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"bufferを開く際にwarningを出すdiffの行数。実際に開くかはyes/noで回答"),Object(p.a)("td",m()({parentName:"tr"},{align:"left"}),"10000")))),Object(p.a)("h1",null,"オススメ設定"),Object(p.a)("p",null,"自分がやってる設定と理由を簡単に。"),Object(p.a)("pre",null,Object(p.a)("code",m()({parentName:"pre"},{className:"hljs language-vim"}),Object(p.a)("span",m()({parentName:"code"},{className:"hljs-keyword"}),"let")," ",Object(p.a)("span",m()({parentName:"code"},{className:"hljs-variable"}),"g:magit_show_help")," = ",Object(p.a)("span",m()({parentName:"code"},{className:"hljs-number"}),"0"),"  ",Object(p.a)("span",m()({parentName:"code"},{className:"hljs-comment"}),'" 少し慣れたらいらなくなる'),"\n",Object(p.a)("span",m()({parentName:"code"},{className:"hljs-keyword"}),"let")," ",Object(p.a)("span",m()({parentName:"code"},{className:"hljs-variable"}),"g:magit_default_show_all_files")," = ",Object(p.a)("span",m()({parentName:"code"},{className:"hljs-number"}),"2"),"  ",Object(p.a)("span",m()({parentName:"code"},{className:"hljs-comment"}),'" わざわざ開くのは面倒なので'),"\n",Object(p.a)("span",m()({parentName:"code"},{className:"hljs-keyword"}),"let")," ",Object(p.a)("span",m()({parentName:"code"},{className:"hljs-variable"}),"g:magit_default_fold_level")," = ",Object(p.a)("span",m()({parentName:"code"},{className:"hljs-number"}),"2"),"  ",Object(p.a)("span",m()({parentName:"code"},{className:"hljs-comment"}),'" 同上'),"\n",Object(p.a)("span",m()({parentName:"code"},{className:"hljs-keyword"}),"let")," ",Object(p.a)("span",m()({parentName:"code"},{className:"hljs-variable"}),"g:magit_default_sections")," = [",Object(p.a)("span",m()({parentName:"code"},{className:"hljs-string"}),"'global_help'"),", ",Object(p.a)("span",m()({parentName:"code"},{className:"hljs-string"}),"'info'"),", ",Object(p.a)("span",m()({parentName:"code"},{className:"hljs-string"}),"'unstaged'"),", ",Object(p.a)("span",m()({parentName:"code"},{className:"hljs-string"}),"'staged'"),", ",Object(p.a)("span",m()({parentName:"code"},{className:"hljs-string"}),"'commit'"),"]  ",Object(p.a)("span",m()({parentName:"code"},{className:"hljs-comment"}),'" helpはデフォルト非表示。次にcurrent情報。それ以下は上から順に処理していくイメージ'))),Object(p.a)("p",null,"最初のcommitが2015年9月。 READMEにもあるようにまだまだ機能追加されそう。"),Object(p.a)("p",null,"VimでGitといえば",Object(p.a)("a",m()({parentName:"p"},{href:"https://github.com/tpope/vim-fugitive"}),"fugitive"),"だと思うけど、それには無いものをいっぱい持ってるし、併用もアリだと思う！"))}s.isMDXComponent=!0;var O=t(194);a.default=function(){return l.a.createElement(O.a,null,l.a.createElement(s,null))}}}]);