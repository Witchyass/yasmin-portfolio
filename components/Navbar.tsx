'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target instanceof HTMLElement) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-lg border-b border-white/30">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="text-lg font-bold text-gray-900 hover:text-primary-600 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Yasmin Sebei
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activeId === item.href.replace('#', '') ? 'page' : undefined}
              className={`text-sm font-medium transition-colors ${
                activeId === item.href.replace('#', '')
                  ? 'text-primary-600'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full glass"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="glass rounded-2xl p-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={activeId === item.href.replace('#', '') ? 'page' : undefined}
                className={`text-sm font-medium transition-colors ${
                  activeId === item.href.replace('#', '')
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
