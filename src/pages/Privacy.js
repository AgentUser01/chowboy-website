import React from 'react';
import '../styles/Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      <div className="container">
        <header className="privacy-header">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated October 22, 2024</p>
        </header>

        <section className="privacy-summary">
          <h2>Summary in Plain Words</h2>
          <div className="summary-points">
            <div className="summary-point">
              <div className="check-icon">✓</div>
              <p>We prioritize your privacy. We don't include any tracking from Facebook or Google in the app.</p>
            </div>
            <div className="summary-point">
              <div className="check-icon">✓</div>
              <p>We don't require personally identifiable information (PII) to use Chowboy. If you choose to create an account, your information is securely stored and never sold.</p>
            </div>
            <div className="summary-point">
              <div className="check-icon">✓</div>
              <p>We use anonymous analytics solely to improve the app experience.</p>
            </div>
          </div>
        </section>

        <section className="privacy-section">
          <h2>Introduction</h2>
          <p>
            Chowboy ('we', 'our', or 'us') is committed to respecting your privacy and processing personal data in accordance with 
            applicable privacy laws, including the EU GDPR. This Privacy Policy applies to all services we provide through our iOS application.
          </p>
          <p>
            We want to make it clear how we use your data because that's what we would want from services we use. By using our app, 
            you accept this privacy policy.
          </p>
          <p>
            No private information is required to use Chowboy's core recipe features. In most cases, we collect minimal data about you.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Personal Data We Collect</h2>
          <p className="section-intro">Purpose and Lawful Basis for Processing:</p>
          
          <div className="data-category">
            <h3>Account Information (name, email)</h3>
            <p>Used to create your account, provide access to features, and identify you within the app. This processing is necessary for the performance of our contract with you.</p>
          </div>
          
          <div className="data-category">
            <h3>Profile Information (profile photo, bio)</h3>
            <p>Optional information you can provide to personalize your experience. This processing is based on your consent.</p>
          </div>
          
          <div className="data-category">
            <h3>User Preferences</h3>
            <p>Dietary restrictions, favorite cuisines, skill level: Used to personalize recipe recommendations. This processing is based on legitimate interest in providing relevant content.</p>
          </div>
          
          <div className="data-category">
            <h3>Recipe Data</h3>
            <p>If you create, save, or share recipes, we store this information to provide core app functionality. This processing is necessary for the performance of our contract with you.</p>
          </div>
          
          <div className="data-category">
            <h3>Device Data</h3>
            <p>We collect basic technical information like device type and IP address for security and troubleshooting. This processing is based on our legitimate interest in maintaining app security and functionality.</p>
          </div>
          
          <div className="data-category">
            <h3>Location Data</h3>
            <p>Only if you explicitly allow and only when using location-specific features. This processing is based on your consent, which you can withdraw at any time.</p>
          </div>
          <div className="data-category">
            <h3>Purchase Information</h3>
            <p>We do not collect or store your payment method or billing information. All transactions are handled by Apple's In-App Purchase system. We only receive confirmation of your subscription status and do not have access to your payment details.</p>
          </div>
        </section>

        <section className="privacy-section">
          <h2>Analytics</h2>
          <p>Chowboy uses Firebase Analytics to collect anonymized usage statistics for improving the app experience. We collect events such as feature usage, session duration, and crash reports. We do not collect any personally identifiable information through analytics.</p>
          <p>Analytics data is retained in Firebase for up to 90 days, after which it is aggregated or deleted.</p>
        </section>

        <section className="privacy-section">
          <h2>Third-Party Services</h2>
          <p>We share your data with certain third parties to provide our services:</p>
          <ul className="bullet-list">
            <li><strong>Cloud storage providers (Firebase Storage, Cloud Firestore):</strong> To securely store and back up your account and recipe data.</li>
            <li><strong>Analytics providers (Firebase Analytics):</strong> To help us improve and optimize the app. These providers receive device data and anonymous usage data.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>Artificial Intelligence & Machine Learning</h2>
          <p>Chowboy uses artificial intelligence services to enhance your recipe experience:</p>
          <ul className="bullet-list">
            <li><strong>Recipe Enhancement:</strong> We send recipe data to OpenAI and DeepSeek APIs to generate equipment recommendations, cooking tips, and recipe improvements. This data is processed temporarily and not stored by the AI providers.</li>
            <li><strong>AI Costs & Usage:</strong> AI features consume credits from your subscription balance. Usage is tracked for billing purposes only.</li>
            <li><strong>Data Processing:</strong> Recipe text and ingredients may be sent to AI services. We do not send personal information like your name or contact details to AI providers.</li>
            <li><strong>AI Model Selection:</strong> The app automatically selects between OpenAI and DeepSeek based on availability and performance. You can view which AI provider is currently active in Settings.</li>
            <li><strong>Data Retention:</strong> AI providers process data temporarily during API calls but do not store your recipe information permanently.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>iCloud & Data Synchronization</h2>
          <p>Chowboy uses Apple's iCloud and CloudKit services to synchronize your data across your devices:</p>
          <ul className="bullet-list">
            <li><strong>What is Synchronized:</strong> Your saved recipes, cookbooks, preferences, and profile information are stored in your personal iCloud account (container: iCloud.io.chowboy.ios).</li>
            <li><strong>Your Control:</strong> You can disable iCloud synchronization in your device's iCloud settings. This will stop data from syncing between devices but may affect app functionality.</li>
            <li><strong>Apple's Privacy:</strong> iCloud data is subject to Apple's privacy policy and terms of service. We cannot access your iCloud data directly.</li>
            <li><strong>Local Storage:</strong> When iCloud is disabled, data is stored locally on your device only.</li>
            <li><strong>Data Backup:</strong> iCloud automatically backs up your Chowboy data as part of your iCloud backup.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>Device Permissions & Access</h2>
          <p>Chowboy requests the following device permissions:</p>
          <ul className="bullet-list">
            <li><strong>Camera:</strong> To take photos for profile pictures and scan recipes from images. Only requested when you choose to use these features.</li>
            <li><strong>Photo Library:</strong> To select existing photos for profile pictures and import recipes from saved images.</li>
            <li><strong>Notifications:</strong> To send cooking timer alerts, recipe reminders, and app updates. You can customize notification preferences in Settings.</li>
            <li><strong>Reminders & Calendar:</strong> To export grocery lists to your Reminders app and create cooking timer reminders. Only used when you explicitly choose to export data.</li>
            <li><strong>Notes:</strong> To export grocery lists to your Notes app when you select this option.</li>
            <li><strong>Background Processing:</strong> To complete recipe downloads and sync data when the app is not actively in use.</li>
          </ul>
          <p>All permissions are optional and can be revoked in your device's Settings app.</p>
        </section>

        <section className="privacy-section">
          <h2>Offline Storage & Downloads</h2>
          <p>Chowboy allows you to download recipes for offline use:</p>
          <ul className="bullet-list">
            <li><strong>Downloaded Content:</strong> Recipe text, images, and associated data are stored locally on your device in the app's sandbox.</li>
            <li><strong>Storage Location:</strong> Offline recipes are stored in your device's Documents directory and are included in device backups.</li>
            <li><strong>Data Management:</strong> You can manage downloaded recipes in the app's Offline section. Deleting the app will remove all offline content.</li>
            <li><strong>Cache Management:</strong> The app automatically manages cached images and data to optimize storage space.</li>
            <li><strong>No External Access:</strong> Offline data cannot be accessed by other apps or services.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>Payment & Subscription Information</h2>
          <p>Chowboy uses Apple's StoreKit for all payment processing:</p>
          <ul className="bullet-list">
            <li><strong>Apple Handles Payments:</strong> We never collect or store your payment method, billing address, or financial information. All payments are processed by Apple.</li>
            <li><strong>What We Receive:</strong> We only receive confirmation of your subscription status, transaction IDs, and entitlement information from Apple.</li>
            <li><strong>Family Sharing:</strong> If you share your subscription through Apple's Family Sharing, we receive information about the family sharing status but not personal details of family members.</li>
            <li><strong>Usage Tracking:</strong> We track your AI feature usage and subscription balance for billing and feature access purposes.</li>
            <li><strong>Offline Purchase Queue:</strong> If a purchase cannot be verified immediately, it may be queued locally until network connectivity is restored.</li>
            <li><strong>Subscription Verification:</strong> Purchase receipts are verified with our servers to ensure proper access to premium features.</li>
            <li><strong>Server Validation:</strong> Subscription status is validated server-side to prevent unauthorized access to premium content.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>App Tracking Transparency</h2>
          <p>Our iOS app uses Apple's App Tracking Transparency framework to request permission before tracking you across apps and websites owned by other companies. We will only track you if you grant permission and you can change this at any time in your device's Settings under Privacy &gt; Tracking.</p>
        </section>

        <section className="privacy-section">
          <h2>How Information is Used</h2>
          <p>We use the information we collect to:</p>
          <ul className="bullet-list">
            <li>Provide and maintain the app's functionality</li>
            <li>Create and manage your account</li>
            <li>Deliver personalized recipe recommendations</li>
            <li>Improve our services and develop new features</li>
            <li>Communicate with you about app updates or changes</li>
            <li>Protect the security and integrity of our services</li>
          </ul>
          <p>
            We do not share personal information with outside parties except to the extent necessary to accomplish 
            Chowboy's functionality.
          </p>
          <p>
            We may disclose your information in response to legal requirements, to exercise our legal rights, to investigate 
            suspected illegal activities or violations of our terms, or to protect our rights and property.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Security Measures</h2>
          <p>
            We have implemented appropriate technical and organizational security measures to protect your personal data from 
            accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.
          </p>
          <p>
            These measures include encryption, secure data storage, and restricted access controls. All communication with our 
            servers requires HTTPS with certificate pinning.
          </p>
          <p>
            We carefully select our service providers with security considerations in mind and ensure they maintain appropriate 
            security standards.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Data Retention</h2>
          <p>
            We retain your personal data for as long as necessary to provide you with our services and for legitimate business 
            purposes such as maintaining the performance of the app, making data-driven decisions about new features, complying 
            with our legal obligations, and resolving disputes.
          </p>
          <p>
            After account deletion or upon receiving a valid deletion request, we will delete or anonymize your personal data 
            within 30 days, except where we have legal obligations that require longer retention periods.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Your Rights</h2>
          <p>Under applicable privacy laws, you have several rights regarding your personal data:</p>
          <ul className="bullet-list">
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
            <li><strong>Erasure:</strong> Request deletion of your personal data (except where we have legal obligations)</li>
            <li><strong>Data Portability:</strong> Receive your data in a structured, commonly used format</li>
            <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
            <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
            <li><strong>Withdraw Consent:</strong> Withdraw previously given consent for specific processing</li>
          </ul>
          <p>
            To exercise these rights, contact us at <a href="mailto:support@chowboy.io">support@chowboy.io</a>. 
            We may request verification of your identity before fulfilling your request.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Children's Privacy</h2>
          <p>
            Our services are not directed to children under 13 years of age. We do not knowingly collect personal information 
            from children under 13. If you become aware that a child has provided us with personal information without parental 
            consent, please contact us, and we will take steps to remove such information.
          </p>
        </section>

        <section className="privacy-section">
          <h2>International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your country of residence. 
            These countries may have different data protection laws.
          </p>
          <p>
            When we transfer your personal data to other countries, we use appropriate safeguards such as Standard Contractual 
            Clauses approved by relevant authorities and implement additional measures to protect your data when necessary.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, 
            legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy in the app 
            and updating the 'Last Updated' date.
          </p>
          <p>
            Continued use of our services after such changes constitutes your acceptance of the revised Privacy Policy.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Contact Us</h2>
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="contact-email">
            <a href="mailto:support@chowboy.io">support@chowboy.io</a>
          </p>
          <p>
            You have the right to lodge a complaint with your local data protection authority if you believe we have not 
            complied with applicable data protection laws.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy; 