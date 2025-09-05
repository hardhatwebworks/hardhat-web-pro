import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/568306c3-754f-45f4-b40e-fca2daf1f6aa.png" 
              alt="Hardhat Webworks logo" 
              className="h-10 w-auto"
            />
            <span className="text-lg font-bold">Hardhat Webworks — Websites built for trades.</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="tel:971-772-6943" 
              className="flex items-center text-foreground hover:text-secondary transition-colors"
            >
              <Phone className="w-4 h-4 mr-1" />
              971-772-6943
            </a>
            <a 
              href="mailto:hardhatwebworks@gmail.com" 
              className="flex items-center text-foreground hover:text-secondary transition-colors"
            >
              <Mail className="w-4 h-4 mr-1" />
              hardhatwebworks@gmail.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2024 Hardhat Webworks. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-secondary transition-colors">Privacy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;