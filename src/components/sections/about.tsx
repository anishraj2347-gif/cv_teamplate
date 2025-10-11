import { personalData } from "@/lib/data";
import { Section, SectionHeading } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export function AboutSection() {
  return (
    <Section id="about" className="bg-background">
      <div className="space-y-12">
        <div className="space-y-4">
          <SectionHeading>About Me</SectionHeading>
          <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
            {personalData.bio}
          </p>
        </div>
        
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold font-headline">Let's Connect</h3>
              <p className="text-muted-foreground mt-2">
                I'm always open to new opportunities and collaborations.
              </p>
            </div>
            <div className="flex items-center gap-4">
                {personalData.contact.social.map((social) => (
                  <Button key={social.name} variant="outline" size="icon" asChild>
                    <Link href={social.url} target="_blank" aria-label={social.name}>
                      <social.icon className="h-5 w-5" />
                    </Link>
                  </Button>
                ))}
                <Button asChild>
                  <a href={`mailto:${personalData.contact.email}`}>
                    Email Me
                    <MoveRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}
