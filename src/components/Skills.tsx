import { useState, useEffect, useRef } from 'react';

const techStack = [
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'PHP',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  }
];

interface SkillsProps {
  theme: string;
}

export default function Skills({ theme }: SkillsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Tecnologías & Herramientas
        </h2>
        <p className={theme === 'dark' ? 'text-lg text-gray-400' : 'text-lg text-gray-600'}>
          Stack tecnológico con el que trabajo
        </p>
      </div>

      <div ref={carouselRef} className="relative overflow-hidden">
        <div className="flex gap-12 animate-scroll hover:pause">
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className={`min-w-[120px] flex flex-col items-center gap-4 p-6 rounded-xl backdrop-blur-lg transition-all duration-300
                ${theme === 'dark' ? 'bg-gray-800/80 border-gray-700' : 'bg-white/80 border-gray-200'}
                border hover:transform hover:-translate-y-2 hover:shadow-xl
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-12 h-12 object-contain drop-shadow-lg"
              />
              <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}