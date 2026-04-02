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
    <section id="contact" className="px-6 py-24 md:px-8">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(18rem,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-10">
          <div className="glass-panel p-8 md:p-10">
            <span className="section-kicker">Contact</span>
            <h2 className="mt-5 text-4xl md:text-5xl">Bring the next idea to life.</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Have a product, brand refresh, or portfolio project in mind? I can help shape the visual
              direction and build the frontend with the same level of care.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">Best for</p>
                <p className="mt-2">Landing pages, product UI, portfolio sites, and design-to-code work.</p>
              </div>
              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">Response time</p>
                <p className="mt-2">Usually within 1 business day for new project inquiries.</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-panel space-y-6 self-start p-8 md:p-10">
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
                className="w-full rounded-2xl border border-border bg-background/80 px-4 py-3.5 transition-all duration-300 focus:border-primary focus:outline-none"
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
                className="w-full rounded-2xl border border-border bg-background/80 px-4 py-3.5 transition-all duration-300 focus:border-primary focus:outline-none"
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
                className="min-h-[170px] w-full resize-vertical rounded-2xl border border-border bg-background/80 px-4 py-3.5 transition-all duration-300 focus:border-primary focus:outline-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary/90"
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
