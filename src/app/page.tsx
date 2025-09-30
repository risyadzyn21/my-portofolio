import { AboutMe, Hero, Projects, Skills } from '@/components/sections';

export default function Home() {
  return (
    <main
    // className="grid items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]"
    >
      <section id="home">
        <Hero />
      </section>
      <section id="aboutme">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </main>
  );
}
