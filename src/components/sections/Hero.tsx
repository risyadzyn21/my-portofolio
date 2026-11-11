import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-[60svh] md:min-h-[min(72svh,42rem)] w-full max-w-6xl flex-col justify-end px-6 pb-14 pt-32 md:px-10 md:pb-20"
    >
      <h1 className="display text-[clamp(2.75rem,9vw,7.5rem)]">
        <span className="name-line">
          <span>Risyad</span>
        </span>
        <span className="name-line">
          <span>Ziyan Arkham</span>
        </span>
      </h1>

      <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-[minmax(0,34rem)_1fr] md:items-end md:gap-12">
        <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
          Frontend developer building web apps with React, Next.js and Vue,
          mostly for blockchain and data products.
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 md:justify-end">
          <Button asChild size="lg">
            <Link href="#contact">Get in touch</Link>
          </Button>
          <Link href="#projects" className="text-link">
            See projects
          </Link>
          <a
            href="https://github.com/risyadzyn21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/risyad-ziyan-arkham/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
