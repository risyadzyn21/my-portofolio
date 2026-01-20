import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

import projectsData from '@/data/projectsData.json';
import Link from 'next/link';

const Projects = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text pb-2">
              What I’ve Been Working On
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              passion for creating exceptional digital experiences.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.slice(0, 4).map((project) => (
              <Card
                key={project.title}
                className={`p-6 glass card-shadow transition-smooth ${
                  project.isPrivate ? 'ring-2 ring-primary/30' : ''
                }`}
              >
                {/* Project Image/Icon */}
                <div className="mb-6">
                  <div className="w-full h-48 bg-gradient-secondary rounded-lg flex items-center justify-center text-6xl mb-4">
                    {project.image ? project.image : '💼'}
                  </div>
                  {project.isPrivate && (
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                      Private Use
                    </span>
                  )}
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary/50 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2 hover-scaleup cursor-pointer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Button>
                      </a>
                    )}

                    {project.repoLink && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center gap-2 hover-scaleup cursor-pointer"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Link href="/projects">
              <Button
                variant="outline"
                size="lg"
                className="glass hover-scaleup cursor-pointer"
              >
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
