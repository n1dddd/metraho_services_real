import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}