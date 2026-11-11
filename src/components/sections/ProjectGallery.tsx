'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog } from 'radix-ui';
import { X } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

type ProjectGalleryProps = {
  images: string[];
  title: string;
};

/** Fixed-size slide so the modal never jumps; the image fades in once loaded. */
const ModalImage = ({ src, alt }: { src: string; alt: string }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="aspect-video max-h-[78svh] w-full overflow-hidden rounded-xl bg-black/60 backdrop-blur-md">
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        sizes="92vw"
        loading="eager"
        onLoad={() => setLoaded(true)}
        className={`size-full object-contain transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

/**
 * Screenshot carousel. Clicking a slide opens the same images in a modal
 * carousel, starting at the slide that was clicked.
 */
const ProjectGallery = ({ images, title }: ProjectGalleryProps) => {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [modalApi, setModalApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const openAt = (index: number) => {
    setStartIndex(index);
    setCurrent(index);
    setOpen(true);
  };

  const handleModalApi = (api: CarouselApi) => {
    setModalApi(api);
    api?.on('select', () => setCurrent(api.selectedScrollSnap()));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') modalApi?.scrollPrev();
    if (e.key === 'ArrowRight') modalApi?.scrollNext();
  };

  const hasMany = images.length > 1;

  return (
    <>
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={img}>
              <button
                type="button"
                onClick={() => openAt(index)}
                aria-label={`View ${title} screenshot ${index + 1} full size`}
                className="block w-full cursor-zoom-in"
              >
                <Image
                  src={img}
                  alt={`${title} screenshot ${index + 1}`}
                  width={1920}
                  height={1080}
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="aspect-video w-full object-cover"
                />
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        {hasMany && (
          <>
            <CarouselPrevious className="left-2 cursor-pointer rounded-sm" />
            <CarouselNext className="right-2 cursor-pointer rounded-sm" />
          </>
        )}
      </Carousel>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="modal-overlay fixed inset-0 z-50 bg-foreground/80" />
          <Dialog.Content
            aria-describedby={undefined}
            onKeyDown={handleKeyDown}
            className="modal-content fixed inset-0 z-50 m-auto h-fit w-[92vw] max-w-6xl outline-none"
          >
            <Dialog.Title className="sr-only">{title}</Dialog.Title>

            <div className="mb-3 flex items-center justify-between text-background">
              <p className="text-sm" aria-live="polite">
                {hasMany ? `${current + 1} of ${images.length}` : title}
              </p>
              <Dialog.Close
                aria-label="Close image"
                className="cursor-pointer rounded-sm bg-background p-2 text-foreground"
              >
                <X className="size-5" aria-hidden />
              </Dialog.Close>
            </div>

            <Carousel
              className="w-full"
              opts={{ loop: true, startIndex }}
              setApi={handleModalApi}
            >
              <CarouselContent>
                {images.map((img, index) => (
                  <CarouselItem key={img}>
                    <ModalImage
                      src={img}
                      alt={`${title} screenshot ${index + 1}`}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {hasMany && (
                <>
                  <CarouselPrevious className="left-2 cursor-pointer rounded-sm" />
                  <CarouselNext className="right-2 cursor-pointer rounded-sm" />
                </>
              )}
            </Carousel>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default ProjectGallery;
