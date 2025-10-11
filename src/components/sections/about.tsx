import { personalData } from "@/lib/data";
import { Section, SectionHeading } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutSection() {
  return (
    <Section id="about" className="bg-background">
      <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <SectionHeading>About Me</SectionHeading>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {personalData.bio}
          </p>
        </div>
        <div className="flex flex-col items-start md:items-center gap-4 rounded-lg bg-secondary p-6">
            <h3 className="font-headline text-2xl font-semibold">Connect with me</h3>
            <div className="flex gap-4">
            {personalData.contact.social.map((social) => (
                <Button key={social.name} asChild variant="outline" size="icon">
                    <Link href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                        <social.icon className="h-5 w-5" />
                    </Link>
                </Button>
            ))}
            </div>
        </div>
      </div>
    </Section>
  );
}
