import React from 'react';

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

/** Heading in a sticky left column, content on the right. */
const Section = ({ id, title, children }: SectionProps) => (
  <section id={id} className="scroll-mt-16 border-t border-border">
    <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-12 md:px-10 md:py-24">
      <h2 className="self-start text-2xl font-semibold tracking-tight md:sticky md:top-24">
        {title}
      </h2>
      <div>{children}</div>
    </div>
  </section>
);

export default Section;
