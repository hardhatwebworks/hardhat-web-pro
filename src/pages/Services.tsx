import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const scrollToQuote = () => {
    navigate('/#quote-form');
  };

  return (
    <div className="min-h-screen bg-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-foreground">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Complete web solutions designed specifically for contractors and trade professionals.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 bg-card text-card-foreground">
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold mb-4 text-accent">New Websites</h3>
                <p className="text-muted-foreground mb-6">
                  A professional site that shows your services, photos, licenses, service areas, and how to contact you. Built to work with your Google Business Profile.
                </p>
                <ul className="space-y-3 text-sm mb-6">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Professional design tailored to your trade</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Mobile-first responsive layout</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Google Business Profile integration</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Service area mapping</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />License and certification display</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Photo gallery showcase</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-8 bg-card text-card-foreground">
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Website Revitalization</h3>
                <p className="text-muted-foreground mb-6">
                  Have a site already? We'll take your current website and transfer it to our platform, making it modern, credible, and mobile-friendly while striving to keep the same theme if desired.
                </p>
                <ul className="space-y-3 text-sm mb-6">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Platform migration with theme preservation</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Modern design updates</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Speed optimization</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Mobile responsiveness improvements</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Content improvements</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Credibility enhancements</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-8 bg-card text-card-foreground">
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold mb-4 text-accent">Time-Saver Setup</h3>
                <p className="text-muted-foreground mb-6">
                  Forms that route to your email or spreadsheet, optional scheduling links, and basic estimate/invoice workflows.
                </p>
                <ul className="space-y-3 text-sm mb-6">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Smart contact forms with routing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Online scheduling integration</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Estimate request workflows</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Basic invoice automation</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Lead qualification forms</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Spreadsheet integration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={scrollToQuote} 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4"
            >
              Get Started with Our Services
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;