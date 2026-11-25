import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Inquiry } from './components/Inquiry';
import { Nav } from './components/Nav';
import { Pricing } from './components/Pricing';
import { Process } from './components/Process';
import { TechStrip } from './components/TechStrip';
import { Work } from './components/Work';

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Nav />
      <main>
        <Hero />
        <TechStrip />
        <Work />
        <Pricing />
        <Process />
        <Inquiry />
      </main>
      <Footer />
    </div>
  );
}
