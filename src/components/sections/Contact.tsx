'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Section } from '@/components/layout';

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY!;
const WEB3FORMS_ENDPOINT = process.env.NEXT_PUBLIC_WEB3FORMS_ENDPOINT!;

// Underline-only fields; focus thickens the underline and turns it blue.
const fieldClass =
  'rounded-none border-0 border-b border-input bg-transparent px-0 shadow-none focus-visible:border-primary focus-visible:shadow-[0_1px_0_0_var(--color-primary)] focus-visible:ring-0';

const labelClass = 'mb-1 block text-sm text-muted-foreground';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(form);
    formData.append('access_key', WEB3FORMS_KEY);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" title="Contact">
      <p className="text-lg text-muted-foreground">
        Available for freelance work.
      </p>
      <a
        href="mailto:risyadzyn@gmail.com"
        className="text-link mt-2 inline-block break-all text-3xl font-semibold tracking-tight md:text-5xl"
      >
        risyadzyn@gmail.com
      </a>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
        <a
          href="https://calendly.com/risyadzyn/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          Book a 30-minute call
        </a>
        <a
          href="https://github.com/risyadzyn21"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/risyad-ziyan-arkham/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          LinkedIn
        </a>
      </div>

      <form
        className="mt-16 max-w-xl space-y-8 border-t border-border pt-10"
        onSubmit={handleSubmit}
      >
        <h3 className="text-xl font-semibold tracking-tight">
          Or send a message
        </h3>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              Name
            </label>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              className={fieldClass}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={fieldClass}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className={labelClass}>
            Subject
          </label>
          <Input
            id="subject"
            name="subject"
            placeholder="Job offer, project inquiry or collaboration"
            className={fieldClass}
            required
          />
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            className={`${fieldClass} min-h-28`}
            required
          />
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <Button type="submit" size="lg" disabled={isSubmitting}>
            {isSubmitting ? 'Sending' : 'Send message'}
          </Button>

          <p role="status" className="text-sm">
            {status === 'success' && 'Message sent. I will reply by email.'}
            {status === 'error' && (
              <span className="text-destructive">
                Message not sent. Check your connection and try again, or email
                me directly.
              </span>
            )}
          </p>
        </div>
      </form>
    </Section>
  );
};

export default Contact;
