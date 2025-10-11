import { skillsData } from "@/lib/data";
import { Section, SectionHeading, SectionSubheading } from "@/components/section-wrapper";
import { Card } from "@/components/ui/card";

export function SkillsSection() {
  return (
    <Section id="skills" className="bg-secondary">
      <div className="text-center space-y-4 mb-12">
        <SectionHeading>My Skillset</SectionHeading>
        <SectionSubheading>A collection of technologies and tools I'm proficient in.</SectionSubheading>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {skillsData.map((skill) => (
          <Card key={skill.name} className="flex flex-col items-center justify-center text-center p-6 hover:shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <skill.icon className="h-12 w-12 mb-4 text-primary" />
            <p className="font-semibold text-sm">{skill.name}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
