import { personalData } from "@/lib/data";
import { Section, SectionHeading } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
        <Card className="max-w-md mx-auto">
          <CardContent className="p-6 space-y-4 text-center">
            <h3 className="text-lg font-semibold">Connect with me</h3>
            <p className="text-muted-foreground">
              I'm always open to connecting with like-minded individuals. Feel free to reach out on social media.
            </p>
            <div className="flex justify-center gap-4">
              {personalData.contact.social.map((social) => (
                <Button key={social.name} variant="outline" size="icon" asChild>
                  <Link href={social.url} target="_blank" aria-label={social.name}>
                    <social.icon className="h-5 w-5" />
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
