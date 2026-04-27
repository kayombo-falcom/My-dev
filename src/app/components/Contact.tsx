import { useState } from 'react';
import { Mail, MessageSquare, Send, User as UserIcon } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-background px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-8 lg:grid-cols-[minmax(18rem,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-10">
          <div>
            <div className="max-w-3xl">
              <div className="flex items-start gap-4">
                <span className="mt-2 h-12 w-1.5 bg-[#56b98b]" />
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
              <div className="border border-border p-4">
                <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">Best for</p>
                <p className="mt-2">Landing pages, product UI, portfolio sites, and design-to-code work.</p>
              </div>
              <div className="border border-border p-4">
                <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">Response time</p>
                <p className="mt-2">Usually within 1 business day for new project inquiries.</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 self-start border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
            <div>
              <label htmlFor="name" className="mb-2 flex items-center gap-2 text-sm">
                <UserIcon className="h-4 w-4" />
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3.5 transition-colors duration-300 focus:border-primary focus:outline-none"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3.5 transition-colors duration-300 focus:border-primary focus:outline-none"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 flex items-center gap-2 text-sm">
                <MessageSquare className="h-4 w-4" />
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[170px] w-full resize-vertical border border-border bg-background px-4 py-3.5 transition-colors duration-300 focus:border-primary focus:outline-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-primary-foreground transition-colors duration-300 hover:bg-primary/90"
            >
              <Send className="h-5 w-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
