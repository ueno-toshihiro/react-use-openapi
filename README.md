# React-Orval-ReactQuery-Zustand-Example
React状態管理ライブラリと、OpenAPIを使ったAPIクライアントの実装例です。
APIリクエストにはモックサーバーを使っています。

## 概要
Orvalで生成されたカスタムフックのReact Queryでサーバーデータの状態を管理し、Zustandでアプリケーションの状態を管理することでシンプルながらも柔軟な状態管理を実現しています。
利点：
- React QueryでAPIリクエストをキャッシュすることで、データの再取得を最小限に抑えることができます。
- Zustandでアプリケーションの状態を管理することで、コンポーネント間の状態共有が容易になります。

## アプリ起動方法
- node version は v22.0.0 以上を使用してください。

- Orvalをグローバルインストールします。（schema を変更しない場合はすでに型情報、クライアントAPIとカスタムフック、モックを生成しているため不要です）
```
npm i -g orval
```
- schemaを変更した場合は、以下のコマンドでクライアントAPI、カスタムフック、モックを生成します。
```
orval
```

- 依存ライブラリをインストールします。
```
npm i

```

- アプリケーションを起動します。
```
npm run start
```

## デモ
https://github.com/user-attachments/assets/52754b2e-0522-495c-994a-497867c66c77


## 使い方
1. Orvalでクライアントコードを生成します。
2. 生成したコードをReactアプリケーションに組み込みます。
3. React状態管理ライブラリを使って、APIクライアントを利用します。

## ライブラリ
- Orval: OpenAPI Generatorのラッパーライブラリ
  - [orval](https://orval.dev/)
- APIクライアント:
  - [axios](https://axios-http.com/)
- モックサーバー:
  - [MSW](https://mswjs.io/)
- React状態管理ライブラリ:
  - [Zustand](https://zustand-demo.pmnd.rs/)
  - [React Query](https://tanstack.com/query/v3)
- UIライブラリ:
  - [Material UI](https://material-ui.com/)

## アプリケーション詳細
- OpenAPI仕様のschemaをOrvalによりクライアントコードに生成します。
- Orvalで生成したコードは、型情報と、APIクライアントの関数、モックサーバーの設定を含みます。
- APIクライアントの関数は、axiosを使ってAPIリクエストを送信しモックサーバー（MSW）からのレスポンスが返ります。また、APIリクエストは**React-Query**を使ってキャッシュします。
- ⭐️ Reactコンポーネントでは、Orvalで生成されたカスタムフックを使うことでAPIリクエストとキャッシュを同時に行なっています。
- ⭐️ **Zustand**でReactコンポーネント間の状態を共有しています。

🚀 MEMO: Gitコミットメッセージで段階的にライブラリを追加、設定しているので、コミットログを参照してください。
