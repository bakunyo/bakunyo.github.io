(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{77:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(22),b=t.n(c),p=t(62),l=t.n(p),j=t(198),O={},o="wrapper";function m(e){var a=e.components,t=l()(e,["components"]);return Object(j.a)(o,b()({},O,t,{components:a,mdxType:"MDXLayout"}),Object(j.a)("span",{itemScope:"",itemType:"http://schema.org/Photograph"},'![f:id:bakunyo:20130620214241j:plain](http://cdn-ak.f.st-hatena.com/images/fotolife/b/bakunyo/20130620/20130620214241.jpg "f:id:bakunyo:20130620214241j:plain")'),Object(j.a)("p",null,Object(j.a)("a",b()({parentName:"p"},{href:"http://d.hatena.ne.jp/keyword/Linux"}),"Linux"),"で定期的にコマンドを実行してくれる",Object(j.a)("span",{style:{color:"#ff0000"}},Object(j.a)("strong",{parentName:"p"},"crontab")),"の使い方をまとめてみました。  "),Object(j.a)("h2",null,"まずはcrondが起動しているか確認"),Object(j.a)("p",null,"デフォルトでは自動起動のはずですが、念の為crondが起動しているかを確認しておきましょう。",Object(j.a)("br",{parentName:"p"}),"\n","ここで起動していなければ、その後の設定をいくらしても動いてくれることはありません:D"),Object(j.a)("pre",null,Object(j.a)("code",b()({parentName:"pre"},{}),"# /etc/rc.d/init.d/crond status\ncrond (pid  xxxx) を実行中...     // ちゃんと起動していますね！\n")),Object(j.a)("h2",null,"crontabファイルの設定"),Object(j.a)("p",null,"crondが起動していることを確認できたら、crontabファイルの設定です。",Object(j.a)("br",{parentName:"p"}),"\n","crontabファイルには「",Object(j.a)("strong",{parentName:"p"},Object(j.a)("span",{style:{color:"#ff0000"}},"この日付のこの時刻にこのコマンドを実行せよ")),"」という命令が書き込まれています。",Object(j.a)("br",{parentName:"p"}),"\n","crontabファイルは",Object(j.a)("inlineCode",{parentName:"p"},"/var/spool/cron/user"),"(ユーザー毎)に保存されていますが、",Object(j.a)("strong",{parentName:"p"},"基本的にcrontabファイルは直接編集せず、"),Object(j.a)("inlineCode",{parentName:"p"},"crontab"),"コマンドを使って編集するのが習わしです。",Object(j.a)("br",{parentName:"p"}),"\n","以下はcrontabコマンドの説明です。"),Object(j.a)("h4",null,"crontabコマンド"),Object(j.a)("pre",null,Object(j.a)("code",b()({parentName:"pre"},{}),"crontab [-u user] file\n　または\ncrontab [-u user] [-e | -l | -r | -i]\n")),Object(j.a)("h4",null,"各オプションの説明"),Object(j.a)("table",null,Object(j.a)("thead",{parentName:"table"},Object(j.a)("tr",{parentName:"thead"},Object(j.a)("th",b()({parentName:"tr"},{align:null}),"オプション"),Object(j.a)("th",b()({parentName:"tr"},{align:null}),"内容"))),Object(j.a)("tbody",{parentName:"table"},Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",b()({parentName:"tr"},{align:null}),"u"),Object(j.a)("td",b()({parentName:"tr"},{align:null}),"userに対象となるユーザーを指定")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",b()({parentName:"tr"},{align:null}),"e"),Object(j.a)("td",b()({parentName:"tr"},{align:null}),"エディタを起動し、crontabの内容を編集する")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",b()({parentName:"tr"},{align:null}),"l"),Object(j.a)("td",b()({parentName:"tr"},{align:null}),"現在登録されている内容を表示する")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",b()({parentName:"tr"},{align:null}),"r"),Object(j.a)("td",b()({parentName:"tr"},{align:null}),"現在登録されている内容を削除する")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",b()({parentName:"tr"},{align:null}),"i"),Object(j.a)("td",b()({parentName:"tr"},{align:null}),"(rと併用して)削除する前に確認プロンプトを表示")))),Object(j.a)("p",null,"オプションでeを指定しようとしたら間違えてrを押してしまい、設定が全て削除されてしまった悲しい事例が各所で報告されています。  "),Object(j.a)("hr",null),Object(j.a)("p",null,Object(j.a)("a",b()({parentName:"p"},{href:"http://blog.cles.jp/item/3303"}),"crontab -r とやってしまった時の対処法"),Object(j.a)("a",b()({parentName:"p"},{href:"http://b.hatena.ne.jp/entry/http://blog.cles.jp/item/3303"}),Object(j.a)("img",b()({parentName:"a"},{src:"http://b.hatena.ne.jp/entry/image/http://blog.cles.jp/item/3303",alt:null}))),Object(j.a)("br",{parentName:"p"}),"\n",Object(j.a)("a",b()({parentName:"p"},{href:"http://blog.kentarok.org/entry/20061030/1162206137"}),"crontab -r を安全にする - delirious thoughts"),Object(j.a)("a",b()({parentName:"p"},{href:"http://b.hatena.ne.jp/entry/http://blog.kentarok.org/entry/20061030/1162206137"}),Object(j.a)("img",b()({parentName:"a"},{src:"http://b.hatena.ne.jp/entry/image/http://blog.kentarok.org/entry/20061030/1162206137",alt:null})))),Object(j.a)("hr",null),Object(j.a)("p",null,"誤って削除してしまわないよう、eオプションは使わずに",Object(j.a)("strong",{parentName:"p"},"別ファイルにて管理した方が望ましい"),"ようです。",Object(j.a)("br",{parentName:"p"}),"\n","現在eオプションのみで管理しているなら、lオプションをリダイレクトして別ファイルに書き出しておきましょう。"),Object(j.a)("pre",null,Object(j.a)("code",b()({parentName:"pre"},{}),"# crontab -u user -l > ~/crontab.bk\n")),Object(j.a)("h2",null,"crontabファイルの書き方"),Object(j.a)("p",null,"それではメインの、crontabファイルの書き方についてです。",Object(j.a)("br",{parentName:"p"}),"\n","「",Object(j.a)("span",{style:{color:"#ff0000"}},Object(j.a)("strong",{parentName:"p"},"この日付のこの時刻にこのコマンドを実行せよ")),"」という命令を記述するために、以下の書式を用います。"),Object(j.a)("pre",null,Object(j.a)("code",b()({parentName:"pre"},{}),"分　時　日　月　曜日　＜コマンド＞\n")),Object(j.a)("p",null,"日付・時刻を表す5つのフィールドには、以下の値を設定できます。"),Object(j.a)("table",null,Object(j.a)("thead",{parentName:"table"},Object(j.a)("tr",{parentName:"thead"},Object(j.a)("th",b()({parentName:"tr"},{align:null}),"フィールド"),Object(j.a)("th",b()({parentName:"tr"},{align:null}),"取りうる値"))),Object(j.a)("tbody",{parentName:"table"},Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",b()({parentName:"tr"},{align:null}),"分"),Object(j.a)("td",b()({parentName:"tr"},{align:null}),"0~59")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",b()({parentName:"tr"},{align:null}),"時"),Object(j.a)("td",b()({parentName:"tr"},{align:null}),"0~23")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",b()({parentName:"tr"},{align:null}),"日"),Object(j.a)("td",b()({parentName:"tr"},{align:null}),"1~31")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",b()({parentName:"tr"},{align:null}),"月"),Object(j.a)("td",b()({parentName:"tr"},{align:null}),"1~12")),Object(j.a)("tr",{parentName:"tbody"},Object(j.a)("td",b()({parentName:"tr"},{align:null}),"曜日"),Object(j.a)("td",b()({parentName:"tr"},{align:null}),"0~7 (0と7が日曜日)")))),Object(j.a)("h4",null,"範囲指定"),Object(j.a)("p",null,"各フィールドは",Object(j.a)("span",{style:{color:"#ff0000"}},Object(j.a)("strong",{parentName:"p"},"-(ハイフン)")),"でつなげて範囲指定することができます。",Object(j.a)("br",{parentName:"p"}),"\n","以降、分フィールドを書き方の例として挙げていきます。"),Object(j.a)("pre",null,Object(j.a)("code",b()({parentName:"pre"},{}),"5-10    // 5分・6分・7分・8分・9分・10分に実行\n")),Object(j.a)("p",null,"このように、",Object(j.a)("inlineCode",{parentName:"p"},"5-10"),"と範囲指定することで5分~10分の間に毎分コマンドが実行されます。",Object(j.a)("br",{parentName:"p"}),"\n","全範囲（分フィールドだと0~59）を範囲指定したい場合には",Object(j.a)("span",{style:{color:"#ff0000"}},Object(j.a)("strong",{parentName:"p"},"*","(アスタリスク)")),"を使用します。"),Object(j.a)("pre",null,Object(j.a)("code",b()({parentName:"pre"},{}),"*   // 毎分実行\n")),Object(j.a)("h4",null,"リスト指定"),Object(j.a)("p",null,"不連続な複数の値を指定したい時は、",Object(j.a)("span",{style:{color:"#ff0000"}},Object(j.a)("strong",{parentName:"p"},",(カンマ)")),"で区切ってリスト指定することができます。"),Object(j.a)("pre",null,Object(j.a)("code",b()({parentName:"pre"},{}),"1,3,5   // 1分・3分・5分に実行\n")),Object(j.a)("p",null,"リスト指定の中に範囲指定を含めることも可能です。"),Object(j.a)("pre",null,Object(j.a)("code",b()({parentName:"pre"},{}),"1,3,5-10   // 1分・3分・5分・6分・7分・8分・9分・10分に実行\n")),Object(j.a)("h4",null,"間隔値指定"),Object(j.a)("p",null,"「◯分間隔」などとしたい場合は、範囲指定と併せて間隔値を指定することができます。",Object(j.a)("br",{parentName:"p"}),"\n","範囲指定の後に",Object(j.a)("span",{style:{color:"#ff0000"}},Object(j.a)("strong",{parentName:"p"},"/(スラッシュ)")),"をつづけ、その後に間隔値を指定します。"),Object(j.a)("pre",null,Object(j.a)("code",b()({parentName:"pre"},{}),"5-10/2   // 5分・7分・9分(5分~10分の間の2分間隔)に実行\n*/5   // 5分おきに実行\n")),Object(j.a)("h4",null,"設定例"),Object(j.a)("p",null,"これらの書き方を組み合わせて、「",Object(j.a)("span",{style:{color:"#ff0000"}},Object(j.a)("strong",{parentName:"p"},"この日付のこの時刻に")),"」の部分を指定します。",Object(j.a)("br",{parentName:"p"}),"\n","以下、設定例です。",Object(j.a)("br",{parentName:"p"}),"\n","ここでは仮に、usr/bin/cmdをコマンドとして実行するとします。"),Object(j.a)("pre",null,Object(j.a)("code",b()({parentName:"pre"},{}),"00 14 * * * /usr/bin/cmd      // 毎日14:00に実行\n* * * * * /usr/bin/cmd        // 毎分実行\n15,30 06 * * 2 /usr/bin/cmd   // 毎週火曜日の6:15と6:30に実行\n05 23 * 3-5 4 /usr/bin/cmd    // 3~5月の毎週木曜日23:05に実行\n")),Object(j.a)("p",null,"といった具合です。  "),Object(j.a)("h4",null,"ちょっと細かい話。"),Object(j.a)("p",null,"cronは毎分このcrontabファイルをチェックし、",Object(j.a)("strong",{parentName:"p"},Object(j.a)("span",{style:{color:"#ff0000"}},"分・時・月が現在時刻と一致し、かつ日と曜日フィールドの2つのいずれかが現在時刻と一致すれば")),"コマンドを実行します。",Object(j.a)("br",{parentName:"p"}),"\n","この部分が少しややこしいのですが、cronは日フィールドと曜日フィールドの2つと見比べてコマンド実行するかを判断します。なので、この２つに関しては少し見方を変えてあげます。",Object(j.a)("br",{parentName:"p"}),"\n","具体的には、日フィールドと曜日フィールドのそれぞれにおいて、",Object(j.a)("em",{parentName:"p"},"(アスタリスク)と"),"以外を指定した場合のどのような指定になるかを分けるとわかりやすいです。  "),Object(j.a)("pre",null,Object(j.a)("code",b()({parentName:"pre"},{}),"   | 日が*           | 日が*以外       \n")),Object(j.a)("p",null,"------ | ------------- | ------------\n曜日が",Object(j.a)("em",{parentName:"p"},"   | 毎日            | 日フィールドで指定した日\n曜日が"),"以外 | 曜日フィールドで指定した日 | いずれかに当てはまる日 "),Object(j.a)("p",null,"設定例を以下に挙げます。"),Object(j.a)("pre",null,Object(j.a)("code",b()({parentName:"pre"},{}),"00 14 * * * /usr/bin/cmd         // 毎日14:00に実行\n00 14 1,5 * * /usr/bin/cmd     // 毎月1日,5日の14:00に実行\n00 14 * * 4 /usr/bin/cmd        // 毎週木曜日14:00に実行\n00 14 1,5 * 4 /usr/bin/cmd    // 毎月1日,5日と毎週木曜日14:00に実行\n")),Object(j.a)("p",null,"といった感じになります。  "),Object(j.a)("p",null,"他にも書くべきこととして",Object(j.a)("strong",{parentName:"p"},Object(j.a)("a",b()({parentName:"strong"},{href:"http://d.hatena.ne.jp/keyword/%B4%C4%B6%AD%CA%D1%BF%F4"}),"環境変数"),"の指定"),"などがあるのですが、疲れたのでここまで。  "))}m.isMDXComponent=!0;var u=t(199);a.default=function(){return r.a.createElement(u.a,null,r.a.createElement(m,null))}}}]);