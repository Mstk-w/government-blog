# DX・業務効率化情報サイト

自治体職員・公務員向けのDX、業務効率化、条例改正、契約知識に関する専門情報を提供するブログサイトです。

## 特徴

- **実践的な情報**: 現場経験に基づいた具体的なノウハウ
- **専門分野**: DX推進、条例改正、契約知識、業務効率化
- **モダンな技術**: Next.js 15、TypeScript、Tailwind CSS v4
- **レスポンシブデザイン**: デスクトップ・タブレット・モバイル対応
- **SEO最適化**: メタデータ、構造化データ対応

## 技術スタック

- **フレームワーク**: Next.js 15.4.2
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **コンテンツ管理**: Markdown + gray-matter
- **テスト**: Jest + Testing Library
- **リンター**: ESLint
- **パッケージマネージャー**: pnpm

## セットアップ

### 前提条件

- Node.js 18.17.0以上
- pnpm 8.0.0以上

### インストール

```bash
# リポジトリをクローン
git clone <repository-url>
cd government-blog

# 依存関係をインストール
pnpm install
```

### 開発サーバーの起動

```bash
# 開発サーバーを起動
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

### ビルド

```bash
# 本番用ビルド
pnpm build

# 本番サーバーの起動
pnpm start
```

### テスト

```bash
# テストの実行
pnpm test

# テストの監視モード
pnpm test --watch
```

### リンター

```bash
# ESLintの実行
pnpm lint
```

## プロジェクト構造

```
government-blog/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── blog/           # ブログページ
│   │   ├── globals.css     # グローバルスタイル
│   │   ├── layout.tsx      # ルートレイアウト
│   │   └── page.tsx        # ホームページ
│   ├── components/         # 再利用可能なコンポーネント
│   │   ├── Header.tsx      # ヘッダーコンポーネント
│   │   └── Footer.tsx      # フッターコンポーネント
│   ├── content/           # ブログ記事（Markdown）
│   │   └── blog/
│   └── lib/               # ユーティリティ関数
│       ├── blog.ts        # ブログ関連の関数
│       └── utils.ts       # 汎用ユーティリティ
├── public/                # 静的ファイル
├── tailwind.config.js     # Tailwind CSS設定
├── next.config.ts         # Next.js設定
├── tsconfig.json          # TypeScript設定
└── package.json           # 依存関係
```

## ブログ記事の追加

1. `src/content/blog/` ディレクトリにMarkdownファイルを作成
2. フロントマターに以下の情報を記載：

```markdown
---
title: "記事タイトル"
excerpt: "記事の要約"
date: "2024-01-15"
tags: ["DX", "自治体", "デジタル化"]
---
```

## カスタマイズ

### カラーテーマ

`src/app/globals.css` の `@theme` セクションでカラーテーマを変更できます：

```css
@theme {
  --color-primary: #2563eb;
  --color-primary-dark: #1e40af;
  --color-primary-light: #60a5fa;
  --color-accent: #f59e42;
}
```

### コンポーネント

`src/components/` ディレクトリに新しいコンポーネントを追加できます。

## デプロイ

### Vercel（推奨）

1. [Vercel](https://vercel.com) にアカウントを作成
2. GitHubリポジトリを接続
3. 自動デプロイが開始されます

### その他のプラットフォーム

- Netlify
- AWS Amplify
- その他の静的サイトホスティング

## 貢献

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## サポート

問題や質問がある場合は、GitHubのIssuesページでお知らせください。
