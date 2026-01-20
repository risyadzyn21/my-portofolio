import React from 'react';
import '@/styles/globals.css';
import { SimpleHeader } from '@/components/layout';

export const metadata = {
  title: 'Risyad.dev — My Portfolio',
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SimpleHeader />
      {children}
    </>
  );
}
