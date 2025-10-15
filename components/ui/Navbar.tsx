'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Prevent scrolling when menu is open
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-sand-200' : 'bg-transparent'} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-slate-500 hover:text-sage transition-colors" aria-label="Chowboy home">
            <Image src="/chowboy-logo.png" alt="" width={32} height={32} className="w-8 h-8" aria-hidden="true" />
            <span>chowboy</span>
          </Link>
          
          {/* Desktop Navigation Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link href="/features" className="text-slate-400 hover:text-sage transition-colors font-medium" aria-label="View features">
                features
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-slate-400 hover:text-sage transition-colors font-medium" aria-label="Read blog">
                blog
              </Link>
            </li>
            <li>
              <Link href="/recipes" className="text-slate-400 hover:text-sage transition-colors font-medium" aria-label="View recipes">
                recipes
              </Link>
            </li>
          </ul>
          
          {/* Hamburger Menu Button */}
          <button
            className={`md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span className={`block w-6 h-0.5 bg-slate-500 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-slate-500 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-slate-500 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
          
          {/* Mobile Menu Overlay */}
          {menuOpen && (
            <div className="fixed inset-0 bg-black/50 z-40" onClick={toggleMenu}></div>
          )}
          
          {/* Mobile Menu Drawer */}
          <div 
            className={`fixed top-0 right-0 bottom-0 w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 border-l-2 border-sage-200 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between p-6 border-b border-sand-200">
              <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-slate-500" onClick={() => setMenuOpen(false)} aria-label="Chowboy home">
                <Image src="/chowboy-logo.png" alt="" width={28} height={28} className="w-7 h-7" aria-hidden="true" />
                <span>chowboy</span>
              </Link>
              <button className="p-2" onClick={toggleMenu} aria-label="Close menu">
                <span className="block text-2xl text-slate-400">&times;</span>
              </button>
            </div>
            
            <ul className="flex flex-col p-6 space-y-4 bg-sand-50">
              <li>
                <Link href="/features" className="block py-2 text-lg text-slate-400 hover:text-sage transition-colors" onClick={() => setMenuOpen(false)} aria-label="View features">
                  features
                </Link>
              </li>
              <li>
                <Link href="/blog" className="block py-2 text-lg text-slate-400 hover:text-sage transition-colors" onClick={() => setMenuOpen(false)} aria-label="Read blog">
                  blog
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="block py-2 text-lg text-slate-400 hover:text-sage transition-colors" onClick={() => setMenuOpen(false)} aria-label="View recipes">
                  recipes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

