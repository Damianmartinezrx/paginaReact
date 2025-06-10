import { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';

const roles = [
  'Backend Developer',
  'QA Tester',
  'Problem Solver',
  'Code Enthusiast'
];

interface HeroProps {
  theme: string;
}

export default function Hero({ theme }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDebugger, setShowDebugger] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
          setDisplayText(displayText.slice(0, -1));
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowDebugger(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'Damian_CV.pdf';
    link.download = 'Damian Martinez Dev.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const footer = document.querySelector('.footer');
    footer?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center py-24 px-8 relative overflow-hidden">
      {/* Light Mode Background Pattern */}
      {theme === 'light' && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50" />
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-blue-100/30 to-purple-100/30 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      )}
      
      {/* Dark Mode Stars */}
      {theme === 'dark' && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="z-10">
          <div className="flex items-center gap-2 text-lg font-medium mb-6">
            <span className="text-xl animate-wave">👋</span>
            <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>¡Hola! Soy</span>
          </div>
          
          <h1 className="text-5xl font-bold leading-tight mb-6">
            <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Damian
            </span>
            <span className="block mt-2">
              <span className="text-3xl font-mono text-emerald-500">
                {displayText}
                <span className="animate-blink">|</span>
              </span>
            </span>
          </h1>

          <p className={`text-lg leading-relaxed mb-12 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Programador backend y tester QA con experiencia en diversas tecnologías 
            y metodologías de desarrollo. Me apasiona crear soluciones eficientes 
            y de alta calidad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl hover:transform hover:-translate-y-0.5 transition-all"
            >
              <span>Contactar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button
              onClick={downloadCV}
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Descargar CV</span>
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="relative w-96 h-96 rounded-full overflow-hidden">
            <div className={`absolute inset-0 transition-opacity duration-1000 ${showDebugger ? 'opacity-0' : 'opacity-100'}`}>
              <img
                src="/imagenProgramador.jpg"
                alt="Programmer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`absolute inset-0 transition-opacity duration-1000 ${showDebugger ? 'opacity-100' : 'opacity-0'}`}>
              <img
                src="/imagenBug.jpg"
                alt="Debug"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-[conic-gradient(transparent,rgba(255,255,255,0.3),transparent)] animate-spin"></div>
            <div className="absolute -inset-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}