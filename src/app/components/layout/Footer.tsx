import { Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 md:px-8">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-tight text-foreground">HIRORIMS KAYOMBO</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Software Developer &amp; Graphic Designer
          </p>
        </div>

        <a
          href="mailto:hirorimskayombo@gmail.com"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
        >
          <Mail className="h-4 w-4" />
          Email
        </a>
      </div>

      <p className="mx-auto mt-8 max-w-[1600px] text-xs text-muted-foreground/80">
        © {new Date().getFullYear()} Hirorims Kayombo. All rights reserved.
      </p>
    </footer>
  );
}
