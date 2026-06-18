const TermsAndConditionsPage = () => {
  const heading = "Terms and Conditions";

  const subHeading =
    "Please read these terms and conditions carefully before using our services.";

  const content = `
    <h2>Acceptance of Terms</h2>
    <p>
      By accessing and using our website and services, you agree to be bound
      by these Terms and Conditions and all applicable laws and regulations.
    </p>

    <h2>Use of Services</h2>
    <p>
      You agree to use our services only for lawful purposes and in a manner
      that does not infringe the rights of others or restrict their use of
      the services.
    </p>

    <ul>
      <li>Provide accurate information when booking services</li>
      <li>Comply with all applicable laws and regulations</li>
      <li>Respect our staff and service providers</li>
      <li>Avoid misuse of the platform or services</li>
    </ul>

    <h2>Payments and Bookings</h2>
    <p>
      All bookings are subject to availability. Payment terms, cancellation
      policies, and refund conditions may vary depending on the service
      selected.
    </p>

    <h2>Limitation of Liability</h2>
    <p>
      We are not liable for any indirect, incidental, or consequential damages
      arising from the use of our services except where required by law.
    </p>

    <h2>Changes to Terms</h2>
    <p>
      We reserve the right to update or modify these Terms and Conditions at
      any time. Continued use of our services constitutes acceptance of the
      updated terms.
    </p>

    <h2>Contact Information</h2>
    <p>
      If you have any questions regarding these Terms and Conditions, please
      contact our support team.
    </p>
  `;

  return (
    <div className="w-full bg-white font-sans">

      {/* ── Hero Header ── */}
      <section className="font-rethink bg-[#08203C] px-4 sm:px-6 lg:px-16 py-4 mx-2 mb-2 rounded-b-3xl">
        <div className="w-full flex flex-col justify-center items-center gap-5 md:gap-6 py-20 md:py-25">
          <h1 className="text-white text-center font-bold text-[32px] md:text-[48px] leading-tight px-6">
            {heading}
          </h1>
          <p className="text-white/90 text-center text-sm md:text-lg leading-relaxed font-medium max-w-200 w-full px-6">
            {subHeading}
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-275 px-6 md:px-10 mt-16 md:mt-20 pb-24">
          <style>{`
            .cms-rich-content p {
              font-size: 15px;
              line-height: 1.75;
              color: #1F2937;
              margin-bottom: 0.6rem;
            }

            .cms-rich-content h2 {
              font-size: 24px;
              font-weight: 700;
              color: #111827;
              margin-top: 2rem;
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
              font-size: 15px;
              line-height: 1.75;
              color: #1F2937;
              margin-bottom: 0.4rem;
            }

            .cms-rich-content ul li::before {
              content: "•";
              position: absolute;
              left: 0.25rem;
              top: 0;
              color: #1F2937;
              font-size: 1rem;
              line-height: 1.75;
            }

            .cms-rich-content strong {
              font-weight: 700;
              color: #111827;
            }

            .cms-rich-content a {
              color: #2F6BE0;
              text-decoration: underline;
            }

            .cms-rich-content p:empty,
            .cms-rich-content p br:only-child {
              margin-bottom: 0.1rem;
              line-height: 1;
            }

            @media (min-width: 768px) {
              .cms-rich-content p,
              .cms-rich-content ul li {
                font-size: 16px;
              }

              .cms-rich-content h2 {
                font-size: 28px;
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

export default TermsAndConditionsPage;