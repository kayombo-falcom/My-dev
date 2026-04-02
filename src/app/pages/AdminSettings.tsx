import { Save } from 'lucide-react';

export function AdminSettings() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your portfolio settings and preferences.</p>
      </div>

      <div className="max-w-3xl space-y-6">
        <div className="p-6 rounded-xl bg-card border border-border">
          <h3 className="text-xl mb-4">Profile Information</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm mb-2 block">Full Name</label>
              <input
                type="text"
                defaultValue="Alex Morgan"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-all duration-300"
              />
            </div>
            <div>
              <label className="text-sm mb-2 block">Title</label>
              <input
                type="text"
                defaultValue="Full Stack Developer & Graphic Designer"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-all duration-300"
              />
            </div>
            <div>
              <label className="text-sm mb-2 block">Email</label>
              <input
                type="email"
                defaultValue="alex@example.com"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-all duration-300"
              />
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-card border border-border">
          <h3 className="text-xl mb-4">Social Links</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm mb-2 block">GitHub URL</label>
              <input
                type="url"
                defaultValue="https://github.com/alexmorgan"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-all duration-300"
              />
            </div>
            <div>
              <label className="text-sm mb-2 block">LinkedIn URL</label>
              <input
                type="url"
                defaultValue="https://linkedin.com/in/alexmorgan"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-all duration-300"
              />
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-card border border-border">
          <h3 className="text-xl mb-4">About Section</h3>
          <div>
            <label className="text-sm mb-2 block">Bio</label>
            <textarea
              rows={5}
              defaultValue="I'm a passionate Full Stack Developer and Graphic Designer with over 5 years of experience creating seamless digital experiences."
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-all duration-300 resize-vertical"
            />
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300">
          <Save className="w-5 h-5" />
          Save Changes
        </button>
      </div>
    </div>
  );
}
