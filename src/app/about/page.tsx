import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Skills from '@/components/Skills';
import WorkspaceMap from '@/components/WorkspaceMap';
import BehindTheScenes from '@/components/BehindTheScenes';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Me',
  description: "Learn more about Muhammad Rozaq Ma'ruf — background, skills, design philosophy, and workstation blueprint.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '100px' }}>
        <About />
        <Skills />
        <WorkspaceMap />
        <BehindTheScenes />
      </div>
      <Footer />
    </>
  );
}
