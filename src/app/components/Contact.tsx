import { useState } from 'react';
import { Send, Mail, User as UserIcon, MessageSquare } from 'lucide-react';

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
    <section id="contact" className="py-20 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="flex items-center gap-2 mb-2 text-sm">
              <UserIcon className="w-4 h-4" />
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-all duration-300"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="flex items-center gap-2 mb-2 text-sm">
              <Mail className="w-4 h-4" />
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-all duration-300"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="flex items-center gap-2 mb-2 text-sm">
              <MessageSquare className="w-4 h-4" />
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-all duration-300 min-h-[150px] resize-vertical"
              placeholder="Tell me about your project..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
