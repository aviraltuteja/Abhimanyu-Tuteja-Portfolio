"use client";

import { useState, type FormEvent } from "react";

type FormFields = {
  name: string;
  email: string;
  inquiry: string;
  message: string;
};

const INITIAL_FIELDS: FormFields = {
  name: "",
  email: "",
  inquiry: "coaching",
  message: "",
};

const INQUIRY_OPTIONS = [
  { value: "coaching", label: "Maths coaching for my child" },
  { value: "partnership", label: "Partnership or collaboration" },
  { value: "general", label: "General enquiry" },
];

const inputClassName =
  "w-full rounded-xl border border-border-soft bg-page-bg px-4 py-3 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20";

export function ContactForm() {
  const [fields, setFields] = useState<FormFields>(INITIAL_FIELDS);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="rounded-3xl border border-border-soft bg-panel p-8 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary">
          Message received
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-text-primary">
          Thank you for reaching out.
        </h2>
        <p className="mt-3 max-w-md text-sm leading-7 text-text-secondary">
          Your enquiry has been noted. A response typically follows within one
          to two business days with next steps for a consultation.
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setFields(INITIAL_FIELDS);
          }}
          className="mt-6 text-sm font-semibold text-brand-primary transition hover:text-brand-primary-hover"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border-soft bg-panel p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-text-primary">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={fields.name}
            onChange={(event) =>
              setFields((current) => ({ ...current, name: event.target.value }))
            }
            placeholder="Your name"
            className={inputClassName}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-text-primary">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={fields.email}
            onChange={(event) =>
              setFields((current) => ({ ...current, email: event.target.value }))
            }
            placeholder="you@example.com"
            className={inputClassName}
          />
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <label htmlFor="inquiry" className="text-sm font-medium text-text-primary">
          What can we help with?
        </label>
        <select
          id="inquiry"
          name="inquiry"
          value={fields.inquiry}
          onChange={(event) =>
            setFields((current) => ({ ...current, inquiry: event.target.value }))
          }
          className={inputClassName}
        >
          {INQUIRY_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5 space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-text-primary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={fields.message}
          onChange={(event) =>
            setFields((current) => ({ ...current, message: event.target.value }))
          }
          placeholder="Share the student's grade, exam board, timeline, and what you are hoping to improve."
          className={`${inputClassName} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex rounded-xl bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-primary-hover"
      >
        Request Consultation
      </button>
    </form>
  );
}
