# government-blog

このプロジェクトは Next.js (App Router) + TypeScript によるブログサンプルです。

## セットアップ

1. 依存パッケージのインストール

```bash
pnpm install
```

2. 開発サーバーの起動

```bash
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて動作を確認できます。

## テスト

Jest + React Testing Library によるテストが導入されています。

```bash
pnpm test
```

## コード整形・静的解析

```bash
pnpm lint   # ESLint
pnpm format # Prettier
```

## ディレクトリ構成

- `src/app/` ... Next.jsのページ・レイアウト
- `src/components/` ... UIコンポーネント
- `src/content/` ... ブログ記事(Markdown)
- `src/lib/` ... ライブラリ・ユーティリティ
- `src/__tests__/` ... テストコード

## デプロイ

Vercel等のNext.js対応PaaSでそのままデプロイ可能です。

---

## ライセンス

MIT
