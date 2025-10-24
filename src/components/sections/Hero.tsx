import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 pt-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">Hi, I'm</h1>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-20 xl:leading-34 gradient-text">
              Risyad
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 fade-in-up delay-100">
            Turning wild ideas into pixel-perfect reality ✨ <br />
            Building the future, one component at a time
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 fade-in-up delay-200">
            <Link href="#projects">
              <Button size="lg" className="glass hover-scaleup cursor-pointer">
                View My Work
              </Button>
            </Link>

            <Link href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="glass hover-scaleup cursor-pointer"
              >
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16 fade-in-up delay-300">
            <a
              href="https://github.com/risyadzyn21"
              target="_blank"
              className="p-3 glass rounded-full hover-scaleup transition-smooth"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/risyad-ziyan-arkham/"
              target="_blank"
              className="p-3 glass rounded-full hover-scaleup transition-smooth"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#contact"
              className="p-3 glass rounded-full hover-scaleup transition-smooth"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center fade-in-up delay-400 m-auto">
            <Link href="#aboutme" className="fade-in-up delay-400">
              <ArrowDown className="w-6 h-6 mx-auto animate-bounce text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
