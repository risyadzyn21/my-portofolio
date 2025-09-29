'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'About Me', href: '#aboutme' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Name */}
          <div className="text-xl font-bold gradient-text">Risyad's Space</div>

          {/* Desktop Navigation */}
          <nav className="flex gap-4 text-lg">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors relative group"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="glass hover-scaleup cursor-pointer"
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
