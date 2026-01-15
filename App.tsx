import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import AboutSection from './components/AboutSection.tsx';
import Programs from './components/Programs.tsx';
import Trustees from './components/Trustees.tsx';
import Impact from './components/Impact.tsx';
import Contact from './components/Contact.tsx';
import ChatWidget from './components/ChatWidget.tsx';
import Footer from './components/Footer.tsx';
import { FOUNDATION_EMAIL } from './constants.ts';

function App() {
  const [currentPage, setCurrentPage] = useState('index');

  const updatePageFromPath = () => {
    const path = window.location.pathname;
    const segments = path.split('/').filter(Boolean);
    const lastSegment = segments.length > 0 ? segments[segments.length - 1] : 'index';
    
    // Normalize page name by removing extension
    const pageName = lastSegment.replace('.html', '');
    
    // Whitelist of valid pages to prevent 404s or invalid states
    const validPages = ['about', 'programs', 'trustees', 'impact', 'contact'];
    
    if (validPages.includes(pageName)) {
      setCurrentPage(pageName);
    } else if (pageName === 'index' || pageName === '') {
      setCurrentPage('index');
    } else {
      // Fallback: check if any segment matches a known page (useful for subfolder deployments)
      const found = validPages.find(p => segments.includes(p) || segments.includes(`${p}.html`));
      setCurrentPage(found || 'index');
    }
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    updatePageFromPath();
    window.addEventListener('popstate', updatePageFromPath);
    window.addEventListener('app-nav-change', updatePageFromPath);
    return () => {
      window.removeEventListener('popstate', updatePageFromPath);
      window.removeEventListener('app-nav-change', updatePageFromPath);
    };
  }, []);

  const SubPageHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
    <div className="bg-indigo-950 pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] invert"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight text-balance">{title}</h1>
        {subtitle && <p className="text-indigo-200 text-lg md:text-xl max-w-2xl opacity-80 font-medium mx-auto md:mx-0 leading-relaxed">{subtitle}</p>}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return (
          <>
            <SubPageHeader title="About Our Foundation" subtitle="Empowering the youth of Aotearoa since 2025 through dedicated mentorship and resources." />
            <AboutSection />
          </>
        );
      case 'programs':
        return (
          <>
            <SubPageHeader title="Our Impact Programs" subtitle="Targeted initiatives in education, sports, arts, and community wellbeing." />
            <Programs />
          </>
        );
      case 'trustees':
        return (
          <>
            <SubPageHeader title="Board of Trustees" subtitle="Meet the leadership team ensuring governance and strategic vision for New Zealand's youth." />
            <Trustees />
          </>
        );
      case 'impact':
        return (
          <>
            <SubPageHeader title="Impact & Transparency" subtitle="Tracking our progress and ensuring financial accountability in everything we do." />
            <Impact />
          </>
        );
      case 'contact':
        return (
          <>
            <SubPageHeader title="Get In Touch" subtitle="We're here to answer your questions about mentoring, volunteering, or donations." />
            <Contact />
          </>
        );
      case 'index':
      default:
        return (
          <>
            <Hero />
            <AboutSection />
            <Programs />
            <Trustees />
            <Impact />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      <Navbar />
      <main>
        {renderContent()}
        
        {currentPage !== 'contact' && currentPage !== 'index' && (
          <section className="bg-indigo-50 py-24 border-t border-indigo-100">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-black text-indigo-950 mb-6 leading-tight">Support Our Mission</h2>
              <p className="text-slate-600 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Your contribution directly funds scholarships and equipment for young Kiwis with high potential.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <a 
                  href={`mailto:${FOUNDATION_EMAIL}?subject=Donation Inquiry`}
                  className="bg-indigo-600 text-white px-12 py-4 rounded-full font-black text-lg hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 active:scale-95"
                >
                  Donate Now
                </a>
                <a 
                  href={`mailto:${FOUNDATION_EMAIL}?subject=Volunteering Inquiry`}
                  className="text-indigo-950 font-bold hover:text-indigo-600 transition-colors flex items-center group"
                >
                  Inquire about volunteering <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;