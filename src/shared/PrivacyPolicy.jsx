const PrivacyPolicyPage = () => {
  const heading = "Privacy Policy";

  const subHeading =
    "Please read our privacy policy carefully to understand how we collect, use, and protect your information.";

  const content = `
    <h2>Information We Collect</h2>
    <p>
      We may collect personal information such as your name, email address,
      phone number, and other details when you use our services.
    </p>

    <h2>How We Use Your Information</h2>
    <p>
      We use the information we collect to provide, maintain, and improve our
      services and customer experience.
    </p>

    <ul>
      <li>Provide requested services</li>
      <li>Respond to customer inquiries</li>
      <li>Improve website functionality</li>
      <li>Send important service updates</li>
    </ul>

    <h2>Data Security</h2>
    <p>
      We take reasonable measures to protect your personal information from
      unauthorized access, disclosure, or misuse.
    </p>

    <h2>Third-Party Services</h2>
    <p>
      We may use trusted third-party service providers to help operate our
      website and services. These providers are required to keep your
      information secure.
    </p>

    <h2>Contact Us</h2>
    <p>
      If you have any questions regarding this Privacy Policy, please contact us.
    </p>
  `;

  return (
    <div className="w-full bg-white">
      <div className="w-full mx-auto flex flex-col items-center">

        {/* ── Hero Header ── */}
        <section className="w-full bg-[#08203C] px-4 sm:px-6 lg:px-16 py-4 mx-2 mb-2 rounded-b-3xl">
          <div className="w-full flex flex-col justify-center items-center gap-5 md:gap-6 py-20 md:py-25">
            <h1 className="text-white text-center font-bold text-[28px] sm:text-4xl md:text-[48px] leading-tight px-6">
              {heading}
            </h1>
            <p className="text-white/90 text-center text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-175 px-6">
              {subHeading}
            </p>
          </div>
        </section>

        {/* ── Content ── */}
        <div className="w-[90%] max-w-275 mt-12 md:mt-20 pb-20">
          <style>{`
            .cms-rich-content p {
              font-size: 16px;
              line-height: 1.75;
              color: #1F2937;
              margin-bottom: 0.75rem;
            }

            .cms-rich-content h2 {
              font-size: 22px;
              font-weight: 700;
              color: #1C2532;
              margin-top: 2.5rem;
              margin-bottom: 0.75rem;
              line-height: 1.3;
            }

            .cms-rich-content ul {
              list-style: none;
              padding-left: 0;
              margin-bottom: 1rem;
            }

            .cms-rich-content ul li {
              position: relative;
              padding-left: 1.25rem;
              font-size: 16px;
              line-height: 1.75;
              color: #4C545F;
              margin-bottom: 0.5rem;
            }

            .cms-rich-content ul li::before {
              content: "•";
              position: absolute;
              left: 0.25rem;
              top: 0;
            }

            .cms-rich-content strong {
              font-weight: 700;
            }

            .cms-rich-content a {
              color: #2F6BE0;
              text-decoration: underline;
            }

            @media (min-width: 768px) {
              .cms-rich-content p,
              .cms-rich-content ul li {
                font-size: 18px;
              }

              .cms-rich-content h2 {
                font-size: 32px;
              }
            }

            @media (min-width: 1024px) {
              .cms-rich-content p,
              .cms-rich-content ul li {
                font-size: 20px;
              }
            }
          `}</style>

          <div
            className="cms-rich-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicyPage;