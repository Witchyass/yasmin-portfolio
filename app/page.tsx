import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />

      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-gray-200/50">
        <p className="text-gray-600">
          Made by Yasmin ☕❤️
        </p>
      </footer>
    </main>
  );
}
