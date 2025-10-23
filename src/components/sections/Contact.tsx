'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY!;
const WEB3FORMS_ENDPOINT = process.env.NEXT_PUBLIC_WEB3FORMS_ENDPOINT!;

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
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text pb-2">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear from you. Let's discuss
              how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 glass card-shadow">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="glass"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      className="glass"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project inquiry"
                    className="glass"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    className="glass min-h-[120px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full glass hover-scaleup glow cursor-pointer"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                {status === 'success' && (
                  <p className="text-green-500 text-sm text-center">
                    ✅ Message sent successfully!
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center">
                    ❌ Failed to send message. Please try again.
                  </p>
                )}
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="p-6 glass card-shadow">
                <h3 className="text-xl font-bold mb-4">Get in touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>risyadzyn@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 text-primary flex items-center justify-center">
                      📍
                    </span>
                    <span>Serang, Indonesia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 text-primary flex items-center justify-center">
                      🕒
                    </span>
                    <span>Available for freelance work</span>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-6 glass card-shadow">
                <h3 className="text-xl font-bold mb-4">Follow me</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://github.com/risyadzyn21"
                    target="_blank"
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth hover-scaleup"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/risyad-ziyan-arkham/"
                    target="_blank"
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth hover-scaleup"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </Card>

              {/* Call to Action */}
              <Card className="p-6 glass card-shadow bg-gradient-primary text-primary-foreground">
                <h3 className="text-xl font-bold mb-2">
                  Ready to start your project?
                </h3>
                <p className="text-primary-foreground/80 mb-4">
                  Let's discuss your ideas and create something amazing
                  together.
                </p>
                <Button variant="secondary" className="w-full cursor-pointer">
                  Schedule a Call
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
