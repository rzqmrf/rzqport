import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact',
  description: "Get in touch with Muhammad Rozaq Ma'ruf for product design, web development, and engineering collaborations.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '100px' }}>
        <Contact />
      </div>
      <Footer />
    </>
  );
}
