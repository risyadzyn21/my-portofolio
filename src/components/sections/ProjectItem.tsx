import Image from 'next/image';
import { BriefcaseBusiness } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import projectsData from '@/data/projectsData.json';

type Project = (typeof projectsData)[number];

type ProjectItemProps = {
  project: Project;
  /** Stack image above text instead of placing them side by side. */
  stacked?: boolean;
};

const ProjectItem = ({ project, stacked = false }: ProjectItemProps) => {
  const images = project.images ?? [];

  return (
    <article
      className={
        stacked
          ? 'flex flex-col gap-6'
          : 'grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-10'
      }
    >
      <div className="aspect-video w-full self-start overflow-hidden rounded-sm bg-secondary">
        {images.length > 0 ? (
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {images.map((img) => (
                <CarouselItem key={img}>
                  <Image
                    src={img}
                    alt={`${project.title} screenshot`}
                    width={1920}
                    height={1080}
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className="aspect-video w-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {images.length > 1 && (
              <>
                <CarouselPrevious className="left-2 cursor-pointer rounded-sm" />
                <CarouselNext className="right-2 cursor-pointer rounded-sm" />
              </>
            )}
          </Carousel>
        ) : (
          <div
            role="img"
            aria-label={`${project.title} has no screenshot`}
            className="flex size-full items-center justify-center border border-dashed border-input text-muted-foreground/50"
          >
            <BriefcaseBusiness
              className="size-10"
              strokeWidth={1.25}
              aria-hidden
            />
          </div>
        )}
      </div>

      <div>
        <h3 className="text-2xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-3 max-w-[56ch] text-muted-foreground">
          {project.description}
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          {project.technologies.join(', ')}
        </p>

        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Visit site
            </a>
          )}
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              View code
            </a>
          )}
          {project.isPersonalProject && (
            <span className="text-muted-foreground">Personal project</span>
          )}
          {project.isPrivate && (
            <span className="text-muted-foreground">
              Private project, no public link
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
