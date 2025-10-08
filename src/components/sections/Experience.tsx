import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dot } from 'lucide-react';

import experienceData from '@/data/experienceData.json';

const Experience = () => {
  return (
    <section className="py-20 relative bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text pb-2">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {/* Experience Cards */}
            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-primary hidden md:flex items-center justify-center">
                    <div className="w-2 h-2 bg-background rounded-full" />
                  </div>

                  {/* Content Card */}
                  <Card className="md:ml-20 p-6 glass card-shadow hover-lift">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div className="flex items-start gap-3">
                        <div className="w-[54px] h-[54px] relative">
                          <Image
                            src={exp.companyLogo}
                            alt={exp.company}
                            fill
                            sizes="54px"
                            className="object-contain rounded-lg"
                          />
                        </div>

                        <div>
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <p className="text-muted-foreground font-medium">
                            {exp.company}
                            <span
                              className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                                exp.type.toLowerCase() === 'freelance'
                                  ? 'bg-primary/10 text-primary'
                                  : 'bg-secondary text-secondary-foreground'
                              }`}
                            >
                              {exp.type}
                            </span>
                          </p>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium bg-secondary px-3 py-1 rounded-full w-fit">
                        {exp.period}
                      </span>
                    </div>

                    <div>
                      <span className="font-semibold">
                        Main Responsibilities:
                      </span>
                      <ul className="space-y-2">
                        {exp.responsibility.map((item, i) => (
                          <li key={item + i} className="flex items-start gap-1">
                            {/* Bullet */}
                            <Dot className="mt-0.5" />

                            <p className="flex-1 text-muted-foreground leading-relaxed">
                              {item}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="font-medium"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
