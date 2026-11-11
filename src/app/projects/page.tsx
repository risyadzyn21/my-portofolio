import projectsData from '@/data/projectsData.json';
import ProjectItem from '@/components/sections/ProjectItem';

export default function Projects() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <h1 className="display text-[clamp(3rem,10vw,8rem)]">All projects</h1>
      <p className="mt-6 max-w-[48ch] text-xl text-muted-foreground">
        Client work and side projects.
      </p>

      <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2">
        {projectsData.map((project) => (
          <ProjectItem key={project.title} project={project} stacked />
        ))}
      </div>
    </main>
  );
}
