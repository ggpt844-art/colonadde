"use client";

import { useState } from "react";
import { ChevronRight, Check } from "lucide-react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <form
        className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        aria-label="Subscribe for the blog launch"
      >
        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
        <input
          id="newsletter-email"
          type="email"
          required
          disabled={submitted}
          placeholder="you@email.com"
          className="flex-1 rounded-full bg-white border border-black/10 px-5 py-3.5 text-[15px] text-[#1a1a1a] placeholder:text-[#4a4a4a]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67a1f] disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={submitted}
          className="rounded-full bg-[#1a1a1a] text-white px-6 py-3.5 font-bold text-[14px] hover:bg-[#c89535] hover:text-[#1a1a1a] transition-colors inline-flex items-center justify-center gap-2 disabled:bg-[#6f8a7f]"
        >
          {submitted ? (
            <>
              <Check size={16} />
              You&apos;re in
            </>
          ) : (
            <>
              Notify Me
              <ChevronRight size={16} />
            </>
          )}
        </button>
      </form>
      <p className="mt-3 text-[12px] text-[#4a4a4a]/70">
        {submitted
          ? "We'll send you the first three posts the moment they go live."
          : "No spam. One short email when the blog launches. Unsubscribe anytime."}
      </p>
    </>
  );
}
