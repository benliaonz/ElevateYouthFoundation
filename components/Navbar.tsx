import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FOUNDATION_EMAIL } from '../constants';

interface NavLinkProps {
  href: string;
  children?: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const checkActive = () => {
      const currentPath = window.location.pathname;
      const targetPath = href === '/' ? '/' : `/${href.replace(/^\//, '')}`;
      setIsActive(currentPath === targetPath || (currentPath === '/' && href === '/index'));
    };
    checkActive();
    window.addEventListener('popstate', checkActive);
    window.addEventListener('app-nav-change', checkActive);
    return () => {
      window.removeEventListener('popstate', checkActive);
      window.removeEventListener('app-nav-change', checkActive);
    };
  }, [href]);

  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith('mailto:')) return;
    e.preventDefault();
    const cleanPath = href.startsWith('/') ? href : `/${href}`;
    window.history.pushState({}, '', cleanPath);
    window.dispatchEvent(new CustomEvent('app-nav-change'));
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className={`transition-all font-semibold tracking-tight text-sm uppercase tracking-wider relative py-1 ${
        isActive ? 'text-indigo-900' : 'text-slate-500 hover:text-indigo-900'
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 rounded-full animate-in fade-in zoom-in duration-300"></span>
      )}
    </a>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('mailto:')) {
      window.location.href = href;
      return;
    }
    const cleanPath = href.startsWith('/') ? href : `/${href}`;
    window.history.pushState({}, '', cleanPath);
    window.dispatchEvent(new CustomEvent('app-nav-change'));
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a 
              href="/" 
              onClick={(e) => { e.preventDefault(); handleMobileClick('/'); }}
              className="flex items-center group"
            >
              <div className="flex flex-col">
                 <span className="font-black text-2xl tracking-tighter text-indigo-950 leading-none">ELEVATE</span>
                 <span className="text-[9px] tracking-[0.2em] font-bold text-indigo-600 uppercase">Youth Foundation</span>
              </div>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/programs">Programs</NavLink>
            <NavLink href="/trustees">Trustees</NavLink>
            <NavLink href="/impact">Impact</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <a 
              href={`mailto:${FOUNDATION_EMAIL}?subject=Donation Inquiry`}
              className="bg-indigo-950 text-white px-7 py-2.5 rounded-full font-bold hover:bg-indigo-800 transition-all shadow-lg shadow-indigo-950/10 active:scale-95 text-sm uppercase tracking-widest"
            >
              Donate Now
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-indigo-950 hover:bg-indigo-50 p-2 rounded-xl transition-colors focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-indigo-50 animate-in slide-in-from-top-5 duration-300">
          <div className="px-4 pt-4 pb-8 space-y-2">
            <button 
              onClick={() => handleMobileClick('/about')}
              className="block w-full text-left px-4 py-3 rounded-xl text-base font-bold text-indigo-950 hover:bg-indigo-50 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleMobileClick('/programs')}
              className="block w-full text-left px-4 py-3 rounded-xl text-base font-bold text-indigo-950 hover:bg-indigo-50 transition-colors"
            >
              Programs
            </button>
            <button 
              onClick={() => handleMobileClick('/trustees')}
              className="block w-full text-left px-4 py-3 rounded-xl text-base font-bold text-indigo-950 hover:bg-indigo-50 transition-colors"
            >
              Trustees
            </button>
            <button 
              onClick={() => handleMobileClick('/impact')}
              className="block w-full text-left px-4 py-3 rounded-xl text-base font-bold text-indigo-950 hover:bg-indigo-50 transition-colors"
            >
              Impact
            </button>
            <button 
              onClick={() => handleMobileClick('/contact')}
              className="block w-full text-left px-4 py-3 rounded-xl text-base font-bold text-indigo-950 hover:bg-indigo-50 transition-colors"
            >
              Contact
            </button>
            <div className="pt-4 px-4">
              <a 
                href={`mailto:${FOUNDATION_EMAIL}?subject=Donation Inquiry`}
                className="block w-full bg-indigo-950 text-white text-center px-6 py-4 rounded-2xl font-black uppercase tracking-widest shadow-lg active:scale-95 transition-all"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}