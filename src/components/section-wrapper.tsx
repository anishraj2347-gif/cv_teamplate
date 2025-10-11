import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("py-12 md:py-24 lg:py-32", className)}>
      <div className="container px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2 className={cn("font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl", className)}>
      {children}
    </h2>
  );
}

export function SectionSubheading({ children, className }: SectionSubheadingProps) {
  return (
    <p className={cn("mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed", className)}>
      {children}
    </p>
  );
}
