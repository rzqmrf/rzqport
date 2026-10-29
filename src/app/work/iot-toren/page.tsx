import type { Metadata } from 'next';
import CaseStudyContent from '@/components/CaseStudyContent';

export const metadata: Metadata = {
  title: 'Monitoring Toren IoT Case Study',
  description:
    'IoT dashboard and hardware system utilizing ultrasonic sensors to monitor water tower levels and automate Telegram alerts.',
};

export default function MonitoringTorenCaseStudy() {
  return <CaseStudyContent slug="iot-toren" />;
}
