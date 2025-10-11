import { projectsData } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Section, SectionHeading, SectionSubheading } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function PortfolioSection() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <Section id="projects" className="bg-secondary">
      <div className="text-center space-y-4 mb-12">
        <SectionHeading>My Projects</SectionHeading>
        <SectionSubheading>A selection of projects I've worked on.</SectionSubheading>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project) => {
          const projectImage = getImage(project.imageUrlId);
          return (
            <Card key={project.id} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              {projectImage && (
                <div className="overflow-hidden">
                  <Image
                    src={projectImage.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    data-ai-hint={projectImage.imageHint}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-headline mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
