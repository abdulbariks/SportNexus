import React from "react";

const FrequentlyAskedQuestions = () => {
  return (
    <section className="w-11/12 mx-auto dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          How it works
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How can I register for the sports event?
            </summary>
            <div className="px-4 pb-4">
              <p>
                You can register online through our official website. Simply go
                to the “Register Now” section, fill out the required details,
                and complete the payment process. Once registered, you will
                receive a confirmation email with your event pass.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What should I bring on the event day?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Please bring your registration confirmation (printed or
                digital), a valid photo ID, and any personal sports gear if
                required. Water stations and basic first-aid will be available
                at the venue.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Can I get a refund if I am unable to attend?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Refunds are available up to 7 days before the event date.
                Unfortunately, cancellations after that period cannot be
                refunded. However, you may transfer your registration to another
                participant by contacting our support team.
              </p>
              <p>
                Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus
                autem eaque unde possimus quae.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
