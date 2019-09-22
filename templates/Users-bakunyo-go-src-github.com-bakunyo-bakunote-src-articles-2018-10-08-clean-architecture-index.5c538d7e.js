(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{118:function(e,a,l){"use strict";l.r(a);var t=l(0),n=l.n(t),c=l(22),b=l.n(c),i=l(62),r=l.n(i),u=l(193),O={},j="wrapper";function p(e){var a=e.components,l=r()(e,["components"]);return Object(u.a)(j,b()({},O,l,{components:a,mdxType:"MDXLayout"}),Object(u.a)("p",null,"8月に和訳版が発売されて、Twitterのタイムラインを見てるとなかなか評判が良さそうだったので読んでみた。思えばアーキテクチャについての本は読んだことがなかったので、とても参考になった。\n設計に関する原則は色々と紹介されていたが、正直、読了直後でもどれが何のことを表していたか...ってごっちゃになってしまっていたので、思い出したいときのために整理しておく。"),Object(u.a)("div",{className:"cstmreba"},Object(u.a)("div",{className:"kaerebalink-box"},Object(u.a)("div",{className:"kaerebalink-image"},Object(u.a)("a",{href:"https://www.amazon.co.jp/exec/obidos/ASIN/B07FSBHS2V/bakunyo-22/",target:"_blank"},Object(u.a)("img",{src:"https://images-fe.ssl-images-amazon.com/images/I/51mQrYTahJL._SL160_.jpg",style:{border:"none"}}))),Object(u.a)("div",{className:"kaerebalink-info"},Object(u.a)("div",{className:"kaerebalink-name"},Object(u.a)("a",{href:"https://www.amazon.co.jp/exec/obidos/ASIN/B07FSBHS2V/bakunyo-22/",target:"_blank"},"Clean Architecture　達人に学ぶソフトウェアの構造と設計 (アスキードワンゴ)"),Object(u.a)("div",{className:"kaerebalink-powered-date"},"posted with ",Object(u.a)("a",{href:"https://kaereba.com",rel:"nofollow",target:"_blank"},"カエレバ"))),Object(u.a)("div",{className:"kaerebalink-detail"},"Ｒｏｂｅｒｔ Ｃ．Ｍａｒｔｉｎ,角 征典,高木 正弘 ドワンゴ 2018-08-01    "),Object(u.a)("div",{className:"kaerebalink-link1"})),Object(u.a)("div",{className:"booklink-footer"}))),Object(u.a)("h2",null,"SOLID原則"),Object(u.a)("p",null,"関数やデータ構造をどのようにクラスに組み込むのか、そしてクラスの相互接続をどのようにするのかについての原則"),Object(u.a)("h5",null,"単一責任の原則（SRP: Single Responsibility Principle）"),Object(u.a)("ul",null,Object(u.a)("li",{parentName:"ul"},"モジュールを変更する理由がたったひとつ（\bのアクター）になるようにする"),Object(u.a)("li",{parentName:"ul"},"「\b各モジュールはたったひとつのことだけを行うべき」と誤解されがち"),Object(u.a)("li",{parentName:"ul"},"似たような処理でもアクターの異なるコードは分割するべき")),Object(u.a)("h5",null,"オープン・クローズドの原則（OCP: Open-Closed Principle）"),Object(u.a)("ul",null,Object(u.a)("li",{parentName:"ul"},"拡張に対して開いて、修正に対して閉じていなければならない"),Object(u.a)("li",{parentName:"ul"},"1988年、 Bertland Meyer が提唱"),Object(u.a)("li",{parentName:"ul"},"ソフトウェアを変更しやすくするために、既存のコード変更より新しいコードの追加で振る舞いを変更できるようにする")),Object(u.a)("h5",null,"リスコフの置換原則（LSP: Liskov Substitution Principle）"),Object(u.a)("ul",null,Object(u.a)("li",{parentName:"ul"},"交換可能なパーツを使ってソフトウェア・システムを構築するなら、個々のパーツが交換可能となるような契約に従わなければならない"),Object(u.a)("li",{parentName:"ul"},"1988年、 Barbara Liskov が提唱した有名な派生型の定義。"),Object(u.a)("li",{parentName:"ul"},"この原則違反の有名な例が「正方形・長方形」問題")),Object(u.a)("h5",null,"インターフェイス分離の原則（ISP: Interface Segregation Principle）"),Object(u.a)("ul",null,Object(u.a)("li",{parentName:"ul"},"使っていないものへの依存を回避すべき")),Object(u.a)("h5",null,"依存関係逆転の原則（DIP: Dependency Inversion Principle）"),Object(u.a)("ul",null,Object(u.a)("li",{parentName:"ul"},"上位レベルの方針の実装コードは、下位レベルの詳細の実装コードに依存すべきではなく、逆に詳細側が方針に依存すべき"),Object(u.a)("li",{parentName:"ul"},"ソースコードの依存関係が（具象ではなく）抽象だけを参照しているのが最も柔軟なシステム")),Object(u.a)("h2",null,"コンポーネントの原則"),Object(u.a)("p",null,"コンポーネント = デプロイの単位"),Object(u.a)("h3",null,"凝集性に関する原則"),Object(u.a)("h5",null,"再利用・リリース等価の原則（REP: Reuse-Release Equivalency Principle）"),Object(u.a)("ul",null,Object(u.a)("li",{parentName:"ul"},"再利用の単位とリリースの単位は等価になる"),Object(u.a)("li",{parentName:"ul"},"リリース番号がついてなければ、再利用するコンポーネントの互換性を確認できないので、当然の原則のようにも思える")),Object(u.a)("h5",null,"閉鎖性共通の原則（CCP: Common Closure Principle）"),Object(u.a)("ul",null,Object(u.a)("li",{parentName:"ul"},"同じ理由、同じタイミングで変更されるクラスをコンポーネントにまとめる。どちらかが異なる場合は別のコンポーネントに分けること"),Object(u.a)("li",{parentName:"ul"},"\bSRPをコンポーネント向けに言い換えたもの")),Object(u.a)("h5",null,"全再利用の原則（CRP: Common Reuse Principle）"),Object(u.a)("ul",null,Object(u.a)("li",{parentName:"ul"},"コンポーネントのユーザーに対して、実際には使わないものの依存を強要しては\bいけない"),Object(u.a)("li",{parentName:"ul"},"ISPをコンポーネント向けに言い換えたもの")),Object(u.a)("br",null),"3つの原則は相関し、相反するものもある。開発時の利便性と再利用性・プロジェクトの進捗度によってコンポーネントの構成も変わっていく",Object(u.a)("h3",null,"結合に関する原則"),Object(u.a)("p",null,"コンポーネントの関連を扱う3つの原則"),Object(u.a)("h5",null,"非循環依存関係の原則（ADP: Acyclic Dependencies Principle）"),Object(u.a)("ul",null,Object(u.a)("li",{parentName:"ul"},"コンポーネントの依存グラフに循環依存があってはいけない"),Object(u.a)("li",{parentName:"ul"},"循環依存があると、依存関係の混乱、ビルド（リリース）の順番を決めるのが難しくなる"),Object(u.a)("li",{parentName:"ul"},"循環依存を解消するために、依存関係逆転の原則（DIP）を適用する")),Object(u.a)("h5",null,"安定依存の原則（SDP: Stable Dependencies Principle）"),Object(u.a)("ul",null,Object(u.a)("li",{parentName:"ul"},"安定度の高い方向に依存すること"),Object(u.a)("li",{parentName:"ul"},"依存されているコンポーネントが多い程変更しにくいので、安定度が高いと考える"),Object(u.a)("li",{parentName:"ul"},"指標の例： 不安定度 = 依存しているコンポーネントの数 / (依存しているコンポーネントの数 + 依存されているコンポーネントの数)")),Object(u.a)("h5",null,"安定度・抽象度等価の原則（SAP: Stable Abstractions Principle）"),Object(u.a)("ul",null,Object(u.a)("li",{parentName:"ul"},"コンポーネントの抽象度は、その安定度と同程度でなければならない"),Object(u.a)("li",{parentName:"ul"},"\bSDPと組み合わせると、抽象度の高い方向に依存すべきということ"),Object(u.a)("li",{parentName:"ul"},"違反してしまってるのがDBスキーマ。変更されやすく、抽象度は低く、他から依存されまくっている"),Object(u.a)("li",{parentName:"ul"},"Stability-Abstraction Equivalency Principle とかじゃねーのかよって思った（どうでもいい）")),Object(u.a)("h2",null,"その他のメモ"),Object(u.a)("ul",null,Object(u.a)("li",{parentName:"ul"},"ソフトウェアアーキテクチャの目的は、求められるシステムを構築・保守するために必要な人材を最小限に抑えること"),Object(u.a)("li",{parentName:"ul"},"ソフトウェアの1つ目の価値（振る舞い）は緊急だが、常に重要とは限らない"),Object(u.a)("li",{parentName:"ul"},"ソフトウェアの2つ目の価値（アーキテクチャ）は重要だが、常に緊急とは限らない"),Object(u.a)("li",{parentName:"ul"},"プログラミングパラダイムとアーキテクチャ",Object(u.a)("ul",{parentName:"li"},Object(u.a)("li",{parentName:"ul"},"構造化プログラミングは、直接的な制御の移行に規律を課す",Object(u.a)("ul",{parentName:"li"},Object(u.a)("li",{parentName:"ul"},"アーキテクチャレベルでは機能分割に役立つ"))),Object(u.a)("li",{parentName:"ul"},"オブジェクト指向プログラミングは、間接的な制御の移行に規律を課す",Object(u.a)("ul",{parentName:"li"},Object(u.a)("li",{parentName:"ul"},"ポリモーフィズムを使用することでソースコードの依存関係を絶対的に制御する能力"))),Object(u.a)("li",{parentName:"ul"},"関数型プログラミングは、代入に規律を課す",Object(u.a)("ul",{parentName:"li"},Object(u.a)("li",{parentName:"ul"},"イベントソーシング（状態ではなく取引を保存する）"))))),Object(u.a)("li",{parentName:"ul"},"ソフトウェアをソフトに保つには、なるべく多く選択肢を残すこと。その選択肢とは、重要でない「詳細」のこと",Object(u.a)("ul",{parentName:"li"},Object(u.a)("li",{parentName:"ul"},"「方針」と「詳細」"),Object(u.a)("li",{parentName:"ul"},"方針とは、ビジネスルールや手順、システムの本当の価値"),Object(u.a)("li",{parentName:"ul"},"詳細とは、方針についてやりとりするものだが方針の振る舞いに影響を与えないもの。IOデバイス、DB、Web、Server、Framework、通信プロトコルなど"))),Object(u.a)("li",{parentName:"ul"},"レベルについて",Object(u.a)("ul",{parentName:"li"},Object(u.a)("li",{parentName:"ul"},"「入力と出力からの距離」を「レベル」と定義する"),Object(u.a)("li",{parentName:"ul"},"ソースコードの依存性をデータフローから切り離し、レベルと結びつけるべき"))),Object(u.a)("li",{parentName:"ul"},"アーキテクチャの境界を予測的に設計する（YAGNI否定）")),Object(u.a)("h2",null,"感想"),Object(u.a)("p",null,"第Ⅳ部「詳細」では普段接している様々な技術（データベース・Web・フレームワーク等）を重要ではない「詳細」だと言い切っている。",Object(u.a)("br",{parentName:"p"}),"\n","（訳者あとがきにも似たようなことが書いてあるけど）自分もアプリをつくる時に言語は？FWは？どこで動かす？などをすぐに考えてしまうし、アーキテクチャもその都度都度で最適だと思うようにつくっていけばいいでしょと考えてしまっていたのは反省すべきポイントだった。",Object(u.a)("br",{parentName:"p"}),"\n","小さなクラス設計からデプロイ単位のコンポーネント設計まで、ちゃんと意識できてるって思えるまでは実践を積み重ねるしかないと思うのでこれから頑張っていこうと思う。"))}p.isMDXComponent=!0;var m=l(194);a.default=function(){return n.a.createElement(m.a,null,n.a.createElement(p,null))}}}]);