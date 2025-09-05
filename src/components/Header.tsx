import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const scrollToQuote = () => {
    if (window.location.pathname === '/') {
      document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#quote-form');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/80 border-b border-border">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/568306c3-754f-45f4-b40e-fca2daf1f6aa.png" 
            alt="Hardhat Webworks logo" 
            className="h-12 w-auto"
          />
          <span className="text-xl font-bold text-foreground">Hardhat Webworks</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/services" className="text-foreground hover:text-secondary transition-colors">Services</Link>
          <Link to="/about" className="text-foreground hover:text-secondary transition-colors">About</Link>
          <Link to="/pricing" className="text-foreground hover:text-secondary transition-colors">Pricing</Link>
          <div className="flex items-center space-x-3">
            <a 
              href="tel:971-772-6943" 
              className="text-foreground hover:text-secondary transition-colors font-medium border border-foreground rounded-md px-3 py-1 hover:bg-foreground hover:text-primary"
            >
              <Phone className="inline w-4 h-4 mr-1" />971-772-6943
            </a>
            <Button 
              onClick={scrollToQuote} 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Get a Free Quote
            </Button>
          </div>
        </nav>

        <div className="md:hidden">
          <Button 
            onClick={scrollToQuote} 
            size="sm" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Free Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;