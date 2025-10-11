import { educationData } from "@/lib/data";
import { Section, SectionHeading, SectionSubheading } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <Section id="education" className="bg-background">
      <div className="text-center space-y-4 mb-12">
        <SectionHeading>Education</SectionHeading>
        <SectionSubheading>My academic background and qualifications.</SectionSubheading>
      </div>
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <ul className="space-y-6">
              {educationData.map((edu, index) => (
                <li key={edu.institution} className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full mt-1">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">{edu.institution}</p>
                    <p className="font-headline text-lg">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
