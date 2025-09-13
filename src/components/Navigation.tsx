import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">NeuroMente</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Início
            </a>
            <a href="/assessment" className="text-muted-foreground hover:text-foreground transition-colors">
              Avaliação
            </a>
            <a href="/chat" className="text-muted-foreground hover:text-foreground transition-colors">
              Conversa IA
            </a>
            <a href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </a>
          </div>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              Sign In
            </button>
            <a href="/assessment" className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:scale-105 transition-transform">
              Iniciar Avaliação
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4">
            <div className="flex flex-col gap-4">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Início
              </a>
              <a href="/assessment" className="text-muted-foreground hover:text-foreground transition-colors">
                Avaliação
              </a>
              <a href="/chat" className="text-muted-foreground hover:text-foreground transition-colors">
                Conversa IA
              </a>
              <a href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                Dashboard
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <button className="text-muted-foreground hover:text-foreground transition-colors text-left">
                  Entrar
                </button>
                <a href="/assessment" className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium text-center">
                  Iniciar Avaliação
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;