import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work & Projects',
  description: 'Explore selected works, design systems, and software engineering case studies by Muhammad Rozaq Ma\'ruf.',
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
