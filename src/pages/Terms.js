import React from 'react';
import '../styles/Privacy.css';

const Terms = () => {
  return (
    <div className="privacy-page">
      <div className="container">
        <header className="privacy-header">
          <h1>Terms of Service</h1>
          <p className="last-updated">Last updated April 1, 2025</p>
        </header>

        <section className="privacy-summary">
          <h2>Summary in Plain Words</h2>
          <div className="summary-points">
            <div className="summary-point">
              <div className="check-icon">✓</div>
              <p>Chowboy offers a free tier and a monthly auto-renew subscription via in-app purchase.</p>
            </div>
            <div className="summary-point">
              <div className="check-icon">✓</div>
              <p>All purchases are final and non-refundable except for verifiable software bugs.</p>
            </div>
            <div className="summary-point">
              <div className="check-icon">✓</div>
              <p>These Terms are governed by the laws of Quebec, Canada and disputes go before Montreal courts.</p>
            </div>
          </div>
        </section>

        <section className="privacy-section">
          <h2>Introduction</h2>
          <p>
            These Terms of Service (“Terms") govern your access to and use of the Chowboy mobile application (the "App"), operated by Chowboy, based in Montreal, Canada. By downloading, installing, or using the App, you agree to these Terms. Please also read our Privacy Policy, which together with these Terms constitutes the entire agreement.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Licenses and Subscriptions</h2>
          <p>
            We grant you a limited, non-exclusive, non-transferable, revocable right to download and use the App on your compatible device, solely for personal, non-commercial use. The App is available in a free tier. A premium subscription unlocks additional features like AI-powered recipe analysis, shopping-list sync, and unlimited favorites. Pricing appears in-app at purchase.
          </p>
          <p>
            Subscriptions auto-renew monthly via Apple's in-app purchase system. You may cancel at any time through your device's subscription settings; cancellation takes effect at the end of the current billing period.
          </p>
          <p>
            We also offer one-time in-app purchases. All purchases are final and non-refundable except when required by law or due to a verifiable bug in the App.
          </p>
        </section>

        <section className="privacy-section">
          <h2>App Updates</h2>
          <p>
            We may release updates, upgrades, bug fixes, or new features ("Updates") at our discretion. Updates may be applied automatically if enabled or manually. We reserve the right to discontinue support for older versions.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Intellectual Property</h2>
          <p>
            All App code, designs, text, graphics, images, trademarks, and logos ("Materials") are owned by Chowboy or its licensors. Nothing in these Terms grants you ownership rights.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Restrictions of Use</h2>
          <p>
            Except as expressly permitted, you agree not to:
          </p>
          <ul className="bullet-list">
            <li>Copy, reverse-engineer, decompile, or disassemble the App;</li>
            <li>Modify, distribute, or create derivative works of the App or Materials;</li>
            <li>Sell, rent, lease, sublicense, or otherwise transfer rights to the App;</li>
            <li>Remove proprietary notices or labels.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>User-Generated Content</h2>
          <p>
            You may create and upload recipes, grocery lists, notes, ratings, and other content ("User Content"). By uploading, you grant Chowboy a perpetual, worldwide, royalty-free, sublicensable license to use, reproduce, modify, publish, and distribute such content. You warrant that your User Content does not infringe third-party rights or contain unlawful material. Chowboy may remove any content that violates these Terms.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Warranties</h2>
          <p>
            You warrant that all information and User Content you provide is accurate. Except as required by law, Chowboy disclaims all other warranties, express or implied, including fitness for a particular purpose and merchantability.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Disclaimers</h2>
          <p>
            The App is provided "as-is" and "as-available" without any warranty. We do not guarantee uninterrupted or error-free operation, compatibility, or security of your data.
          </p>
        </section>

        <section className="privacy-section">
          <h2>AI & Health Disclaimer</h2>
          <p>
            Features rely on AI-generated analysis—results may vary and should not be the sole basis for critical decisions. The App is not medical, dietary, or professional health advice. Consult a qualified professional before making health decisions.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Liability Limitation</h2>
          <p>
            To the fullest extent permitted by law, Chowboy and its officers, employees, and licensors are not liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of (or inability to use) the App.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Dispute Resolution</h2>
          <p>
            These Terms are governed by the laws of the Province of Quebec and the federal laws of Canada. Any dispute shall be litigated exclusively in the courts of Montreal, Quebec.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Device Requirements</h2>
          <p>
            Your device must meet the compatibility and OS requirements listed on the App Store. We do not guarantee availability on all devices.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Payment & Subscriptions</h2>
          <p>
            This app uses Apple's In-App Purchase system for one-time purchases and auto-renewing subscriptions. Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period. Payment will be charged to your Apple ID account upon confirmation of purchase. You can manage or cancel your subscription at any time in your device's Settings under your Apple ID. All refunds, if any, are handled solely by Apple in accordance with their App Store refund policy.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Termination and Survival</h2>
          <p>
            You may terminate by uninstalling the App and cancelling subscriptions. Sections on Intellectual Property, Restrictions, Warranties, Disclaimers, AI & Health, Liability, and Dispute Resolution survive termination.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Updating Terms</h2>
          <p>
            We may update these Terms at any time. If we make material changes, we will notify you by in-app banner or email. Continued use of the App after the effective date constitutes acceptance.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Contact Us</h2>
          <p>
            If you have questions about these Terms, contact us at <a href="mailto:help@chowboy.io">help@chowboy.io</a> or mail to Chowboy, Montreal, Canada.
          </p>
        </section>

        {/* General Provisions */}
        <section className="privacy-section">
          <h2>General Provisions</h2>
          <ul className="bullet-list">
            <li><strong>Assignment:</strong> You may not assign or transfer these Terms, in whole or in part, without our prior written consent. Chowboy may assign its rights and obligations freely.</li>
            <li><strong>Waiver:</strong> No waiver by Chowboy of any breach or right shall be deemed a waiver of any other breach or right.</li>
            <li><strong>Severability:</strong> If any provision of these Terms is found invalid or unenforceable, the remaining provisions shall remain in full force.</li>
            <li><strong>Force Majeure:</strong> Chowboy shall not be liable for any delay or failure due to causes beyond its reasonable control, including natural disasters, strikes, or technical failures.</li>
            <li><strong>Entire Agreement:</strong> These Terms, together with the Privacy Policy and any other legal notices published by Chowboy, constitute the entire agreement between you and Chowboy regarding the App.</li>
            <li><strong>Third-Party Links:</strong> The App may contain links to third-party websites or services not owned or controlled by Chowboy. Chowboy is not responsible for their content or practices.</li>
            <li><strong>Feedback:</strong> Any feedback, suggestions or ideas you provide to Chowboy are non-confidential and Chowboy is free to use them without restriction.</li>
            <li><strong>Notices:</strong> We may provide notices by email, in-app notification, or posting on our website. You consent to receive electronic communications and agree that all agreements, notices, disclosures, and other communications we provide satisfy any legal requirement.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Terms; 