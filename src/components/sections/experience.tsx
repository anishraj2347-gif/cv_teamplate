import { experienceData } from "@/lib/data";
import { Section, SectionHeading, SectionSubheading } from "@/components/section-wrapper";
import { Card, CardContent, CardHeader, CardDescription } from "@/components/ui/card";
import { summarizeExperienceTimeline } from '@/ai/flows/summarize-experience-timeline';
import { Badge } from "@/components/ui/badge";
import { BrainCircuit } from "lucide-react";
import { Suspense } from "react";

async function AiSummary({ timeline }: { timeline: string }) {
    const summary = await summarizeExperienceTimeline({ timeline });
    return <p className="mt-2 text-sm italic text-primary/80 dark:text-primary/90">{summary.summary}</p>;
}

export function ExperienceSection() {
  return (
    <Section id="experience" className="bg-background">
      <div className="text-center space-y-4 mb-16">
        <SectionHeading>Work Experience</SectionHeading>
        <SectionSubheading>My professional journey and key accomplishments.</SectionSubheading>
      </div>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <div key={exp.company} className="relative pl-8 md:pl-0">
                <div className="md:flex items-start md:gap-8">
                    <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                        <p className="font-semibold text-primary">{exp.period}</p>
                        <h3 className="text-xl font-bold font-headline mt-1">{exp.role}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <div className={`flex-1 md:w-1/2 mt-4 md:mt-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:order-1 md:pr-12'}`}>
                        <Card className="hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                            <CardDescription>{exp.description}</CardDescription>
                            </CardHeader>
                            {index === 0 && exp.rawTimeline && (
                                <CardContent>
                                    <Badge variant="outline" className="text-primary border-primary/50">
                                        <BrainCircuit className="mr-2 h-4 w-4" />
                                        AI Generated Summary
                                    </Badge>
                                    <Suspense fallback={<div className="mt-2 text-sm italic text-primary/80">Generating summary...</div>}>
                                        <AiSummary timeline={exp.rawTimeline} />
                                    </Suspense>
                                </CardContent>
                            )}
                        </Card>
                    </div>
                </div>
              <div className="absolute top-1 left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
