import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A modern e-commerce platform built with React, TypeScript, and Stripe. Features include product catalog, shopping cart, and secure checkout.',
    image: '🛍️',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    liveLink: '#',
    githubLink: '#',
    featured: true,
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '📋',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Framer Motion'],
    liveLink: '#',
    githubLink: '#',
    featured: true,
  },
  {
    title: 'Weather Dashboard',
    description:
      'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
    image: '🌤️',
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
    liveLink: '#',
    githubLink: '#',
    featured: false,
  },
  {
    title: 'Portfolio Website',
    description:
      'A responsive portfolio website showcasing modern design principles and smooth animations.',
    image: '💼',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
    liveLink: '#',
    githubLink: '#',
    featured: false,
  },
];

const Projects = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text pb-2">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              passion for creating exceptional digital experiences.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
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

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="glass hover-scaleup cursor-pointer"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
