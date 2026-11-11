import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const SimpleHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center px-6 md:px-10">
        <Link
          href="/"
          className="text-link inline-flex items-center gap-2 text-sm"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back to home
        </Link>
      </div>
    </header>
  );
};

export default SimpleHeader;
