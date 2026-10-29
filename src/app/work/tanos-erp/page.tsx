import type { Metadata } from 'next';
import CaseStudyContent from '@/components/CaseStudyContent';

export const metadata: Metadata = {
  title: 'Tanos ERP Case Study',
  description:
    'Enterprise logistics dashboard redesign for PT Integrasi Logistik Cipta Solusi (ILCS) to streamline cargo dispatch operations.',
};

export default function TanosErpCaseStudy() {
  return <CaseStudyContent slug="tanos-erp" />;
}
