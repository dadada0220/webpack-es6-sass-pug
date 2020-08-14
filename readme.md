# webpack（ES6 + Sass + Pug）
ES6、Sass、Pugをコンパイルできるwebpackのテンプレート  
Node.js：`12.18.3`での動作確認済み  

## 主な機能
- PugをHTMLにコンパイル
- Sass（Scss）をCSSにコンパイル  
- ES6をES5にコンパイル  
- cssとjsをそれぞれ別ファイルとして出力  
- 開発時にソースマップ出力  
- 公開時に圧縮  
- Autoprefixerでベンダープレフィックス自動付与（`package.json`の`browserslist`でバージョンなどの指定可能）  

## 環境構築
以下コマンド実行  
`package.json`をもとに、必要なモジュールがインストールされる  
```
npm i
```

## 開発時
以下コマンド実行中、`_src`配下のファイル編集時に自動でコンパイルされる  
```
npm run watch
```

## 公開時
以下コマンド実行後、圧縮してコンパイルされる  
```
npm run build
```
