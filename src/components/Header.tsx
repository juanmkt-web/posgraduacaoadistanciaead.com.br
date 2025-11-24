import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import logoFasul from "@/assets/logo_fasul.png";
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    label: "Por que Fasul",
    href: "#advantages"
  }, {
    label: "Nossos Cursos",
    href: "#differentials"
  }, {
    label: "Vantagens",
    href: "#advantages"
  }, {
    label: "Depoimentos",
    href: "#social-proof"
  }, {
    label: "FAQ",
    href: "#faq"
  }];
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 gradient-header ${isScrolled ? "shadow-lg" : "backdrop-blur-sm"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logoFasul} alt="Fasul" className="h-10 w-auto md:h-12 transition-all duration-300" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <a key={item.href} href={item.href} className="relative text-white/90 hover:text-white transition-all duration-300 text-sm font-medium after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white/80 after:transition-all after:duration-300 hover:after:w-full">
                {item.label}
              </a>)}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:08001234567" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
              
              
            </a>
            <a href="https://www.fasuleducacional.edu.br/posgraduacao/cursos" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">​Garantir minha bolsa</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4">
              {navItems.map(item => <a key={item.href} href={item.href} className="text-white/90 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.label}
                </a>)}
              
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">Garantir minha bolsa</Button>
            </nav>
          </div>}
      </div>
    </header>;
};