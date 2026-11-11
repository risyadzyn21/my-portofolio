import { Section } from '@/components/layout';
import skillsData from '@/data/skillsData.json';
import techUseData from '@/data/techUseData.json';

const Skills = () => {
  const listed = new Set(
    skillsData.flatMap((category) => category.skills.map((s) => s.name)),
  );
  const others = techUseData.filter((tech) => !listed.has(tech));

  return (
    <Section id="skills" title="Skills">
      <div className="space-y-10">
        {skillsData.map((category) => {
          const names = [...category.skills]
            .sort((a, b) => b.level - a.level)
            .map((skill) => skill.name);

          return (
            <div
              key={category.title}
              className="grid gap-2 md:grid-cols-[11rem_1fr] md:gap-8"
            >
              <h3 className="text-muted-foreground">{category.title}</h3>
              <p className="text-2xl font-medium leading-snug tracking-tight md:text-3xl">
                {names.join(', ')}
              </p>
            </div>
          );
        })}

        <div className="grid gap-2 border-t border-border pt-10 md:grid-cols-[11rem_1fr] md:gap-8">
          <h3 className="text-muted-foreground">Also use</h3>
          <p className="max-w-[60ch] text-lg">{others.join(', ')}</p>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
