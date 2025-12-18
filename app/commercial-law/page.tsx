export default function LegalPage() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-[#ffd1d112] ">
      <div className="mt-28 mb-20 w-[90%] md:w-[60%] max-w-4xl bg-white p-8 md:p-16 rounded-[2rem] shadow-sm border border-black/5">
        <h1 className="text-3xl font-black text-gray-900 mb-10 border-b pb-6">
          Legal Information / 利用規約・法的事項
        </h1>

        <div className="space-y-14 text-gray-700 leading-relaxed">

          {/* 1. Operator */}
          <section>
            <h2 className="text-xl font-bold text-red-500 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-red-400 rounded-full"></span>
              運営者情報 / Operator Information
            </h2>

            <div className="pl-4 space-y-3 text-sm md:text-base">
              <p>
                本サービス「Peraphrase」は、個人開発者により運営されています。
              </p>

              <ul className="space-y-3 mt-4">
                <li>
                  <strong className="block text-gray-900">
                    運営者名 / Operator
                  </strong>
                  Peraphrase
                </li>
                <li>
                  <strong className="block text-gray-900">
                    連絡先 / Contact
                  </strong>
                  サイト内のお問い合わせフォーム
                </li>
              </ul>

              <p className="text-xs text-gray-400 italic mt-4">
                Information may be disclosed when required by applicable laws.
              </p>
            </div>
          </section>

          {/* 2. Terms */}
          <section>
            <h2 className="text-xl font-bold text-red-500 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-red-400 rounded-full"></span>
              利用規約 / Terms of Service
            </h2>

            <div className="pl-4 space-y-4 text-sm md:text-base">
              <p>
                本サービスをご利用いただくことで、ユーザーは本利用規約に同意したものとみなされます。
              </p>

              <p>
                本サービスは、日本語学習および表現補助を目的としたデジタルサービスです。
                出力される翻訳・言い換え結果の正確性、完全性、特定目的への適合性について保証するものではありません。
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>法令または公序良俗に反する行為</li>
                <li>不正アクセスやサービスに過度な負荷を与える行為</li>
                <li>リバースエンジニアリング、スクレイピング、不正な自動化</li>
                <li>嫌がらせ、差別的表現、なりすまし行為</li>
              </ul>

              <p>
                規約違反が確認された場合、運営者は事前通知なくアカウントの停止または削除を行うことがあります。
              </p>
            </div>
          </section>

          {/* 3. Subscription */}
          <section>
            <h2 className="text-xl font-bold text-red-500 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-red-400 rounded-full"></span>
              サブスクリプション・支払い / Subscription & Payment
            </h2>

            <div className="pl-4 space-y-4 text-sm md:text-base">
              <ul className="list-disc pl-5 space-y-2">
                <li>月額プラン：$3.99 USD</li>
                <li>年額プラン：$39.99 USD</li>
              </ul>

              <p>
                お支払いはStripeを通じて処理され、購入手続き完了後、直ちにサービスの提供が開始されます。
              </p>

              <p>
                サブスクリプションは自動更新されます。
                ユーザーはアカウント内の「Account / Billing」ページからいつでも解約できます。
              </p>

              <p>
                解約後も、次回更新日までは引き続きサービスをご利用いただけます。
                日割りによる返金は行っておりません。
              </p>
            </div>
          </section>

          {/* 4. Refund */}
          <section className="bg-red-50 p-6 rounded-2xl border border-red-100">
            <h2 className="text-xl font-bold text-red-600 mb-2">
              返品・返金ポリシー / Refund Policy
            </h2>

            <div className="space-y-2 text-sm md:text-base">
              <p>
                本サービスはデジタルサービスの性質上、購入手続き完了後は直ちに提供が開始されるため、
                原則として返金には応じておりません。
              </p>
              <p className="text-xs italic text-red-400">
                Due to the nature of digital services, refunds are generally not offered.
              </p>

              <p>
                ただし、サービスが正常に提供されない場合や重大な不具合が発生した場合には、
                状況を確認のうえ、修正対応、代替提供、または返金を行うことがあります。
              </p>
            </div>
          </section>

          {/* 5. Privacy & AI */}
          <section>
            <h2 className="text-xl font-bold text-red-500 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-red-400 rounded-full"></span>
              プライバシー / Privacy Policy
            </h2>

            <div className="pl-4 space-y-4 text-sm md:text-base">
              <ul className="list-disc pl-5 space-y-2">
                <li>アカウント登録時のメールアドレス</li>
                <li>翻訳・言い換えの入力テキストおよび履歴</li>
                <li>サブスクリプション決済に関する情報（Stripeにより処理）</li>
              </ul>

              <p>
                本サービスでは、翻訳・言い換え処理に外部のAIサービス（OpenAI API）を利用しています。
                データはサービス提供および改善の目的にのみ使用されます。
              </p>

              <p>
                ユーザーはアカウント削除機能を利用することで、
                保存されたデータをデータベースから削除できます。
              </p>
            </div>
          </section>

          {/* 6. Age */}
          <section>
            <h2 className="font-bold text-gray-900 mb-2">
              年齢制限 / Age Requirement
            </h2>
            <p className="text-sm text-gray-600">
              本サービスは13歳未満の方の利用を想定していません。
            </p>
          </section>

          {/* 7. Disclaimer */}
          <section>
            <h2 className="font-bold text-gray-900 mb-2">
              免責事項 / Disclaimer
            </h2>
            <p className="text-sm text-gray-600">
              本サービスの利用に関連して生じたいかなる損害についても、
              運営者は一切の責任を負いません。
              ユーザーは自己責任において本サービスをご利用ください。
            </p>
          </section>

          {/* 8. Changes */}
          <section>
            <h2 className="font-bold text-gray-900 mb-2">
              規約の変更 / Changes to These Terms
            </h2>
            <p className="text-sm text-gray-600">
              本規約は予告なく変更されることがあります。
              変更後の規約は、本ページに掲載された時点で効力を生じます。
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t text-center text-xs text-gray-400">
          Last Updated: 2025.12.18
        </div>
      </div>

      <a
        href="/"
        className="mb-20 text-gray-500 hover:text-red-400 transition-colors text-sm font-bold"
      >
        ← Back to Home
      </a>
    </main>
  );
}
