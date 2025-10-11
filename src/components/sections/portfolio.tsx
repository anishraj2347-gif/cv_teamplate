import { projectsData } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Section, SectionHeading, SectionSubheading } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { generateProjectDescription } from "@/ai/flows/generate-project-description";
import { BrainCircuit } from "lucide-react";
import { Suspense } from "react";

async function AiProjectDescription({ projectName, projectDetails }: { projectName: string, projectDetails: string }) {
  const result = await generateProjectDescription({ projectName, projectDetails });
  return <p className="text-sm text-muted-foreground">{result.projectDescription}</p>;
}

export function PortfolioSection() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <Section id="projects" className="bg-secondary">
      <div className="text-center space-y-4 mb-12">
        <SectionHeading>My Projects</SectionHeading>
        <SectionSubheading>A selection of projects I've worked on.</SectionSubheading>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => {
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
                {index === 0 && project.projectDetails ? (
                  <>
                    <Badge variant="outline" className="mb-2 text-primary border-primary/50">
                        <BrainCircuit className="mr-2 h-4 w-4" />
                        AI Generated Description
                    </Badge>
                     <Suspense fallback={<p className="text-sm text-muted-foreground">Generating description...</p>}>
                        <AiProjectDescription projectName={project.title} projectDetails={project.projectDetails} />
                     </Suspense>
                  </>
                ) : (
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
