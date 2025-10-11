import { personalData } from "@/lib/data";
import { Section, SectionHeading } from "@/components/section-wrapper";

export function AboutSection() {
  return (
    <Section id="about" className="bg-background">
      <div className="grid items-start gap-12">
        <div className="space-y-4">
          <SectionHeading>About Me</SectionHeading>
          <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
            {personalData.bio}
          </p>
        </div>
      </div>
    </Section>
  );
}
