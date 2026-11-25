import { useEffect } from 'react';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Inquiry } from './components/Inquiry';
import { Nav } from './components/Nav';
import { Pricing } from './components/Pricing';
import { Process } from './components/Process';
import { TechStrip } from './components/TechStrip';
import { Work } from './components/Work';

export default function App() {
  // 첫 로드 시 #work 같은 해시 링크로 바로 들어와도 해당 섹션으로 이동한다.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.replace('#', ''));
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    const timer = window.setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
    return () => window.clearTimeout(timer);
  }, []);

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
