import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CarsSection from '@/components/CarsSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <CarsSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
