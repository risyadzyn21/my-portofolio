import { Section } from '@/components/layout';
import experienceData from '@/data/experienceData.json';

const Experience = () => {
  return (
    <Section id="experience" title="Experience">
      <ol className="divide-y divide-border border-b border-border">
        {experienceData.map((exp) => (
          <li
            key={exp.id}
            className="grid gap-4 py-8 first:pt-0 md:grid-cols-[10rem_1fr] md:gap-8 md:py-10 md:first:pt-0"
          >
            <p className="text-muted-foreground">{exp.period}</p>

            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                {exp.title}, {exp.company}
              </h3>
              <p className="text-muted-foreground">{exp.type}</p>

              <ul className="mt-5 max-w-[62ch] list-disc space-y-2 pl-5 marker:text-muted-foreground">
                {exp.responsibility.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p className="mt-5 text-sm text-muted-foreground">
                {exp.technologies.join(', ')}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
