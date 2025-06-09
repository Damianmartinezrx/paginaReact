import { Github, Linkedin, Heart } from 'lucide-react';

interface FooterProps {
  theme: string;
}

export default function Footer({ theme }: FooterProps) {
  return (
    <footer className={`py-12 px-8 border-t backdrop-blur-lg ${theme === 'dark' ? 'border-gray-800/20 text-white' : 'border-gray-200/20 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 text-center">
        <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
          <p className="mb-1">&copy; 2024 Damian. Todos los derechos reservados.</p>
          <p className="flex items-center justify-center gap-2">
            Creado con <Heart className="w-4 h-4 text-red-500 animate-pulse" /> y mucho café
          </p>
        </div>
        
        <div className="flex gap-4">
          <a
            href="#"
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all
              ${theme === 'dark' ? 'bg-gray-800/80 text-gray-400 hover:text-blue-500' : 'bg-gray-200/80 text-gray-600 hover:text-blue-600'}
              hover:transform hover:-translate-y-1`}
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all
              ${theme === 'dark' ? 'bg-gray-800/80 text-gray-400 hover:text-blue-500' : 'bg-gray-200/80 text-gray-600 hover:text-blue-600'}
              hover:transform hover:-translate-y-1`}
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}