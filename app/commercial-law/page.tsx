export default function LegalPage() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-[#ffd1d112] ">
      <div className="mt-28 mb-20 w-[90%] md:w-[60%] max-w-4xl bg-white p-8 md:p-16 rounded-[2rem] shadow-sm border border-black/5">
        <h1 className="text-3xl font-black text-gray-900 mb-10 border-b pb-6">
          Legal Information
        </h1>

        <div className="space-y-14 text-gray-700 leading-relaxed">

          {/* 1. Operator */}
          <section>
            <h2 className="text-xl font-bold text-red-500 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-red-400 rounded-full"></span>
              Operator Information
            </h2>

            <div className="pl-4 space-y-3 text-sm md:text-base">
              <p>
                This service, <strong>Peraphrase</strong>, is operated by an independent developer.
              </p>

              <ul className="space-y-3 mt-4">
                <li>
                  <strong className="block text-gray-900">
                    Operator
                  </strong>
                  Peraphrase
                </li>
                <li>
                  <strong className="block text-gray-900">
                    Contact
                  </strong>
                  Please contact us via the inquiry form available on this website.
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
              Terms of Service
            </h2>

            <div className="pl-4 space-y-4 text-sm md:text-base">
              <p>
                By using this service, you agree to these Terms of Service.
              </p>

              <p>
                This service is a digital product designed to support Japanese language learning
                and expression. We do not guarantee the accuracy, completeness, or suitability
                of any generated translations or paraphrased content.
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>Activities that violate laws or public order</li>
                <li>Unauthorized access or actions that place excessive load on the service</li>
                <li>Reverse engineering, scraping, or unauthorized automation</li>
                <li>Harassment, discriminatory behavior, or impersonation</li>
              </ul>

              <p>
                If a violation of these terms is confirmed, we may suspend or terminate the user’s
                account without prior notice.
              </p>
            </div>
          </section>

          {/* 3. Subscription */}
          <section>
            <h2 className="text-xl font-bold text-red-500 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-red-400 rounded-full"></span>
              Subscription & Payment
            </h2>

            <div className="pl-4 space-y-4 text-sm md:text-base">
              <ul className="list-disc pl-5 space-y-2">
                <li>Monthly Plan: $3.99 USD</li>
                <li>Annual Plan: $39.99 USD</li>
              </ul>

              <p>
                Payments are processed via Stripe, and access to the service begins immediately
                after the checkout process is completed.
              </p>

              <p>
                Subscriptions renew automatically. You may cancel your subscription at any time
                via the “Account / Billing” page.
              </p>

              <p>
                After cancellation, access will remain available until the next renewal date.
                No prorated refunds are provided.
              </p>
            </div>
          </section>

          {/* 4. Refund */}
          <section className="bg-red-50 p-6 rounded-2xl border border-red-100">
            <h2 className="text-xl font-bold text-red-600 mb-2">
              Refund Policy
            </h2>

            <div className="space-y-2 text-sm md:text-base">
              <p>
                Due to the nature of digital services, access begins immediately after purchase,
                and refunds are generally not offered.
              </p>

              <p className="text-xs italic text-red-400">
                All sales are final unless otherwise required by law.
              </p>

              <p>
                However, if the service cannot be provided as intended or a significant technical
                issue occurs, we may offer a fix, replacement, or refund on a case-by-case basis.
              </p>
            </div>
          </section>

          {/* 5. Privacy & AI */}
          <section>
            <h2 className="text-xl font-bold text-red-500 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-red-400 rounded-full"></span>
              Privacy Policy
            </h2>

            <div className="pl-4 space-y-4 text-sm md:text-base">
              <ul className="list-disc pl-5 space-y-2">
                <li>Email address provided during account registration</li>
                <li>User input text and translation / paraphrasing history</li>
                <li>Subscription-related payment information (processed by Stripe)</li>
              </ul>

              <p>
                This service uses external AI services (such as the OpenAI API) to process text.
                Collected data is used solely for providing and improving the service.
              </p>

              <p>
                Users may delete their account at any time, which will remove their stored data
                from our database.
              </p>
            </div>
          </section>

          {/* 6. Age */}
          <section>
            <h2 className="font-bold text-gray-900 mb-2">
              Age Requirement
            </h2>
            <p className="text-sm text-gray-600">
              This service is not intended for users under the age of 13.
            </p>
          </section>

          {/* 7. Disclaimer */}
          <section>
            <h2 className="font-bold text-gray-900 mb-2">
              Disclaimer
            </h2>
            <p className="text-sm text-gray-600">
              The operator shall not be liable for any damages arising from the use of this service.
              Users use the service at their own risk.
            </p>
          </section>

          {/* 8. Changes */}
          <section>
            <h2 className="font-bold text-gray-900 mb-2">
              Changes to These Terms
            </h2>
            <p className="text-sm text-gray-600">
              These terms may be updated without prior notice.
              The revised terms take effect once published on this page.
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
