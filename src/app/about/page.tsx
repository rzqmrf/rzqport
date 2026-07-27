import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Skills from '@/components/Skills';
import WorkspaceMap from '@/components/WorkspaceMap';
import BehindTheScenes from '@/components/BehindTheScenes';
import Footer from '@/components/Footer';

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
