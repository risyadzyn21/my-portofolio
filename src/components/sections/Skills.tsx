import { Card } from '@/components/ui/card';
import skillsData from '@/data/skillsData.json';
import techUseData from '@/data/techUseData.json';

const Skills = () => {
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
            {skillsData.map((category, index) => (
              <Card key={category.title} className="p-8 glass card-shadow">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills
                    .sort((a, b) => b.level - a.level)
                    .map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <span key={i}>
                                {i < skill.level ? '⭐' : null}
                              </span>
                            ))}
                          </span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-1"></div>
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
              {techUseData.map((tech, index) => (
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
