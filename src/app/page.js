import About from '@/components/About';
import Clients from '@/components/Clients';
import Hero from '@/components/Hero';
import ImpactAndBlog from '@/components/ImpactAndBlog';
import Products from '@/components/Products';
import StatsBar from '@/components/StatsBar';

export const metadata = {
  title: 'Automate IT Limited — ERP & Software Solutions Bangladesh',
  description: 'Automate IT Limited delivers ERP systems, custom software, web development, and digital services trusted by 2,500+ organizations across Bangladesh.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <StatsBar />
      <ImpactAndBlog />
      <Clients />
    </>
  );
}
