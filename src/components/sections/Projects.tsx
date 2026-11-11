import Link from 'next/link';
import { Section } from '@/components/layout';
import projectsData from '@/data/projectsData.json';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="divide-y divide-border">
        {projectsData.slice(0, 4).map((project) => (
          <div key={project.title} className="py-10 first:pt-0 last:pb-0">
            <ProjectItem project={project} />
          </div>
        ))}
      </div>

      <p className="mt-12">
        <Link href="/projects" className="text-link">
          See all {projectsData.length} projects
        </Link>
      </p>
    </Section>
  );
};

export default Projects;
