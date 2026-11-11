import { NavigationHeader } from '@/components/layout';
import {
  AboutMe,
  Contact,
  Experience,
  Hero,
  Projects,
  Skills,
} from '@/components/sections';

export default function Home() {
  return (
    <main>
      <NavigationHeader />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
