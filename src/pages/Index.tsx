import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CarsSection from '@/components/CarsSection';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <CarsSection />
      <Contact />
    </Layout>
  );
};

export default Index;
