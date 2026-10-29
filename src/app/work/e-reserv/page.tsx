import type { Metadata } from 'next';
import CaseStudyContent from '@/components/CaseStudyContent';

export const metadata: Metadata = {
  title: 'E-Reserv Case Study',
  description:
    'Integrated digital platform for sports field reservations connecting tenants and managers with automated slot validation.',
};

export default function EReservCaseStudy() {
  return <CaseStudyContent slug="e-reserv" />;
}
