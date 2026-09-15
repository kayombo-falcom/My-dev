export type Tone = 'primary' | 'secondary' | 'accent';

export const toneClasses: Record<Tone, string> = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  accent: 'bg-accent/10 text-accent',
};
