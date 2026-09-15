import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../../components/ui/button';

export function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-[1600px] flex-col items-center px-6 py-24 text-center md:px-8 md:py-32">
      <p className="text-sm uppercase tracking-[0.24em] text-primary">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">Page not found</h1>
      <p className="mt-5 max-w-md text-base leading-8 text-muted-foreground">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Button asChild size="lg" className="group mt-9 rounded-full px-7">
        <Link to="/">
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to home
        </Link>
      </Button>
    </div>
  );
}
