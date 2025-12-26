# Peraphrase 🗣️

**「意味を伝える」から「自然に話せる」へ。AIを活用した日本語学習者向け言い換え・翻訳プラットフォーム**

「ペラペラ」と「パラフレーズ（言い換え）」を掛け合わせた **Peraphrase** は、日本語学習者がネイティブのような自然な表現を習得することをサポートするために開発されました。

<div align="center">
  <p><strong>App Screenshots</strong></p>
  <img src="https://github.com/user-attachments/assets/27fe6b0a-894a-442e-9db6-76abdf608a46" width="24%" alt="メイン画面">
  <img src="https://github.com/user-attachments/assets/b4fd8890-c9da-44fa-86dc-c972513416c4" width="24%" alt="翻訳画面">
  <img src="https://github.com/user-attachments/assets/99065cc7-3940-4f7d-9e66-ff98371891bc" width="24%" alt="メニュー">
  <img src="https://github.com/user-attachments/assets/c95638bd-1066-4378-ab2c-2d70df0268a7" width="24%" alt="サブスク">
  <p><em>左から：メインページ / 翻訳・言い換え実行 / ナビゲーション / サブスクリプションプラン</em></p>
</div>

---

## 💡 開発背景 (Background)
海外生活の中で、「文法は合っているはずなのに、ネイティブのような自然なニュアンスで話せない」という壁に直面しました。同時に、周囲の日本語学習者の友人たちも同様に「教科書的な日本語はわかるが、日本人が日常で使う自然な言い回しがわからない」と悩んでいる姿を目の当たりにしました。

既存の翻訳ツールは「意味」を伝えることには長けていますが、流暢さやその場にふさわしい言い回しの習得には限界があります。

そこで、日本人ネイティブとして「自然な日本語」の正解を自ら判定できる強みを活かし、AIを活用した「自然な言い換え（パラフレーズ）」に特化したアプリを開発しました。学習者が自信を持って「ペラペラ」に話せるようになることを目指しています。

## 🛠 使用技術 (Tech Stack)

| 区分 | 技術 |
| :--- | :--- |
| **Frontend** | Next.js 16 (App Router), TypeScript, Tailwind CSS |
| **Backend** | Next.js Server Actions |
| **Database** | Prisma, Supabase (PostgreSQL) |
| **Auth** | Supabase Auth |
| **Payment** | Stripe (Checkout, Webhooks) |


## ✨ 主要機能 (Features)
- **AIパラフレーズ機能**: GPT-4等のLLMを活用し、カジュアルな言い換えを生成。
- **サブスクリプション**: Stripe連携による、サブスクリプションプランの管理。
- **翻訳履歴保存**: 過去の翻訳内容をDBに保存し、いつでも見返しが可能。
- **認証システム**: Supabaseによるセキュアなログインとユーザー管理。

## 🚀 技術的なこだわり (Technical Highlights)

### 1. ユーザー属性に応じた多層的な利用制限
ユーザーの状態に合わせ、認証・購読状況に応じた利用制限の切り替えを実装しました。
- **未ログイン**: ローカルストレージを用いて最大3回までの試用を提供。
- **フリーユーザー**: 認証後、24時間以内に10回までの制限をDBで管理。
- **プロユーザー**: Stripe Webhookと連携し、DBのステータスをリアルタイムに更新して制限を解除。

### 2. インタラクション設計の最適化
翻訳のリズムを重視し、ページ遷移を極限まで減らしたシングルページ構成を採用。入力から出力、言語設定までを同一画面内で完結させることで、ストレスのないシームレスな操作感を実現しました。

### 3. 文脈に応じた高度なプロンプト制御
単なる機械翻訳ではなく、LLM（GPT-4.1）へのプロンプトを最適化。現在は「日常会話で使える自然なカジュアル表現」に特化した出力を実現しています。

## 🔮 今後の展望 (Future Tasks)
- [ ] **音声読み上げ機能 (TTS)**: 翻訳された自然な表現を正しい発音で確認できる機能。
- [ ] **音声入力の精度向上**: AIを活用した補正による、よりスムーズな入力体験。
- [ ] **プロンプトの高度化**: 特定のシチュエーション（接客、面接等）に特化したモードの追加。

## 🛠 セットアップ (Local Setup)

```bash
# クローン
git clone https://github.com/Ryutera/translation-app

# 依存関係のインストール
npm install

# 環境変数の設定
# Supabase (Client-side)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key

# Database (Prisma)
DATABASE_URL=postgresql://postgres:password@db.xxxx.supabase.co:5432/postgres

# Supabase (Server-side)
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE=your_service_role_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRICE_MONTHLY=price_...
STRIPE_PRICE_ANNUAL=price_...

# OpenAI
OPENAI_API_KEY=sk-...

# 起動
npm run dev
