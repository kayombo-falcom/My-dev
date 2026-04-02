import { User, Award, Heart } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <User className="w-48 h-48 text-primary" />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Full Stack Developer and Graphic Designer with over 5 years of experience
              creating seamless digital experiences. I bridge the gap between development and design,
              ensuring every project is both functional and visually stunning.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans from crafting responsive web applications to designing compelling
              visual identities. I believe great products are born from the perfect marriage of
              beautiful design and robust code.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <Award className="w-8 h-8 text-primary mb-3" />
                <h3 className="mb-2">50+</h3>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <Heart className="w-8 h-8 text-accent mb-3" />
                <h3 className="mb-2">40+</h3>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
