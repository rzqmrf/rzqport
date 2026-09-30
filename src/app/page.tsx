'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import HomeCta from '@/components/HomeCta';
import Footer from '@/components/Footer';
import IntroLoader from '@/components/IntroLoader';

export default function Home() {
  return (
    <>
      <IntroLoader />
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <HomeCta />
      <Footer />
    </>
  );
}

