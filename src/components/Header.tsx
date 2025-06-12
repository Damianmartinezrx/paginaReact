import { Home, FileDown, GraduationCap, GitBranch, Mail, Sun, Moon } from 'lucide-react';

interface NavItem {
  href: string;
  icon: JSX.Element;
  label: string;
  target?: string;
}

const navItems: NavItem[] = [
  { href: '#home', icon: <Home className="w-4 h-4" />, label: 'Home' },
  { href: 'Damian_CV.pdf', icon: <FileDown className="w-4 h-4" />, label: 'CV', target: '_blank' },
  { href: '#education', icon: <GraduationCap className="w-4 h-4" />, label: 'Educación' },
  { href: '#projects', icon: <GitBranch className="w-4 h-4" />, label: 'Proyectos' },
  { href: '#contact', icon: <Mail className="w-4 h-4" />, label: 'Contacto' }
];

interface HeaderProps {
  theme: string;
  onThemeToggle: () => void;
}

export default function Header({ theme, onThemeToggle }: HeaderProps) {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg transition-all duration-300 py-2 border-b ${theme === 'dark' ? 'border-gray-800/20 text-white' : 'border-gray-200/20 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <div className="flex items-baseline gap-1 font-bold">
          <span className="text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Damian
          </span>
          <span className="text-sm text-emerald-500 font-mono">Dev</span>
        </div>

        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
  <a
    key={item.label}
    href={item.href}
    target={item.href.endsWith('.pdf') ? '_blank' : undefined}
    rel={item.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all
      ${theme === 'dark' ? 'text-gray-300 hover:text-blue-500' : 'text-gray-600 hover:text-blue-600'}
      hover:bg-blue-500/10`}
  >
    {item.icon}
    <span className="hidden sm:inline">{item.label}</span>
  </a>
))}

        </nav>

        <button
          onClick={onThemeToggle}
          className={`w-12 h-7 rounded-full border-none cursor-pointer transition-all duration-300 overflow-hidden relative
            ${theme === 'dark' ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-yellow-300 to-orange-500'}`}
          aria-label="Toggle theme"
        >
          <Sun className={`absolute left-1.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white transition-all duration-1000
            ${theme === 'dark' ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
          <Moon className={`absolute right-1.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white transition-all duration-1000
            ${theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
        </button>
      </div>
    </header>
  );
}