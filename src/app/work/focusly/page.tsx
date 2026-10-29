import type { Metadata } from 'next';
import CaseStudyContent from '@/components/CaseStudyContent';

export const metadata: Metadata = {
  title: 'Focusly Web App Case Study',
  description:
    'Interactive task management web application featuring theme toggles, live progress bars, and LocalStorage persistence.',
};

export default function FocuslyCaseStudy() {
  return <CaseStudyContent slug="focusly" />;
}
