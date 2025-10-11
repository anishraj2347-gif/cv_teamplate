import { personalData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { AnimatedScene } from "@/components/3d/animated-scene";

export function HeroSection() {
  return (
    <section id="hero" className="relative h-[100svh] min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      <AnimatedScene />
      <div className="relative z-10 flex flex-col items-center space-y-6">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          {personalData.name}
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          {personalData.title}
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-8 w-8 animate-bounce text-primary" />
        </Link>
      </div>
    </section>
  );
}
