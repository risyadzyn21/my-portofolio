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
            Since 2022 I have built frontends at Dattabot and on freelance
            projects: data visualization dashboards, blockchain sites that
            connect to wallets like MetaMask, and public and internal websites,
            including one for a national government agency.
          </p>
          <p>
            I write React and TypeScript every day and I am comfortable in Vue.
            I like turning a design into components the rest of the team can
            reuse and test.
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
