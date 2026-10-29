import type { Metadata } from 'next';
import CaseStudyContent from '@/components/CaseStudyContent';

export const metadata: Metadata = {
  title: 'BALANG App Case Study',
  description:
    'Crowd-sourced mobile application built with Flutter to report, verify, and map lost & found items using geolocation.',
};

export default function BalangCaseStudy() {
  return <CaseStudyContent slug="balang" />;
}
