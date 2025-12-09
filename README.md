## 資料

- [NextAuth.js](https://next-auth-docs.vercel.app/)

## GCP

1. 「[GCP/クライアント/クライアントの作成](https://console.cloud.google.com/auth/overview)」を開く
2. 「API とサービス → 認証情報 → OAuth クライアントを作成」を選択
3. アプリ種類に「ウェブアプリケーション」を指定
4. 承認済みの JavaScript 生成元 に `http://localhost:3000`（開発時）など
5. 承認済みのリダイレクト URI に `http://localhost:3000/api/auth/callback/google` を設定
6. 発行された Client ID / Secret を .env.local に書く。

```bash
GOOGLE_CLIENT_ID="xxx.apps.googleusercontent.com";
GOOGLE_CLIENT_SECRET="XXX-XXX";
```
