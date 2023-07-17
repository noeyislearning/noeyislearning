import React from "react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="mx-auto mb-12 mt-24 max-w-screen-sm text-white lg:mb-24 lg:mt-48">
        <div className="flex flex-col p-4">
          <div className="flex flex-col gap-2">
            <h1 className="mb-4 text-3xl font-bold lg:text-4xl">
              Privay Policy
            </h1>
            <time className="text-sm text-gray-500">
              Effective Date: July 14, 2023
            </time>
            <div className="flex flex-col gap-4 ">
              <h3 className="text-sm lg:text-base">
                This document is meant to help you understand what information
                we collect, how we use it, and what choices you have when you
                use our website -{" "}
                <Link
                  href={"https://noeyislearning.dev"}
                  className="text-blue-500 underline"
                >
                  noeyislearning.dev
                </Link>
                .
              </h3>
              <h3 className="text-sm lg:text-base">
                We are committed to protecting your privacy and handling your
                data in an open and transparent manner, and as such, our
                practices fully comply with the applicable data protection laws.
              </h3>
              <h2 className="mt-4 text-lg font-bold lg:text-xl">
                1. Information We Collect
              </h2>
              <h3 className="text-sm lg:text-base">
                As a general rule,{" "}
                <span className="text-blue-500">Noey Ignacio</span>, the
                personal portfolio website, is structured in such a way that you
                can browse and access our services without revealing any
                personal data. The only personal information that we collect is
                the information you provide voluntarily.
              </h3>
              <h3 className="text-sm lg:text-base">
                1.1. <span className="font-bold">Email</span>: If you choose to
                contact us via our contact form or by sending us an email
                directly, we collect your email address solely for the purpose
                of responding to your queries. We do not use your email for
                marketing purposes unless you explicitly opt-in for such
                communications.
              </h3>
              <h2 className="mt-4 text-lg font-bold lg:text-xl">
                2. How We Use Your Information
              </h2>
              <h3 className="text-sm lg:text-base">
                We use the information you provide to us primarily to
                communicate with you, respond to your inquiries, and to improve
                our services. We strictly adhere to a &apos;minimum data&apos;
                principle and only process necessary data.
              </h3>
              <h2 className="mt-4 text-lg font-bold lg:text-xl">
                3. Information Sharing and Disclosure
              </h2>
              <h3 className="text-sm lg:text-base">
                Your privacy is important to us. We do not sell, rent, or
                otherwise disclose your personal data to third parties without
                your consent, except in the case of legal requirements.
              </h3>
              <h2 className="mt-4 text-lg font-bold lg:text-xl">
                4. Data Retention
              </h2>
              <h3 className="text-sm lg:text-base">
                We retain personal data only as long as necessary to fulfill the
                purposes for which it was collected, or as required by
                applicable laws or regulations.
              </h3>
              <h2 className="mt-4 text-lg font-bold lg:text-xl">
                5. Your Rights and Choices
              </h2>
              <h3 className="text-sm lg:text-base">
                You have the right to access, correct, or delete your personal
                information at any time. If you wish to exercise these rights,
                please contact us directly at{" "}
                <Link
                  href={"mailto:hello@noeyislearning.dev"}
                  className="text-blue-500 underline"
                >
                  hello@noeyislearning.dev
                </Link>
                .
              </h3>
              <h2 className="mt-4 text-lg font-bold lg:text-xl">6. Security</h2>
              <h3 className="text-sm lg:text-base">
                We take security seriously and do what we can within
                commercially acceptable means to protect your personal
                information from loss or theft, as well as unauthorized access,
                disclosure, copying, use, or modification.
              </h3>
              <h2 className="mt-4 text-lg font-bold lg:text-xl">
                7. Updates to This Privacy Policy
              </h2>
              <h3 className="text-sm lg:text-base">
                We may update this policy from time to time. The updated version
                will be indicated by an updated &quot;Last Updated&quot; date
                and the updated version will be effective as soon as it is
                accessible.
              </h3>
              <h3 className="mt-8 text-sm lg:text-base">
                If you have questions or comments about this policy, you may
                email me at{" "}
                <Link
                  href={"mailto:hello@noeyislearning.dev"}
                  className="text-blue-500 underline"
                >
                  hello@noeyislearning.dev
                </Link>
                .
              </h3>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
