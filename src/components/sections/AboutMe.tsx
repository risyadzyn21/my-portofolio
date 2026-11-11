import Image from 'next/image';
import { Section } from '@/components/layout';

const facts = [
  { label: 'Based in', value: 'Serang, Indonesia' },
  { label: 'Role', value: 'Frontend developer' },
  { label: 'Experience', value: '4+ years' },
  { label: 'Works with', value: 'React, TypeScript' },
];

const AboutMe = () => {
  return (
    <Section id="aboutme" title="About">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-14">
        <div className="max-w-[60ch] space-y-5 text-lg">
          <p>
            I’m a frontend-focused software engineer with 4+ years of experience
            building real-world web applications. I specialize in React,
            TypeScript, and modern frontend architecture.
          </p>
          <p>
            I enjoy exploring new technologies, experimenting with ideas, and
            continuously improving how I design and build systems.
          </p>

          <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-2 border-t border-border pt-6 text-base">
            {facts.map((fact) => (
              <div key={fact.label} className="contents">
                <dt className="text-muted-foreground">{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Image
          src="/images/me.jpg"
          alt="Portrait of Risyad Ziyan Arkham"
          width={480}
          height={600}
          className="aspect-[4/5] w-full max-w-60 rounded-sm bg-secondary object-cover lg:max-w-none"
        />
      </div>
    </Section>
  );
};

export default AboutMe;
