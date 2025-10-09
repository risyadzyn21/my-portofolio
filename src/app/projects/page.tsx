import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import projectsData from '@/data/projectsData.json';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 pb-3 gradient-text">
              All Projects
            </h1>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Explore my complete portfolio of projects showcasing expertise in
              web development, UI/UX design, and modern technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <Card
                key={project.title}
                className={`p-6 glass card-shadow transition-smooth ${
                  project.featured ? 'ring-2 ring-primary/30' : ''
                }`}
              >
                {/* Project Image/Icon */}
                <div className="mb-6">
                  <div className="w-full h-48 bg-gradient-secondary rounded-lg flex items-center justify-center text-6xl mb-4">
                    {project.image}
                  </div>
                  {project.featured && (
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                      Featured
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
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 hover-scaleup cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-2 hover-scaleup cursor-pointer"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
