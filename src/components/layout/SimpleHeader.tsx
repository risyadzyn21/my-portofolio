import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const SimpleHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm glass border-b">
      <div className="container mx-auto px-6 py-4">
        <Link href="/">
          <Button
            variant="ghost"
            className="flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default SimpleHeader;
