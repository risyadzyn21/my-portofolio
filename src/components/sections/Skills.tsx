import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 5 },
        { name: 'TypeScript', level: 4 },
        { name: 'Next.js', level: 4 },
        { name: 'Tailwind CSS', level: 4 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 5 },
        { name: 'Figma', level: 3 },
        { name: 'Node.js', level: 2 },
        { name: 'PostgreSQL', level: 1 },
      ],
    },
  ];

  const technologies = [
    'React',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
    'Framer Motion',
    'Git',
    'Figma',
    'Vercel',
    'Node.js',
    'PostgreSQL',
    'Prisma',
    'tRPC',
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text pb-2">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={category.title} className="p-8 glass card-shadow ">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i}>{i < skill.level ? '⭐' : null}</span>
                          ))}
                        </span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-1">
                        {/* <div className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out" /> */}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Technology Tags */}
          <Card className="p-8 glass card-shadow">
            <h3 className="text-2xl font-bold mb-6 gradient-text text-center">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary/50 rounded-full text-sm font-medium transition-smooth cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
