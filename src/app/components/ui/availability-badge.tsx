export function AvailabilityBadge() {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium text-muted-foreground">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
      </span>
      Available for select freelance work
    </span>
  );
}
