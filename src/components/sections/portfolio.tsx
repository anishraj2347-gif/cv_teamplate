import { projectsData } from "@/lib/data";
import { Section, SectionHeading, SectionSubheading } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";

export function PortfolioSection() {
  return (
    <Section id="projects" className="bg-secondary">
      <div className="text-center space-y-4 mb-12">
        <SectionHeading>My Projects</SectionHeading>
        <SectionSubheading>A selection of projects I've worked on.</SectionSubheading>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project) => {
          return (
            <Card key={project.id} className="group hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold font-headline mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground flex-grow">{project.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
