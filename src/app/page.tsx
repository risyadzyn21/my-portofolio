import { AboutSection } from '@/widgets/About';
import { Hero } from '@/components/sections';

export default function Home() {
  return (
    <main
    // className="grid items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]"
    >
      <section id="home">
        <Hero />
      </section>
      <section id="aboutme">
        <AboutSection />
      </section>
    </main>
  );
}
