import { useState } from 'react';
import { Mail, MessageSquare, Send, User as UserIcon } from 'lucide-react';
import { toast } from 'sonner';
import { Reveal } from '../motion/Reveal';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

const CONTACT_EMAIL = 'hirorimskayombo@gmail.com';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Portfolio inquiry from ${formData.name}`;
    const body = `${formData.message}\n\n— ${formData.name} (${formData.email})`;
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.click();

    toast.success('Opening your email app to send this message.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-background px-6 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-8 lg:grid-cols-[minmax(18rem,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-10">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-start gap-4">
                <span className="accent-bar mt-2 h-12 w-1.5 rounded-full" />
                <div>
                  <h2 className="text-4xl font-semibold text-foreground md:text-5xl">
                    Reach Me
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Have a product, brand refresh, or portfolio project in mind? I can help shape the visual
              direction and build the frontend with the same level of care.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-border bg-card/60 p-4">
                <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">Best for</p>
                <p className="mt-2">Landing pages, product UI, portfolio sites, and design-to-code work.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card/60 p-4">
                <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">Response time</p>
                <p className="mt-2">Usually within 1 business day for new project inquiries.</p>
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="space-y-6 self-start border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0"
          >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="mb-2">
                <UserIcon className="h-4 w-4" />
                Name
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-auto rounded-xl px-4 py-3.5"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="mb-2">
                <Mail className="h-4 w-4" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-auto rounded-xl px-4 py-3.5"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="message" className="mb-2">
                <MessageSquare className="h-4 w-4" />
                Message
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[170px] resize-y rounded-xl px-4 py-3.5"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full rounded-lg">
              <Send className="h-5 w-5" />
              Send Message
            </Button>
          </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
