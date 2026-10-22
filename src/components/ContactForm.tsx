import { useState, type FormEvent, type ReactNode } from 'react'
import { mailtoHref, site } from '../config.ts'
import { pressable } from './ui/CtaButton.tsx'
import { CheckCircleIcon } from './icons/Icons.tsx'

// Must match the hidden static form in index.html, which is what Netlify detects at deploy time.
export const FORM_NAME = 'contact'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const fieldClasses =
  'w-full rounded-xl border-2 border-ink bg-white px-4 py-3 text-[17px] text-ink placeholder:text-faint focus:border-accent focus:ring-4 focus:ring-accent/25 focus:outline-none'

function Field({ label, htmlFor, children }: { label: ReactNode; htmlFor: string; children: ReactNode }) {
  return (
    <div className="flex min-w-0 flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-[15px] font-semibold">
        {label}
      </label>
      {children}
    </div>
  )
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    const data = new FormData(event.currentTarget)
    const body = new URLSearchParams([...data.entries()].map(([key, value]) => [key, String(value)])).toString()
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
      if (!response.ok) throw new Error(`Form submission failed: ${response.status}`)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="flex flex-col items-center gap-3 px-2 py-8 text-center">
        <CheckCircleIcon />
        <h3 className="m-0 font-display text-[28px] leading-[1.15] font-bold tracking-[-0.02em]">Thanks, we got your message.</h3>
        <p className="m-0 max-w-[380px] text-body">We'll read it and get back to you soon with ideas tailored to your business.</p>
      </div>
    )
  }

  return (
    <form name={FORM_NAME} method="POST" onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input type="hidden" name="form-name" value={FORM_NAME} />
      {/* Honeypot: hidden from people, filled in by spam bots, which makes Netlify drop the submission. */}
      <p className="hidden">
        <label>
          Don't fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="contact-name">
          <input id="contact-name" name="name" type="text" required autoComplete="name" className={fieldClasses} />
        </Field>
        <Field label="Email" htmlFor="contact-email">
          <input id="contact-email" name="email" type="email" required autoComplete="email" className={fieldClasses} />
        </Field>
      </div>
      <Field
        label={
          <>
            Business name <span className="font-normal text-subtle">(optional)</span>
          </>
        }
        htmlFor="contact-business"
      >
        <input id="contact-business" name="business" type="text" autoComplete="organization" className={fieldClasses} />
      </Field>
      <Field label="What's taking up your time?" htmlFor="contact-message">
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          placeholder="e.g. booking reminders, invoices, following up with customers"
          className={`${fieldClasses} resize-y`}
        />
      </Field>
      {status === 'error' && (
        <p role="alert" className="m-0 rounded-xl bg-peach px-4 py-3 text-[15px]">
          Sorry, your message didn't go through. Please try again, or email us at{' '}
          <a href={mailtoHref} className="font-semibold underline">
            {site.email}
          </a>
          .
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className={`inline-flex cursor-pointer items-center justify-center self-stretch rounded-xl border-2 border-ink bg-accent px-7 py-3.5 text-[18px] font-semibold text-white shadow-hard-sm disabled:cursor-wait disabled:opacity-70 sm:self-start ${pressable}`}
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
